import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

const adminSchema = new mongoose.Schema({
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
    required: [true, 'Username is required'],
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
  
  role: {
    type: String,
    enum: ['super_admin', 'admin', 'manager', 'user', 'student'],
    default: 'user',
    required: true
  },
  
  permissions: {
    type: [String],
    default: [],
    enum: [
      'users.read', 'users.write', 'users.delete',
      'projects.read', 'projects.write', 'projects.delete', 'projects.create',
      'clients.read', 'clients.write', 'clients.delete',
      'analytics.read',
      'settings.read', 'settings.write',
      'system.admin',
      'marketplace.bid', 'marketplace.view'
    ]
  },
  
  isActive: {
    type: Boolean,
    default: true
  },
  
  lastLogin: {
    type: Date,
    default: null
  },
  
  loginAttempts: {
    type: Number,
    default: 0
  },
  
  lockUntil: {
    type: Date
  },
  
  // Profile fields
  phone: {
    type: String,
    trim: true,
    validate: {
      validator: function(value) {
        if (!value) return true; // Optional field
        return validator.isMobilePhone(value, 'any');
      },
      message: 'Please provide a valid phone number'
    }
  },
  
  location: {
    type: String,
    trim: true,
    maxlength: [100, 'Location cannot exceed 100 characters']
  },
  
  bio: {
    type: String,
    trim: true,
    maxlength: [500, 'Bio cannot exceed 500 characters']
  },
  
  avatar: {
    type: String,
    trim: true
  },
  
  passwordChangedAt: {
    type: Date,
    default: Date.now
  },
  
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  
  // Student-specific fields
  university: {
    type: String,
    trim: true
  },
  
  studentId: {
    type: String,
    trim: true,
    sparse: true // Only required for students
  },
  
  major: {
    type: String,
    trim: true
  },
  
  graduationYear: {
    type: Number,
    validate: {
      validator: function(value) {
        if (!value) return true; // Optional field
        return value >= new Date().getFullYear() && value <= new Date().getFullYear() + 10;
      },
      message: 'Graduation year must be within reasonable range'
    }
  },
  
  bidHistory: [{
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    },
    amount: Number,
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  
  wonProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for account lock status
adminSchema.virtual('isLocked').get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

// Pre-save middleware to hash password
adminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Pre-save middleware to set passwordChangedAt
adminSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();
  
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// Instance method to check password
adminSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// Instance method to check if password changed after JWT was issued
adminSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
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
adminSchema.methods.incLoginAttempts = function() {
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
  
  // If we have hit max attempts and it's not locked already, lock the account
  if (this.loginAttempts + 1 >= 5 && !this.isLocked) {
    updates.$set = {
      lockUntil: Date.now() + 2 * 60 * 60 * 1000 // Lock for 2 hours
    };
  }
  
  return this.updateOne(updates);
};

// Static method to get user for authentication (includes password)
adminSchema.statics.findByCredentials = function(identifier) {
  return this.findOne({
    $or: [
      { email: identifier },
      { username: identifier }
    ],
    isActive: true
  }).select('+password');
};

// Static method to assign default permissions based on role
adminSchema.statics.getDefaultPermissions = function(role) {
  const permissions = {
    super_admin: [
      'users.read', 'users.write', 'users.delete',
      'projects.read', 'projects.write', 'projects.delete',
      'clients.read', 'clients.write', 'clients.delete',
      'analytics.read',
      'settings.read', 'settings.write',
      'system.admin'
    ],
    admin: [
      'users.read', 'users.write',
      'projects.read', 'projects.write', 'projects.delete',
      'clients.read', 'clients.write', 'clients.delete',
      'analytics.read',
      'settings.read'
    ],
    manager: [
      'users.read',
      'projects.read', 'projects.write',
      'clients.read', 'clients.write',
      'analytics.read'
    ],
    user: [
      'projects.read',
      'clients.read'
    ]
  };
  
  return permissions[role] || permissions.user;
};

// Index for performance
adminSchema.index({ email: 1 });
adminSchema.index({ username: 1 });
adminSchema.index({ role: 1 });
adminSchema.index({ isActive: 1 });

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
