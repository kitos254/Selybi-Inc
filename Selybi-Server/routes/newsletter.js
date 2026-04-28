import express from 'express';
import rateLimit from 'express-rate-limit';
import validator from 'validator';
import NewsletterSubscriber from '../models/NewsletterSubscriber.js';
import { sendNewsletterConfirmationEmail } from '../utils/emailService.js';

const router = express.Router();

const newsletterLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: 'Too many newsletter subscription attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter/subscribe
// @access  Public
router.post('/subscribe', newsletterLimiter, async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required',
      });
    }

    const normalizedEmail = String(email).trim().toLowerCase();

    if (!validator.isEmail(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email',
      });
    }

    const existingSubscriber = await NewsletterSubscriber.findOne({ email: normalizedEmail });

    if (existingSubscriber && existingSubscriber.status === 'active') {
      return res.status(409).json({
        success: false,
        message: 'This email is already subscribed to the newsletter',
      });
    }

    const subscriber = existingSubscriber
      ? await NewsletterSubscriber.findByIdAndUpdate(
          existingSubscriber._id,
          { status: 'active', subscribedAt: new Date() },
          { new: true, runValidators: true }
        )
      : await NewsletterSubscriber.create({ email: normalizedEmail });

    const responsePayload = {
      success: true,
      message: 'Subscription successful. Please check your inbox for confirmation.',
      data: {
        id: subscriber._id,
        email: subscriber.email,
      },
    };

    // Respond immediately after persistence so frontend can confirm instantly.
    res.status(201).json(responsePayload);

    // Send email in background and avoid blocking API response time.
    sendNewsletterConfirmationEmail(normalizedEmail)
      .then((emailResult) => {
        if (!emailResult.success) {
          console.error('Newsletter confirmation email failed:', emailResult.error);
        }
      })
      .catch((emailError) => {
        console.error('Newsletter confirmation email exception:', emailError);
      });

    return;
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'This email is already subscribed to the newsletter',
      });
    }

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join('. '),
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to subscribe to newsletter. Please try again later.',
    });
  }
});

export default router;
