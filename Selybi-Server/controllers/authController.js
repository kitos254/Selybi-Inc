import Admin from '../models/Admin.js';
import { createSendToken } from '../middleware/auth.js';

// @desc    Authenticate admin and get token
// @access  Public
export const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide email/username and password!'
      });
    }

    const user = await Admin.findByCredentials(identifier);

    if (!user) {
      return res.status(401).json({ status: 'fail', message: 'Invalid credentials' });
    }

    if (user.isLocked) {
      return res.status(423).json({
        status: 'fail',
        message: 'Account temporarily locked due to too many failed login attempts'
      });
    }

    const isPasswordCorrect = await user.correctPassword(password, user.password);

    if (!isPasswordCorrect) {
      await user.incLoginAttempts();
      return res.status(401).json({ status: 'fail', message: 'Invalid credentials' });
    }

    if (user.loginAttempts > 0) {
      await user.updateOne({ $unset: { loginAttempts: 1, lockUntil: 1 } });
    }

    await user.updateOne({ lastLogin: new Date() });

    createSendToken(user, 200, res);
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ status: 'error', message: 'Something went wrong during login' });
  }
};

// @desc    Logout admin
// @access  Public
export const logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).json({ status: 'success', message: 'Logged out successfully' });
};

// @desc    Get current admin profile
// @access  Private
export const getMe = async (req, res) => {
  try {
    const user = await Admin.findById(req.user.id);
    res.status(200).json({ status: 'success', data: { user } });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ status: 'error', message: 'Error retrieving user profile' });
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

// @desc    Change current admin password
// @access  Private
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    if (!currentPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide current password, new password, and confirmation'
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ status: 'fail', message: 'New password and confirmation do not match' });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ status: 'fail', message: 'New password must be at least 8 characters long' });
    }

    const user = await Admin.findById(req.user.id).select('+password');
    const isCurrentPasswordCorrect = await user.correctPassword(currentPassword, user.password);

    if (!isCurrentPasswordCorrect) {
      return res.status(401).json({ status: 'fail', message: 'Current password is incorrect' });
    }

    user.password = newPassword;
    await user.save();

    createSendToken(user, 200, res);
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ status: 'error', message: 'Error changing password' });
  }
};

// @desc    Create new admin user (Super Admin / Admin only)
// @access  Private
export const createUser = async (req, res) => {
  try {
    const { name, email, username, password, role = 'user' } = req.body;

    if (!name || !email || !username || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide all required fields: name, email, username, password'
      });
    }

    const existingUser = await Admin.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ status: 'fail', message: 'User with this email or username already exists' });
    }

    const newUser = await Admin.create({
      name,
      email,
      username,
      password,
      role,
      permissions: Admin.getDefaultPermissions(role),
      createdBy: req.user.id
    });

    res.status(201).json({ status: 'success', message: 'User created successfully', data: { user: newUser } });
  } catch (error) {
    console.error('Create user error:', error);

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({ status: 'fail', message: `User with this ${field} already exists` });
    }

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ status: 'fail', message: 'Validation error', errors });
    }

    res.status(500).json({ status: 'error', message: 'Error creating user' });
  }
};

// @desc    Update admin profile
// @access  Private
export const updateProfile = async (req, res) => {
  try {
    const { name, email, username, phone, location, bio } = req.body;
    const userId = req.user.id;

    if (email || username) {
      const existingUser = await Admin.findOne({
        $and: [
          { _id: { $ne: userId } },
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
        return res.status(400).json({ status: 'fail', message: `This ${field} is already taken by another user` });
      }
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (username) updateData.username = username;
    if (phone !== undefined) updateData.phone = phone;
    if (location !== undefined) updateData.location = location;
    if (bio !== undefined) updateData.bio = bio;

    const updatedUser = await Admin.findByIdAndUpdate(userId, updateData, { new: true, runValidators: true }).select('-password');

    res.status(200).json({ status: 'success', message: 'Profile updated successfully', data: { user: updatedUser } });
  } catch (error) {
    console.error('Update profile error:', error);

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({ status: 'fail', message: `This ${field} is already taken` });
    }

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ status: 'fail', message: 'Validation error', errors });
    }

    res.status(500).json({ status: 'error', message: 'Error updating profile' });
  }
};
