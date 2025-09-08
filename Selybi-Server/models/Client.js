import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import crypto from 'crypto';

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  
  username: {
    type: String,
    unique: true,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [20, 'Username cannot exceed 20 characters'],
    match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores']
  },
  
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long'],
    select: false // Don't include password in queries by default
  },
  
  // Student/Client specific fields
  university: {
    type: String,
    trim: true,
    maxlength: [100, 'University name cannot exceed 100 characters']
  },
  
  course: {
    type: String,
    trim: true,
    maxlength: [100, 'Course name cannot exceed 100 characters']
  },
  
  graduationYear: {
    type: Number,
    min: [2020, 'Graduation year must be 2020 or later'],
    max: [2030, 'Graduation year cannot exceed 2030']
  },
  
  studentId: {
    type: String,
    trim: true,
    unique: true,
    sparse: true, // Allow multiple null values
    maxlength: [20, 'Student ID cannot exceed 20 characters']
  },
  
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    validate: {
      validator: function(v) {
        return validator.isMobilePhone(v, 'any');
      },
      message: 'Please provide a valid phone number'
    }
  },
  
  bio: {
    type: String,
    trim: true,
    maxlength: [500, 'Bio cannot exceed 500 characters']
  },
  
  skills: [{
    type: String,
    trim: true,
    maxlength: [50, 'Skill name cannot exceed 50 characters']
  }],
  
  portfolio: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || validator.isURL(v);
      },
      message: 'Please provide a valid portfolio URL'
    }
  },
  
  github: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || validator.isURL(v);
      },
      message: 'Please provide a valid GitHub URL'
    }
  },
  
  linkedin: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || validator.isURL(v);
      },
      message: 'Please provide a valid LinkedIn URL'
    }
  },
  
  avatar: {
    type: String,
    default: null
  },
  
  isActive: {
    type: Boolean,
    default: true
  },
  
  isVerified: {
    type: Boolean,
    default: false
  },
  
  emailVerificationToken: {
    type: String,
    select: false
  },
  
  emailVerificationExpires: {
    type: Date,
    select: false
  },
  
  passwordResetToken: {
    type: String,
    select: false
  },
  
  passwordResetExpires: {
    type: Date,
    select: false
  },
  
  passwordChangedAt: {
    type: Date,
    select: false
  },
  
  // Account security
  loginAttempts: {
    type: Number,
    default: 0
  },
  
  lockUntil: Date,
  
  lastLogin: {
    type: Date,
    default: Date.now
  },
  
  // Bidding history
  bids: [{
    project: {
      type: mongoose.Schema.ObjectId,
      ref: 'Project'
    },
    amount: Number,
    bidDate: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['active', 'won', 'lost'],
      default: 'active'
    }
  }],
  
  // Projects won
  wonProjects: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Project'
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for account lock status
clientSchema.virtual('isLocked').get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

// Pre-save middleware to hash password
clientSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Pre-save middleware to set passwordChangedAt
clientSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();
  
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// Instance method to check password
clientSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// Instance method to check if password changed after JWT was issued
clientSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

// Instance method to increment login attempts
clientSchema.methods.incLoginAttempts = function() {
  // If we have a previous lock that has expired, restart at 1
  if (this.lockUntil && this.lockUntil < Date.now()) {
    return this.updateOne({
      $unset: {
        lockUntil: 1,
      },
      $set: {
        loginAttempts: 1,
      }
    });
  }
  
  const updates = { $inc: { loginAttempts: 1 } };
  
  // If we have hit max attempts and it isn't locked, lock it
  if (this.loginAttempts + 1 >= 5 && !this.isLocked) {
    updates.$set = {
      lockUntil: Date.now() + 2 * 60 * 60 * 1000, // Lock for 2 hours
    };
  }
  
  return this.updateOne(updates);
};

// Static method to get user for authentication (includes password)
clientSchema.statics.findByCredentials = function(identifier) {
  return this.findOne({
    $or: [
      { email: identifier },
      { username: identifier }
    ],
    isActive: true
  }).select('+password');
};

// Static method to generate unique username from name
clientSchema.statics.generateUsername = async function(name) {
  // Extract first name and convert to lowercase
  const firstName = name.trim().split(' ')[0].toLowerCase();
  
  // Remove any non-alphanumeric characters
  const baseUsername = firstName.replace(/[^a-zA-Z0-9]/g, '');
  
  // Check if base username is available
  const existingUser = await this.findOne({ username: baseUsername });
  if (!existingUser) {
    return baseUsername;
  }
  
  // Generate unique username with minimal suffix
  let counter = 1;
  let uniqueUsername;
  
  do {
    // Use single character suffix when possible (a, b, c, etc.)
    if (counter <= 26) {
      const suffix = String.fromCharCode(96 + counter); // 'a', 'b', 'c', ...
      uniqueUsername = `${baseUsername}${suffix}`;
    } else {
      // Use numeric suffix after exhausting letters
      uniqueUsername = `${baseUsername}${counter - 26}`;
    }
    
    const exists = await this.findOne({ username: uniqueUsername });
    if (!exists) {
      return uniqueUsername;
    }
    counter++;
  } while (counter < 1000); // Safety limit
  
  // Fallback with timestamp if all else fails
  const timestamp = Date.now().toString().slice(-4);
  return `${baseUsername}${timestamp}`;
};

// Instance method to add a bid
clientSchema.methods.addBid = function(projectId, amount) {
  this.bids.push({
    project: projectId,
    amount: amount,
    bidDate: new Date(),
    status: 'active'
  });
  return this.save();
};

// Instance method to mark bid as won/lost
clientSchema.methods.updateBidStatus = function(projectId, status) {
  const bid = this.bids.find(bid => bid.project.toString() === projectId.toString());
  if (bid) {
    bid.status = status;
    if (status === 'won') {
      this.wonProjects.push(projectId);
    }
  }
  return this.save();
};

// Instance method to create email verification token
clientSchema.methods.createEmailVerificationToken = function() {
  const verificationToken = crypto.randomBytes(32).toString('hex');
  
  this.emailVerificationToken = crypto
    .createHash('sha256')
    .update(verificationToken)
    .digest('hex');
  
  this.emailVerificationExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  
  return verificationToken;
};

// Instance method to create password reset token
clientSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');
  
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
  
  return resetToken;
};

// Index for performance
clientSchema.index({ email: 1 });
clientSchema.index({ username: 1 });
clientSchema.index({ studentId: 1 });
clientSchema.index({ university: 1 });
clientSchema.index({ isActive: 1 });
clientSchema.index({ isVerified: 1 });

const Client = mongoose.model('Client', clientSchema);

export default Client;
