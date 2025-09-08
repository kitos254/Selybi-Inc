import express from 'express';
import rateLimit from 'express-rate-limit';
import Client from '../models/Client.js';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { sendVerificationEmail, sendWelcomeEmail } from '../utils/emailService.js';
import crypto from 'crypto';

const router = express.Router();

// Generate JWT token for clients
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d'
  });
};

// Create and send token response for clients
const createSendToken = (client, statusCode, res) => {
  const token = signToken(client._id);
  
  const cookieOptions = {
    expires: new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  };

  res.cookie('jwt', token, cookieOptions);

  // Remove password from output
  client.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user: client
    }
  });
};

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs for auth endpoints
  message: 'Too many authentication attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // limit each IP to 3 login attempts per windowMs
  message: 'Too many login attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Client authentication middleware
export const protectClient = async (req, res, next) => {
  try {
    // 1) Get token and check if it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'You are not logged in! Please log in to get access.'
      });
    }

    // 2) Verification of token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) Check if client still exists
    const currentClient = await Client.findById(decoded.id);
    if (!currentClient) {
      return res.status(401).json({
        status: 'fail',
        message: 'The user belonging to this token does no longer exist.'
      });
    }

    // 4) Check if client is active
    if (!currentClient.isActive) {
      return res.status(401).json({
        status: 'fail',
        message: 'Your account has been deactivated. Please contact support.'
      });
    }

    // 5) Check if client changed password after the token was issued
    if (currentClient.changedPasswordAfter(decoded.iat)) {
      return res.status(401).json({
        status: 'fail',
        message: 'User recently changed password! Please log in again.'
      });
    }

    // Grant access to protected route
    req.user = currentClient;
    next();
  } catch (error) {
    return res.status(401).json({
      status: 'fail',
      message: 'Invalid token. Please log in again!'
    });
  }
};

// @route   POST /api/clients/register
// @desc    Register a new client
// @access  Public
router.post('/register', authLimiter, async (req, res) => {
  try {
    const { 
      name, 
      email, 
      password, 
      phone 
    } = req.body;

    // 1) Check if required fields are provided
    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide name, email, password, and phone number!'
      });
    }

    // 2) Generate unique username from name
    const username = await Client.generateUsername(name);

    // 3) Check if client already exists
    const existingClient = await Client.findOne({
      email
    });

    if (existingClient) {
      return res.status(400).json({
        status: 'fail',
        message: 'User with this email already exists'
      });
    }

    // 4) Create new client (not verified initially)
    const newClient = await Client.create({
      name,
      email,
      username,
      password,
      phone,
      isVerified: false
    });

    // 5) Generate email verification token
    const verificationToken = newClient.createEmailVerificationToken();
    await newClient.save({ validateBeforeSave: false });

    // 6) Send verification email
    try {
      await sendVerificationEmail(newClient.email, newClient.name, verificationToken);
      
      res.status(201).json({
        status: 'success',
        message: 'Registration successful! Please check your email to verify your account.',
        data: {
          user: {
            id: newClient._id,
            name: newClient.name,
            email: newClient.email,
            username: newClient.username,
            isVerified: newClient.isVerified
          }
        }
      });
    } catch (emailError) {
      console.error('Error sending verification email:', emailError);
      // Delete the user if email sending fails
      await Client.findByIdAndDelete(newClient._id);
      
      return res.status(500).json({
        status: 'error',
        message: 'There was an error sending the verification email. Please try again.'
      });
    }
  } catch (error) {
    console.error('Registration error:', error);
    
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return res.status(400).json({
        status: 'fail',
        message: `${field} already exists. Please use a different ${field}.`
      });
    }

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        status: 'fail',
        message: 'Validation Error',
        errors
      });
    }

    res.status(500).json({
      status: 'error',
      message: 'Something went wrong during registration'
    });
  }
});

// @route   POST /api/clients/verify-email
// @desc    Verify client email address
// @access  Public
router.post('/verify-email', async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide a verification token'
      });
    }

    // 1) Hash the token and find the user
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const client = await Client.findOne({
      emailVerificationToken: hashedToken,
      emailVerificationExpires: { $gt: Date.now() }
    });

    if (!client) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid or expired verification token'
      });
    }

    // 2) Verify the user
    client.isVerified = true;
    client.emailVerificationToken = undefined;
    client.emailVerificationExpires = undefined;
    await client.save({ validateBeforeSave: false });

    // 3) Send welcome email
    try {
      await sendWelcomeEmail(client.email, client.name);
    } catch (emailError) {
      console.error('Error sending welcome email:', emailError);
      // Don't fail the verification if welcome email fails
    }

    // 4) Log the user in automatically
    createSendToken(client, 200, res, {
      message: 'Email verified successfully! Welcome to InnoVault.'
    });

  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong during email verification'
    });
  }
});

