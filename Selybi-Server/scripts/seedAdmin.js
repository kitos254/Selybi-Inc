import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from '../models/Admin.js';

// Load environment variables
dotenv.config();

const seedAdmin = async () => {
  try {
    console.log('🌱 Starting admin seeding process...');
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ 
      $or: [
        { email: process.env.ADMIN_EMAIL },
        { username: process.env.ADMIN_USERNAME }
      ]
    });

    if (existingAdmin) {
      console.log('⚠️  Admin user already exists with:');
      console.log(`   Name: ${existingAdmin.name}`);
      console.log(`   Email: ${existingAdmin.email}`);
      console.log(`   Username: ${existingAdmin.username}`);
      console.log(`   Role: ${existingAdmin.role}`);
      
      // Ask if user wants to update existing admin
      process.stdout.write('Do you want to update the existing admin? (y/N): ');
      
      const response = await new Promise((resolve) => {
        process.stdin.once('data', (data) => {
          resolve(data.toString().trim().toLowerCase());
        });
      });

      if (response !== 'y' && response !== 'yes') {
        console.log('❌ Seeding cancelled by user');
        process.exit(0);
      }

      // Update existing admin
      existingAdmin.name = process.env.ADMIN_NAME || 'Elvis Kiplimo';
      existingAdmin.email = process.env.ADMIN_EMAIL || 'elviskiplimo000@gmail.com';
      existingAdmin.username = process.env.ADMIN_USERNAME || 'SelybiCEO';
      existingAdmin.password = process.env.ADMIN_PASSWORD || 'SelybiAdmin2024!';
      existingAdmin.role = 'super_admin';
      existingAdmin.permissions = Admin.getDefaultPermissions('super_admin');
      existingAdmin.isActive = true;
      existingAdmin.loginAttempts = 0;
      existingAdmin.lockUntil = undefined;

      await existingAdmin.save();
      console.log('✅ Admin user updated successfully!');
    } else {
      // Create new admin user
      const adminUser = new Admin({
        name: process.env.ADMIN_NAME || 'Elvis Kiplimo',
        email: process.env.ADMIN_EMAIL || 'elviskiplimo000@gmail.com',
        username: process.env.ADMIN_USERNAME || 'SelybiCEO',
        password: process.env.ADMIN_PASSWORD || 'SelybiAdmin2024!',
        role: 'super_admin',
        permissions: Admin.getDefaultPermissions('super_admin'),
        isActive: true
      });

      await adminUser.save();
      console.log('✅ Admin user created successfully!');
    }

    console.log('\n📋 Admin Details:');
    console.log(`   Name: ${process.env.ADMIN_NAME || 'Elvis Kiplimo'}`);
    console.log(`   Email: ${process.env.ADMIN_EMAIL || 'elviskiplimo000@gmail.com'}`);
    console.log(`   Username: ${process.env.ADMIN_USERNAME || 'SelybiCEO'}`);
    console.log(`   Role: super_admin`);
    console.log(`   Permissions: ${Admin.getDefaultPermissions('super_admin').length} permissions granted`);
    
    console.log('\n🔐 Login Instructions:');
    console.log('   You can now log in using either:');
    console.log(`   • Email: ${process.env.ADMIN_EMAIL || 'elviskiplimo000@gmail.com'}`);
    console.log(`   • Username: ${process.env.ADMIN_USERNAME || 'SelybiCEO'}`);
    console.log(`   • Password: ${process.env.ADMIN_PASSWORD || 'SelybiAdmin2024!'}`);
    
    console.log('\n🎉 Seeding completed successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding admin:', error);
    
    if (error.code === 11000) {
      console.error('   Duplicate key error - admin might already exist');
    } else if (error.name === 'ValidationError') {
      console.error('   Validation errors:');
      Object.values(error.errors).forEach(err => {
        console.error(`   - ${err.message}`);
      });
    }
    
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('📡 Disconnected from MongoDB');
    process.exit(0);
  }
};

// Handle process termination
process.on('SIGINT', async () => {
  console.log('\n⚠️  Process interrupted');
  await mongoose.disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n⚠️  Process terminated');
  await mongoose.disconnect();
  process.exit(0);
});

// Run the seeding function
seedAdmin();
