import express from 'express';
import Project from '../models/Project.js';
import { protect, checkPermissions } from '../middleware/auth.js';

const router = express.Router();

// Get all projects with filtering and pagination
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 12,
      category,
      status = 'active',
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build filter object
    const filter = {};
    
    if (category && category !== 'all') {
      filter.category = category;
    }
    
    if (status && status !== 'all') {
      filter.status = status;
    }

    // Build query
    let query = Project.find(filter);

    // Add text search if provided
    if (search) {
      query = Project.find({
        ...filter,
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { technologies: { $in: [new RegExp(search, 'i')] } },
          { features: { $in: [new RegExp(search, 'i')] } }
        ]
      });
    }

    // Sort
    const sortObj = {};
    sortObj[sortBy] = sortOrder === 'desc' ? -1 : 1;
    query = query.sort(sortObj);

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    query = query.skip(skip).limit(parseInt(limit));

    // Execute query
    const projects = await query.populate('createdBy', 'name username');
    
    // Get total count for pagination
    const total = await Project.countDocuments(filter);

    res.json({
      success: true,
      data: {
        projects,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / parseInt(limit))
        }
      }
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching projects',
      error: error.message
    });
  }
});

// Get project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('createdBy', 'name username')
      .populate('finalBuyer', 'name username');

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Increment view count
    project.viewCount += 1;
    await project.save();

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching project',
      error: error.message
    });
  }
});

// Create new project (Admin only)
router.post('/', protect, checkPermissions('projects.create'), async (req, res) => {
  try {
    const {
      title,
      description,
      features,
      technologies,
      category,
      startingPrice,
      bidDeadline,
      status = 'draft',
      tags,
      imageUrl
    } = req.body;

    // Validate required fields
    if (!title || !description || !features || !technologies || !category || !startingPrice || !bidDeadline) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Validate bid deadline
    if (new Date(bidDeadline) <= new Date()) {
      return res.status(400).json({
        success: false,
        message: 'Bid deadline must be in the future'
      });
    }

    const project = new Project({
      title,
      description,
      features: Array.isArray(features) ? features : features.split(',').map(f => f.trim()),
      technologies: Array.isArray(technologies) ? technologies : technologies.split(',').map(t => t.trim()),
      category,
      startingPrice: parseFloat(startingPrice),
      bidDeadline: new Date(bidDeadline),
      status,
      tags: tags ? (Array.isArray(tags) ? tags : tags.split(',').map(t => t.trim())) : [],
      imageUrl,
      createdBy: req.user.id
    });

    await project.save();

    const populatedProject = await Project.findById(project._id)
      .populate('createdBy', 'name username');

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: populatedProject
    });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating project',
      error: error.message
    });
  }
});

// Update project (Admin only)
router.put('/:id', protect, checkPermissions('projects.update'), async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Don't allow updating if project has bids and is active
    if (project.status === 'active' && project.biddingHistory.length > 0) {
      const allowedFields = ['status', 'bidDeadline'];
      const updateFields = Object.keys(req.body);
      const isValidUpdate = updateFields.every(field => allowedFields.includes(field));

      if (!isValidUpdate) {
        return res.status(400).json({
          success: false,
          message: 'Cannot update project details once bidding has started'
        });
      }
    }

    // Process arrays if they come as strings
    if (req.body.features && typeof req.body.features === 'string') {
      req.body.features = req.body.features.split(',').map(f => f.trim());
    }
    if (req.body.technologies && typeof req.body.technologies === 'string') {
      req.body.technologies = req.body.technologies.split(',').map(t => t.trim());
    }
    if (req.body.tags && typeof req.body.tags === 'string') {
      req.body.tags = req.body.tags.split(',').map(t => t.trim());
    }

    Object.assign(project, req.body);
    await project.save();

    const updatedProject = await Project.findById(project._id)
      .populate('createdBy', 'name username');

    res.json({
      success: true,
      message: 'Project updated successfully',
      data: updatedProject
    });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating project',
      error: error.message
    });
  }
});

// Delete project (Admin only)
router.delete('/:id', protect, checkPermissions('projects.delete'), async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Don't allow deletion if project has bids
    if (project.biddingHistory.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete project with existing bids'
      });
    }

    await Project.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting project',
      error: error.message
    });
  }
});

// Place a bid on a project
router.post('/:id/bid', protect, async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Valid bid amount is required'
      });
    }

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    if (project.status !== 'active') {
      return res.status(400).json({
        success: false,
        message: 'Project is not accepting bids'
      });
    }

    if (new Date() > project.bidDeadline) {
      return res.status(400).json({
        success: false,
        message: 'Bidding deadline has passed'
      });
    }

    if (parseFloat(amount) <= project.currentBid) {
      return res.status(400).json({
        success: false,
        message: 'Bid must be higher than current highest bid'
      });
    }

    // Check if user is the creator of the project
    if (project.createdBy.toString() === req.user.id) {
      return res.status(400).json({
        success: false,
        message: 'Project creators cannot bid on their own projects'
      });
    }

    await project.addBid(req.user.id, req.user.name, parseFloat(amount));

    const updatedProject = await Project.findById(project._id)
      .populate('createdBy', 'name username');

    res.json({
      success: true,
      message: 'Bid placed successfully',
      data: updatedProject
    });
  } catch (error) {
    console.error('Error placing bid:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error placing bid'
    });
  }
});

// Get bidding history for a project
router.get('/:id/bids', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('biddingHistory.bidder', 'name username');

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: project.biddingHistory.sort((a, b) => b.timestamp - a.timestamp)
    });
  } catch (error) {
    console.error('Error fetching bids:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bids',
      error: error.message
    });
  }
});

// Close auction (Admin only)
router.post('/:id/close', protect, checkPermissions('projects.update'), async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    await project.closeAuction();

    const updatedProject = await Project.findById(project._id)
      .populate('createdBy', 'name username')
      .populate('finalBuyer', 'name username');

    res.json({
      success: true,
      message: 'Auction closed successfully',
      data: updatedProject
    });
  } catch (error) {
    console.error('Error closing auction:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error closing auction'
    });
  }
});

// Get project statistics (Admin only)
router.get('/admin/stats', protect, checkPermissions('analytics.read'), async (req, res) => {
  try {
    const stats = await Promise.all([
      Project.countDocuments({ status: 'active' }),
      Project.countDocuments({ status: 'sold' }),
      Project.countDocuments({ status: 'closed' }),
      Project.countDocuments({ status: 'draft' }),
      Project.aggregate([
        { $match: { status: 'sold' } },
        { $group: { _id: null, totalRevenue: { $sum: '$currentBid' } } }
      ]),
      Project.aggregate([
        { $group: { _id: null, totalBids: { $sum: '$bidCount' } } }
      ])
    ]);

    const [activeCount, soldCount, closedCount, draftCount, revenueResult, bidsResult] = stats;

    res.json({
      success: true,
      data: {
        activeProjects: activeCount,
        soldProjects: soldCount,
        closedProjects: closedCount,
        draftProjects: draftCount,
        totalRevenue: revenueResult[0]?.totalRevenue || 0,
        totalBids: bidsResult[0]?.totalBids || 0
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching statistics',
      error: error.message
    });
  }
});

export default router;
