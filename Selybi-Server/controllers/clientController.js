import crypto from 'crypto';
import Client from '../models/Client.js';
import jwt from 'jsonwebtoken';
import { google } from 'googleapis';
import { sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail } from '../utils/emailService.js';

const GOOGLE_REDIRECT_URI = 'http://localhost:4000/api/clients/auth/google/callback';
const CLIENT_FRONTEND_URL = process.env.CUSTOMER_DASHBOARD_URL || 'http://localhost:8080';

const getOAuthClient = () => new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
);

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d'
  });
};

const createSendToken = (client, statusCode, res) => {
  const token = signToken(client._id);

  const cookieOptions = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  };

  res.cookie('jwt', token, cookieOptions);

  const userObj = client.toObject ? client.toObject() : { ...client };
  userObj.hasPassword = Boolean(client.password);
  delete userObj.password;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: { user: userObj }
  });
};

// @desc    Register a new client
// @access  Public
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide name, email, and password.'
      });
    }

    const existingClient = await Client.findOne({ email: email.toLowerCase() });
    if (existingClient) {
      return res.status(400).json({
        status: 'fail',
        message: 'An account with this email already exists.'
      });
    }

    const newClient = await Client.create({
      name,
      email,
      password,
      isVerified: false
    });

    const verificationToken = newClient.createEmailVerificationToken();
    await newClient.save({ validateBeforeSave: false });

    try {
      await sendVerificationEmail(newClient.email, newClient.name, verificationToken);

      return res.status(201).json({
        status: 'success',
        message: 'Registration successful! Please check your email to verify your account.',
        data: {
          user: {
            id: newClient._id,
            name: newClient.name,
            email: newClient.email,
            isVerified: newClient.isVerified
          }
        }
      });
    } catch (emailError) {
      console.error('Error sending verification email:', emailError);
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
      return res.status(400).json({ status: 'fail', message: 'Validation Error', errors });
    }

    res.status(500).json({ status: 'error', message: 'Something went wrong during registration.' });
  }
};

// @desc    Verify client email address
// @access  Public
export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ status: 'fail', message: 'Please provide a verification token.' });
    }

    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const client = await Client.findOne({
      emailVerificationToken: hashedToken,
      emailVerificationExpires: { $gt: Date.now() }
    });

    if (!client) {
      return res.status(400).json({ status: 'fail', message: 'Invalid or expired verification token.' });
    }

    client.isVerified = true;
    client.emailVerificationToken = undefined;
    client.emailVerificationExpires = undefined;
    await client.save({ validateBeforeSave: false });

    try {
      await sendWelcomeEmail(client.email, client.name);
    } catch (emailError) {
      console.error('Error sending welcome email:', emailError);
    }

    createSendToken(client, 200, res);
  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({ status: 'error', message: 'Something went wrong during email verification.' });
  }
};

// @desc    Resend email verification link
// @access  Public
export const resendVerification = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ status: 'fail', message: 'Please provide an email address.' });
    }

    const client = await Client.findOne({ email: email.toLowerCase(), isVerified: false });

    if (!client) {
      return res.status(404).json({
        status: 'fail',
        message: 'No unverified account found with that email address.'
      });
    }

    const verificationToken = client.createEmailVerificationToken();
    await client.save({ validateBeforeSave: false });

    try {
      await sendVerificationEmail(client.email, client.name, verificationToken);
      return res.status(200).json({
        status: 'success',
        message: 'Verification email sent! Please check your inbox.'
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
    res.status(500).json({ status: 'error', message: 'Something went wrong while resending verification email.' });
  }
};

// @desc    Login client
// @access  Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ status: 'fail', message: 'Please provide email and password.' });
    }

    const client = await Client.findByCredentials(email);

    if (!client) {
      return res.status(401).json({ status: 'fail', message: 'Invalid credentials.' });
    }

    if (client.isLocked) {
      return res.status(423).json({
        status: 'fail',
        message: 'Account temporarily locked due to too many failed login attempts. Try again later.'
      });
    }

    const isPasswordCorrect = await client.correctPassword(password, client.password);

    if (!isPasswordCorrect) {
      await client.incLoginAttempts();
      return res.status(401).json({ status: 'fail', message: 'Invalid credentials.' });
    }

    if (!client.isVerified) {
      return res.status(401).json({
        status: 'fail',
        message: 'Please verify your email address before logging in. Check your inbox for the verification link.',
        needsVerification: true,
        email: client.email
      });
    }

    if (client.loginAttempts > 0) {
      await client.updateOne({ $unset: { loginAttempts: 1, lockUntil: 1 } });
    }

    await client.updateOne({ lastLogin: new Date() });

    createSendToken(client, 200, res);
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ status: 'error', message: 'Something went wrong during login.' });
  }
};

// @desc    Redirect to Google OAuth consent screen
// @access  Public
export const googleAuth = (req, res) => {
  const oauth2Client = getOAuthClient();
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
    prompt: 'select_account'
  });
  res.redirect(url);
};

