import mongoose from 'mongoose';

const bidSchema = new mongoose.Schema({
  bidder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bidderName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: [0, 'Bid amount must be positive']
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, { _id: false });

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    minlength: [5, 'Title must be at least 5 characters long'],
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    minlength: [20, 'Description must be at least 20 characters long'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  
  features: [{
    type: String,
    required: true,
    trim: true
  }],
  
  technologies: [{
    type: String,
    required: true,
    trim: true
  }],
  
  category: {
    type: String,
    required: [true, 'Project category is required'],
    enum: [
      'web-development',
      'mobile-app',
      'blockchain',
      'ai-ml',
      'cybersecurity',
      'iot',
      'data-science',
      'game-development'
    ]
  },
  
  status: {
    type: String,
    enum: ['draft', 'active', 'closed', 'sold'],
    default: 'draft',
    required: true
  },
  
  startingPrice: {
    type: Number,
    required: [true, 'Starting price is required'],
    min: [1, 'Starting price must be at least $1']
  },
  
  currentBid: {
    type: Number,
    default: function() {
      return this.startingPrice;
    }
  },
  
  bidDeadline: {
    type: Date,
    required: [true, 'Bid deadline is required'],
    validate: {
      validator: function(value) {
        return value > new Date();
      },
      message: 'Bid deadline must be in the future'
    }
  },
  
  biddingHistory: [bidSchema],
  
  finalBuyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  
  finalBuyerName: {
    type: String,
    default: null
  },
  
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  
  updatedAt: {
    type: Date,
    default: Date.now
  },
  
  soldAt: {
    type: Date,
    default: null
  },
  
  imageUrl: {
    type: String,
    default: null
  },
  
  tags: [{
    type: String,
    trim: true
  }],
  
  viewCount: {
    type: Number,
    default: 0
  },
  
  bidCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
projectSchema.index({ category: 1, status: 1 });
projectSchema.index({ bidDeadline: 1 });
projectSchema.index({ currentBid: -1 });
projectSchema.index({ createdAt: -1 });
projectSchema.index({ title: 'text', description: 'text' });

// Virtual for time remaining
projectSchema.virtual('timeRemaining').get(function() {
  if (this.status !== 'active') return null;
  const now = new Date();
  const deadline = new Date(this.bidDeadline);
  const diff = deadline.getTime() - now.getTime();
  
  if (diff <= 0) return 'Auction ended';
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
});

// Virtual for highest bidder
projectSchema.virtual('highestBidder').get(function() {
  if (this.biddingHistory.length === 0) return null;
  return this.biddingHistory[this.biddingHistory.length - 1];
});

// Pre-save middleware to update timestamps
projectSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  
  // Update bid count
  this.bidCount = this.biddingHistory.length;
  
  // Update current bid if there are bids
  if (this.biddingHistory.length > 0) {
    this.currentBid = Math.max(...this.biddingHistory.map(bid => bid.amount));
  }
  
  next();
});

// Method to add a bid
projectSchema.methods.addBid = function(bidderId, bidderName, amount) {
  if (this.status !== 'active') {
    throw new Error('Cannot bid on inactive project');
  }
  
  if (new Date() > this.bidDeadline) {
    throw new Error('Bidding deadline has passed');
  }
  
  if (amount <= this.currentBid) {
    throw new Error('Bid must be higher than current highest bid');
  }
  
  this.biddingHistory.push({
    bidder: bidderId,
    bidderName,
    amount,
    timestamp: new Date()
  });
  
  this.currentBid = amount;
  this.bidCount = this.biddingHistory.length;
  
  return this.save();
};

// Method to close auction and mark as sold
projectSchema.methods.closeAuction = function() {
  if (this.status !== 'active') {
    throw new Error('Project is not active');
  }
  
  if (this.biddingHistory.length === 0) {
    this.status = 'closed';
  } else {
    this.status = 'sold';
    const highestBid = this.biddingHistory[this.biddingHistory.length - 1];
    this.finalBuyer = highestBid.bidder;
    this.finalBuyerName = highestBid.bidderName;
    this.soldAt = new Date();
  }
  
  return this.save();
};

// Static method to get active projects
projectSchema.statics.getActiveProjects = function() {
  return this.find({ 
    status: 'active',
    bidDeadline: { $gt: new Date() }
  }).sort({ createdAt: -1 });
};

// Static method to get projects by category
projectSchema.statics.getProjectsByCategory = function(category) {
  return this.find({ category }).sort({ createdAt: -1 });
};

// Static method to search projects
projectSchema.statics.searchProjects = function(searchTerm) {
  return this.find({
    $text: { $search: searchTerm }
  }).sort({ score: { $meta: 'textScore' } });
};

const Project = mongoose.model('Project', projectSchema);

export default Project;
