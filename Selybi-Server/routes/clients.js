import express from 'express';
import rateLimit from 'express-rate-limit';
import { protectClient } from '../middleware/clientAuth.js';
import {
  register,
  verifyEmail,
  resendVerification,
  login,
  logout,
  getMe,
  verifyToken,
  updateProfile,
  changePassword,
  googleAuth,
  googleCallback,
  setPassword,
  forgotPassword,
  resetPassword
} from '../controllers/clientController.js';

const router = express.Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many authentication attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3,
  message: 'Too many login attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// @route   POST /api/clients/register
// @access  Public
router.post('/register', authLimiter, register);

// @route   POST /api/clients/verify-email
// @access  Public
router.post('/verify-email', verifyEmail);

// @route   POST /api/clients/resend-verification
// @access  Public
router.post('/resend-verification', authLimiter, resendVerification);

// @route   POST /api/clients/login
// @access  Public
router.post('/login', loginLimiter, login);

// @route   POST /api/clients/logout
// @access  Public
router.post('/logout', logout);

// @route   GET /api/clients/auth/google
// @access  Public
router.get('/auth/google', googleAuth);

// @route   GET /api/clients/auth/google/callback
// @access  Public
router.get('/auth/google/callback', googleCallback);

// @route   GET /api/clients/me
// @access  Private
router.get('/me', protectClient, getMe);

// @route   POST /api/clients/verify-token
// @access  Private
router.post('/verify-token', protectClient, verifyToken);

// @route   POST /api/clients/set-password
// @access  Private
router.post('/set-password', protectClient, setPassword);

// @route   POST /api/clients/forgot-password
// @access  Public
router.post('/forgot-password', authLimiter, forgotPassword);

// @route   POST /api/clients/reset-password
// @access  Public
router.post('/reset-password', resetPassword);

// @route   PUT /api/clients/profile
// @access  Private
router.put('/profile', protectClient, updateProfile);

// @route   PATCH /api/clients/change-password
// @access  Private
router.patch('/change-password', protectClient, changePassword);

export default router;
