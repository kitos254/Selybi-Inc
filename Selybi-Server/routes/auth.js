import express from 'express';
import rateLimit from 'express-rate-limit';
import { protect, restrictTo } from '../middleware/auth.js';
import {
  login,
  logout,
  getMe,
  verifyToken,
  changePassword,
  createUser,
  updateProfile
} from '../controllers/authController.js';

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3,
  message: 'Too many login attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// @route   POST /api/auth/login
// @access  Public
router.post('/login', loginLimiter, login);

// @route   POST /api/auth/logout
// @access  Public
router.post('/logout', logout);

// @route   GET /api/auth/me
// @access  Private
router.get('/me', protect, getMe);

// @route   POST /api/auth/verify-token
// @access  Private
router.post('/verify-token', protect, verifyToken);

// @route   PUT /api/auth/change-password
// @access  Private
router.put('/change-password', protect, changePassword);

// @route   POST /api/auth/create-user
// @access  Private (Admin / Super Admin)
router.post('/create-user', protect, restrictTo('admin', 'super_admin'), createUser);

// @route   PUT /api/auth/update-profile
// @access  Private
router.put('/update-profile', protect, updateProfile);

export default router;