// @desc    Google OAuth callback — exchange code for tokens, upsert client, redirect with JWT
// @access  Public
export const googleCallback = async (req, res) => {
  try {
    const { code } = req.query;
    if (!code) {
      return res.redirect(`${CLIENT_FRONTEND_URL}/login?error=google_failed`);
    }

    const oauth2Client = getOAuthClient();
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const { data: profile } = await oauth2.userinfo.get();

    if (!profile.email) {
      return res.redirect(`${CLIENT_FRONTEND_URL}/login?error=google_no_email`);
    }

    let client = await Client.findOne({ email: profile.email.toLowerCase() });

    if (client) {
      if (!client.googleId) {
        await client.updateOne({ googleId: profile.id, isVerified: true, avatar: profile.picture || client.avatar });
        client = await Client.findById(client._id);
      }
    } else {
      client = await Client.create({
        name: profile.name,
        email: profile.email.toLowerCase(),
        googleId: profile.id,
        avatar: profile.picture || null,
        isVerified: true,
        isActive: true
      });
      try { await sendWelcomeEmail(client.email, client.name); } catch (_) {}
    }

    await client.updateOne({ lastLogin: new Date() });

    const jwtToken = signToken(client._id);
    const needsPassword = !client.password;
    const redirect = needsPassword
      ? `${CLIENT_FRONTEND_URL}/auth/callback?token=${jwtToken}&needs_password=true`
      : `${CLIENT_FRONTEND_URL}/auth/callback?token=${jwtToken}`;
    res.redirect(redirect);
  } catch (error) {
    console.error('Google OAuth callback error:', error);
    res.redirect(`${CLIENT_FRONTEND_URL}/login?error=google_failed`);
  }
};

// @desc    Set password for OAuth-only accounts
// @access  Private
export const setPassword = async (req, res) => {
  try {
    const { password } = req.body;

    if (!password || password.length < 8) {
      return res.status(400).json({ status: 'fail', message: 'Password must be at least 8 characters.' });
    }

    const client = await Client.findById(req.user.id).select('+password');
    if (!client) {
      return res.status(404).json({ status: 'fail', message: 'Client not found.' });
    }

    if (client.password) {
      return res.status(400).json({ status: 'fail', message: 'Account already has a password. Use the change password flow.' });
    }

    client.password = password;
    await client.save();

    res.status(200).json({ status: 'success', message: 'Password set successfully.' });
  } catch (error) {
    console.error('Set password error:', error);
    res.status(500).json({ status: 'error', message: 'Something went wrong.' });
  }
};

// @desc    Logout client
// @access  Public
export const logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).json({ status: 'success', message: 'Logged out successfully.' });
};

// @desc    Get current client
// @access  Private
export const getMe = async (req, res) => {
  try {
    const client = await Client.findById(req.user.id).select('+password');
    const userObj = client.toObject();
    userObj.hasPassword = Boolean(client.password);
    delete userObj.password;
    res.status(200).json({ status: 'success', data: { user: userObj } });
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({ status: 'error', message: 'Something went wrong.' });
  }
};

// @desc    Verify token validity
// @access  Private
export const verifyToken = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Token is valid',
    data: { user: req.user }
  });
};

// @desc    Update client profile
// @access  Private
export const updateProfile = async (req, res) => {
  try {
    const { name, phone, company, jobTitle, timezone } = req.body;

    const client = await Client.findById(req.user.id);
    if (!client) {
      return res.status(404).json({ status: 'fail', message: 'Client not found.' });
    }

    if (name !== undefined) client.name = name;
    if (phone !== undefined) client.phone = phone;
    if (company !== undefined) client.company = company;
    if (jobTitle !== undefined) client.jobTitle = jobTitle;
    if (timezone !== undefined) client.timezone = timezone;

    await client.save();

    const userObj = client.toObject();
    userObj.hasPassword = Boolean(client.password);
    delete userObj.password;

    res.status(200).json({ status: 'success', data: { user: userObj } });
  } catch (error) {
    console.error('Profile update error:', error);

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ status: 'fail', message: 'Validation Error', errors });
    }

    res.status(500).json({ status: 'error', message: 'Something went wrong while updating profile.' });
  }
};

// @desc    Change password (for clients who already have one)
// @access  Private
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ status: 'fail', message: 'Please provide current and new password.' });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ status: 'fail', message: 'New password must be at least 8 characters.' });
    }

    const client = await Client.findById(req.user.id).select('+password');
    if (!client) {
      return res.status(404).json({ status: 'fail', message: 'Client not found.' });
    }

    if (!client.password) {
      return res.status(400).json({ status: 'fail', message: 'No password set. Use set-password instead.' });
    }

    const isCorrect = await client.correctPassword(currentPassword, client.password);
    if (!isCorrect) {
      return res.status(401).json({ status: 'fail', message: 'Current password is incorrect.' });
    }

    client.password = newPassword;
    await client.save();

    res.status(200).json({ status: 'success', message: 'Password changed successfully.' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ status: 'error', message: 'Something went wrong.' });
  }
};

// @desc    Forgot password — send reset email
// @access  Public
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ status: 'fail', message: 'Please provide your email address.' });

    const client = await Client.findOne({ email: email.toLowerCase(), isActive: true });

    // Always respond with success to avoid email enumeration
    if (!client) {
      return res.status(200).json({ status: 'success', message: 'If an account with that email exists, a reset link has been sent.' });
    }

    const resetToken = client.createPasswordResetToken();
    await client.save({ validateBeforeSave: false });

    const result = await sendPasswordResetEmail(client.email, client.name, resetToken);

    if (!result.success) {
      console.error('Password reset email failed:', result.error);
    }

    res.status(200).json({ status: 'success', message: 'If an account with that email exists, a reset link has been sent.' });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ status: 'error', message: 'Something went wrong.' });
  }
};

// @desc    Reset password using token
// @access  Public
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.query;
    const { password } = req.body;

    if (!token) return res.status(400).json({ status: 'fail', message: 'Reset token is required.' });
    if (!password || password.length < 8) return res.status(400).json({ status: 'fail', message: 'Password must be at least 8 characters.' });

    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const client = await Client.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
      isActive: true,
    }).select('+password');

    if (!client) {
      return res.status(400).json({ status: 'fail', message: 'Reset link is invalid or has expired.' });
    }

    client.password = password;
    client.passwordResetToken = undefined;
    client.passwordResetExpires = undefined;
    await client.save();

    createSendToken(client, 200, res);
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ status: 'error', message: 'Something went wrong.' });
  }
};
