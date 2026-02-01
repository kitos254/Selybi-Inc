import express from 'express';
import rateLimit from 'express-rate-limit';
import Contact from '../models/Contact.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Rate limiting for contact form submissions
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 contact submissions per hour
  message: 'Too many contact submissions, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// @desc    Submit a contact message (public)
// @route   POST /api/contacts
// @access  Public
router.post('/', contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide name, email, subject, and message'
      });
    }

    // Create contact message
    const contact = await Contact.create({
      name,
      email,
      subject,
      message
    });

    res.status(201).json({
      status: 'success',
      message: 'Your message has been sent successfully. We will get back to you soon.',
      data: {
        id: contact._id
      }
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        status: 'fail',
        message: messages.join('. ')
      });
    }

    res.status(500).json({
      status: 'error',
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// @desc    Get all contact messages (admin only)
// @route   GET /api/contacts
// @access  Private/Admin
router.get('/', protect, async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      status,
      priority,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build query
    const query = {};
    
    if (status) {
      query.status = status;
    }
    
    if (priority) {
      query.priority = priority;
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } }
      ];
    }

    // Build sort
    const sort = {};
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

    // Execute query with pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const [contacts, total] = await Promise.all([
      Contact.find(query)
        .sort(sort)
        .skip(skip)
        .limit(parseInt(limit))
        .lean(),
      Contact.countDocuments(query)
    ]);

    // Get counts by status
    const statusCounts = await Contact.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);

    const counts = {
      total,
      unread: 0,
      read: 0,
      replied: 0,
      archived: 0
    };

    statusCounts.forEach(item => {
      counts[item._id] = item.count;
    });

    res.status(200).json({
      status: 'success',
      data: {
        contacts,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / parseInt(limit))
        },
        counts
      }
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch contact messages'
    });
  }
});

// @desc    Get single contact message (admin only)
// @route   GET /api/contacts/:id
// @access  Private/Admin
router.get('/:id', protect, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        status: 'fail',
        message: 'Contact message not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: { contact }
    });
  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch contact message'
    });
  }
});

// @desc    Update contact status (admin only)
// @route   PATCH /api/contacts/:id
// @access  Private/Admin
router.patch('/:id', protect, async (req, res) => {
  try {
    const { status, priority, notes } = req.body;
    
    const updateData = {};
    if (status) updateData.status = status;
    if (priority) updateData.priority = priority;
    if (notes !== undefined) updateData.notes = notes;
    
    // If marking as replied, set repliedAt and repliedBy
    if (status === 'replied') {
      updateData.repliedAt = new Date();
      updateData.repliedBy = req.user._id;
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        status: 'fail',
        message: 'Contact message not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: { contact }
    });
  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update contact message'
    });
  }
});

// @desc    Delete contact message (admin only)
// @route   DELETE /api/contacts/:id
// @access  Private/Admin
router.delete('/:id', protect, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        status: 'fail',
        message: 'Contact message not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Contact message deleted successfully'
    });
  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete contact message'
    });
  }
});

// @desc    Get contact stats (admin only)
// @route   GET /api/contacts/admin/stats
// @access  Private/Admin
router.get('/admin/stats', protect, async (req, res) => {
  try {
    const [statusStats, recentMessages, dailyStats] = await Promise.all([
      // Count by status
      Contact.aggregate([
        { $group: { _id: '$status', count: { $sum: 1 } } }
      ]),
      // Recent messages (last 5)
      Contact.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select('name email subject status createdAt')
        .lean(),
      // Messages in last 7 days
      Contact.aggregate([
        {
          $match: {
            createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
          }
        },
        {
          $group: {
            _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
            count: { $sum: 1 }
          }
        },
        { $sort: { _id: 1 } }
      ])
    ]);

    const counts = {
      total: 0,
      unread: 0,
      read: 0,
      replied: 0,
      archived: 0
    };

    statusStats.forEach(item => {
      counts[item._id] = item.count;
      counts.total += item.count;
    });

    res.status(200).json({
      status: 'success',
      data: {
        counts,
        recentMessages,
        dailyStats
      }
    });
  } catch (error) {
    console.error('Get contact stats error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch contact statistics'
    });
  }
});

export default router;
