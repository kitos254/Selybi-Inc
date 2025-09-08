import express from 'express';
import rateLimit from 'express-rate-limit';
import Admin from '../models/Admin.js';
import { createSendToken, protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

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

// @route   POST /api/auth/login
// @desc    Authenticate user and get token
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

    // 2) Check if user exists and password is correct
    const user = await Admin.findByCredentials(identifier);

    if (!user) {
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid credentials'
      });
    }

    // 3) Check if account is locked
    if (user.isLocked) {
      return res.status(423).json({
        status: 'fail',
        message: 'Account temporarily locked due to too many failed login attempts'
      });
    }

    // 4) Check password
    const isPasswordCorrect = await user.correctPassword(password, user.password);

    if (!isPasswordCorrect) {
      // Increment login attempts
      await user.incLoginAttempts();
      
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid credentials'
      });
    }

    // 5) Reset login attempts on successful login
    if (user.loginAttempts > 0) {
      await user.updateOne({
        $unset: { loginAttempts: 1, lockUntil: 1 }
      });
    }

    // 6) Update last login
    await user.updateOne({ lastLogin: new Date() });

    // 7) If everything is ok, send token to client
    createSendToken(user, 200, res);
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong during login'
    });
  }
});

// @route   POST /api/auth/logout
// @desc    Clear token cookie
// @access  Public
router.post('/logout', (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  
  res.status(200).json({ 
    status: 'success',
    message: 'Logged out successfully'
  });
});

// @route   GET /api/auth/me
// @desc    Get current user profile
// @access  Private
router.get('/me', protect, async (req, res) => {
  try {
    const user = await Admin.findById(req.user.id);
    
    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Error retrieving user profile'
    });
  }
});

// @route   POST /api/auth/verify-token
// @desc    Verify if token is valid
// @access  Private
router.post('/verify-token', protect, (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Token is valid',
    data: {
      user: req.user
    }
  });
});

// @route   PUT /api/auth/change-password
// @desc    Change current user password
// @access  Private
router.put('/change-password', protect, async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    // 1) Validate input
    if (!currentPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide current password, new password, and confirmation'
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        status: 'fail',
        message: 'New password and confirmation do not match'
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        status: 'fail',
        message: 'New password must be at least 8 characters long'
      });
    }

    // 2) Get user with password
    const user = await Admin.findById(req.user.id).select('+password');

    // 3) Check if current password is correct
    const isCurrentPasswordCorrect = await user.correctPassword(currentPassword, user.password);
    
    if (!isCurrentPasswordCorrect) {
      return res.status(401).json({
        status: 'fail',
        message: 'Current password is incorrect'
      });
    }

    // 4) Update password
    user.password = newPassword;
    await user.save();

    // 5) Send new token
    createSendToken(user, 200, res);
    
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Error changing password'
    });
  }
});

// @route   POST /api/auth/create-user
// @desc    Create new user (Admin only)
// @access  Private (Admin/Super Admin)
router.post('/create-user', protect, restrictTo('admin', 'super_admin'), async (req, res) => {
  try {
    const { name, email, username, password, role = 'user' } = req.body;

    // 1) Validate input
    if (!name || !email || !username || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide all required fields: name, email, username, password'
      });
    }

    // 2) Check if user already exists
    const existingUser = await Admin.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        status: 'fail',
        message: 'User with this email or username already exists'
      });
    }

    // 3) Create new user
    const newUser = await Admin.create({
      name,
      email,
      username,
      password,
      role,
      permissions: Admin.getDefaultPermissions(role),
      createdBy: req.user.id
    });

    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      data: {
        user: newUser
      }
    });
    
  } catch (error) {
    console.error('Create user error:', error);
    
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        status: 'fail',
        message: `User with this ${field} already exists`
      });
    }
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({
        status: 'fail',
        message: 'Validation error',
        errors
      });
    }
    
    res.status(500).json({
      status: 'error',
      message: 'Error creating user'
    });
  }
});

// @route   PUT /api/auth/update-profile
// @desc    Update user profile information
// @access  Private
router.put('/update-profile', protect, async (req, res) => {
  try {
    const { name, email, username, phone, location, bio } = req.body;
    const userId = req.user.id;

    // 1) Check if email or username is being changed and if they're already taken
    if (email || username) {
      const existingUser = await User.findOne({
        $and: [
          { _id: { $ne: userId } }, // Exclude current user
          {
            $or: [
              ...(email ? [{ email }] : []),
              ...(username ? [{ username }] : [])
            ]
          }
        ]
      });

      if (existingUser) {
        const field = existingUser.email === email ? 'email' : 'username';
        return res.status(400).json({
          status: 'fail',
          message: `This ${field} is already taken by another user`
        });
      }
    }

    // 2) Update user profile
    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (username) updateData.username = username;
    if (phone !== undefined) updateData.phone = phone;
    if (location !== undefined) updateData.location = location;
    if (bio !== undefined) updateData.bio = bio;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    ).select('-password');

    res.status(200).json({
      status: 'success',
      message: 'Profile updated successfully',
      data: {
        user: updatedUser
      }
    });

  } catch (error) {
    console.error('Update profile error:', error);
    
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        status: 'fail',
        message: `This ${field} is already taken`
      });
    }
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({
        status: 'fail',
        message: 'Validation error',
        errors
      });
    }
    
    res.status(500).json({
      status: 'error',
      message: 'Error updating profile'
    });
  }
});

export default router;