// @route   POST /api/clients/resend-verification
// @desc    Resend email verification link
// @access  Public
router.post('/resend-verification', authLimiter, async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide an email address'
      });
    }

    // 1) Find the user
    const client = await Client.findOne({ 
      email: email.toLowerCase(),
      isVerified: false 
    });

    if (!client) {
      return res.status(404).json({
        status: 'fail',
        message: 'No unverified user found with that email address'
      });
    }

    // 2) Generate new verification token
    const verificationToken = client.createEmailVerificationToken();
    await client.save({ validateBeforeSave: false });

    // 3) Send verification email
    try {
      await sendVerificationEmail(client.email, client.name, verificationToken);
      
      res.status(200).json({
        status: 'success',
        message: 'Verification email sent successfully! Please check your inbox.'
      });
    } catch (emailError) {
      console.error('Error sending verification email:', emailError);
      
      return res.status(500).json({
        status: 'error',
        message: 'There was an error sending the verification email. Please try again.'
      });
    }

  } catch (error) {
    console.error('Resend verification error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong while resending verification email'
    });
  }
});

// @route   POST /api/clients/login
// @desc    Authenticate client and get token
// @access  Public
router.post('/login', loginLimiter, async (req, res) => {
  try {
    const { identifier, password } = req.body;

    // 1) Check if email/username and password exist
    if (!identifier || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide email/username and password!'
      });
    }

    // 2) Check if client exists and password is correct
    const client = await Client.findByCredentials(identifier);

    if (!client) {
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid credentials'
      });
    }

    // 3) Check if account is locked
    if (client.isLocked) {
      return res.status(423).json({
        status: 'fail',
        message: 'Account temporarily locked due to too many failed login attempts. Try again later.'
      });
    }

    // 4) Check password
    const isPasswordCorrect = await client.correctPassword(password, client.password);
    
    if (!isPasswordCorrect) {
      await client.incLoginAttempts();
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid credentials'
      });
    }

    // 5) Check if email is verified
    if (!client.isVerified) {
      return res.status(401).json({
        status: 'fail',
        message: 'Please verify your email address before logging in. Check your inbox for the verification link.',
        needsVerification: true,
        email: client.email
      });
    }

    // 6) Reset login attempts if login is successful
    if (client.loginAttempts > 0) {
      await client.updateOne({
        $unset: { loginAttempts: 1, lockUntil: 1 }
      });
    }

    // 7) Update last login
    await client.updateOne({ lastLogin: new Date() });

    // 8) If everything ok, send token to client
    createSendToken(client, 200, res);
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong during login'
    });
  }
});

// @route   POST /api/clients/logout
// @desc    Logout client
// @access  Public
router.post('/logout', (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).json({ status: 'success' });
});

// @route   GET /api/clients/me
// @desc    Get current client
// @access  Private
router.get('/me', protectClient, async (req, res) => {
  try {
    const client = await Client.findById(req.user.id);
    
    res.status(200).json({
      status: 'success',
      data: {
        user: client
      }
    });
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong'
    });
  }
});

// @route   POST /api/clients/verify-token
// @desc    Verify if token is valid
// @access  Private
router.post('/verify-token', protectClient, (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Token is valid',
    data: {
      user: req.user
    }
  });
});

// @route   PUT /api/clients/profile
// @desc    Update client profile
// @access  Private
router.put('/profile', protectClient, async (req, res) => {
  try {
    const {
      name,
      university,
      course,
      graduationYear,
      studentId,
      phone,
      bio,
      skills,
      portfolio,
      github,
      linkedin
    } = req.body;

    const client = await Client.findById(req.user.id);

    if (!client) {
      return res.status(404).json({
        status: 'fail',
        message: 'Client not found'
      });
    }

    // Update fields
    if (name) client.name = name;
    if (university) client.university = university;
    if (course) client.course = course;
    if (graduationYear) client.graduationYear = graduationYear;
    if (studentId) client.studentId = studentId;
    if (phone) client.phone = phone;
    if (bio) client.bio = bio;
    if (skills) client.skills = skills;
    if (portfolio) client.portfolio = portfolio;
    if (github) client.github = github;
    if (linkedin) client.linkedin = linkedin;

    await client.save();

    res.status(200).json({
      status: 'success',
      data: {
        user: client
      }
    });
  } catch (error) {
    console.error('Profile update error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        status: 'fail',
        message: 'Validation Error',
        errors
      });
    }

    res.status(500).json({
      status: 'error',
      message: 'Something went wrong while updating profile'
    });
  }
});

export default router;
