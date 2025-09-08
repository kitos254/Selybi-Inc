import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send verification email
export const sendVerificationEmail = async (email, name, verificationToken) => {
  try {
    const transporter = createTransporter();
    
    const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;
    
    const mailOptions = {
      from: `"${process.env.COMPANY_NAME}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Verify Your Email Address - InnoVault',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Verification</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .container {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              border-radius: 10px;
              padding: 30px;
              color: white;
              text-align: center;
            }
            .logo {
              font-size: 28px;
              font-weight: bold;
              margin-bottom: 20px;
            }
            .content {
              background: white;
              color: #333;
              padding: 30px;
              border-radius: 8px;
              margin: 20px 0;
              text-align: left;
            }
            .button {
              display: inline-block;
              background: #4f46e5;
              color: white;
              padding: 12px 30px;
              text-decoration: none;
              border-radius: 5px;
              margin: 20px 0;
              font-weight: bold;
            }
            .button:hover {
              background: #4338ca;
            }
            .footer {
              font-size: 14px;
              color: #e2e8f0;
              margin-top: 20px;
            }
            .code {
              background: #f1f5f9;
              padding: 10px;
              border-radius: 4px;
              font-family: monospace;
              font-size: 14px;
              margin: 10px 0;
              word-break: break-all;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">🚀 InnoVault</div>
            <h1>Welcome to InnoVault!</h1>
            
            <div class="content">
              <h2>Hi ${name},</h2>
              <p>Thank you for joining InnoVault, the premier marketplace for university IT final-year projects!</p>
              
              <p>To complete your registration and start bidding on innovative projects, please verify your email address by clicking the button below:</p>
              
              <div style="text-align: center;">
                <a href="${verificationUrl}" class="button">Verify Email Address</a>
              </div>
              
              <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
              <div class="code">${verificationUrl}</div>
              
              <p><strong>This verification link will expire in 24 hours.</strong></p>
              
              <p>Once verified, you'll be able to:</p>
              <ul>
                <li>Browse innovative university projects</li>
                <li>Place bids on projects that interest you</li>
                <li>Connect with talented students</li>
                <li>Access exclusive project opportunities</li>
              </ul>
              
              <p>If you didn't create an account with InnoVault, please ignore this email.</p>
              
              <p>Best regards,<br>The InnoVault Team</p>
            </div>
            
            <div class="footer">
              <p>© 2025 ${process.env.COMPANY_NAME}. All rights reserved.</p>
              <p>This email was sent to ${email}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Welcome to InnoVault!
        
        Hi ${name},
        
        Thank you for joining InnoVault! To complete your registration, please verify your email address by visiting:
        
        ${verificationUrl}
        
        This verification link will expire in 24 hours.
        
        If you didn't create an account with InnoVault, please ignore this email.
        
        Best regards,
        The InnoVault Team
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Verification email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending verification email:', error);
    return { success: false, error: error.message };
  }
};

// Send welcome email after verification
export const sendWelcomeEmail = async (email, name) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"${process.env.COMPANY_NAME}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to InnoVault - Get Started!',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to InnoVault</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .container {
              background: linear-gradient(135deg, #10b981 0%, #059669 100%);
              border-radius: 10px;
              padding: 30px;
              color: white;
              text-align: center;
            }
            .logo {
              font-size: 28px;
              font-weight: bold;
              margin-bottom: 20px;
            }
            .content {
              background: white;
              color: #333;
              padding: 30px;
              border-radius: 8px;
              margin: 20px 0;
              text-align: left;
            }
            .button {
              display: inline-block;
              background: #10b981;
              color: white;
              padding: 12px 30px;
              text-decoration: none;
              border-radius: 5px;
              margin: 20px 0;
              font-weight: bold;
            }
            .button:hover {
              background: #059669;
            }
            .footer {
              font-size: 14px;
              color: #dcfce7;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">🎉 Welcome to InnoVault!</div>
            <h1>Your email has been verified!</h1>
            
            <div class="content">
              <h2>Hi ${name},</h2>
              <p>Congratulations! Your email has been successfully verified and your InnoVault account is now active.</p>
              
              <p>You're now ready to explore the exciting world of university innovation and start bidding on amazing projects!</p>
              
              <div style="text-align: center;">
                <a href="${process.env.FRONTEND_URL}/innovault" class="button">Start Exploring Projects</a>
              </div>
              
              <h3>What's Next?</h3>
              <ul>
                <li><strong>Browse Projects:</strong> Discover innovative final-year projects from talented university students</li>
                <li><strong>Place Bids:</strong> Submit competitive bids on projects that match your interests</li>
                <li><strong>Connect:</strong> Network with bright minds and future tech leaders</li>
                <li><strong>Collaborate:</strong> Turn student innovations into real-world solutions</li>
              </ul>
              
              <p>Need help getting started? Check out our platform guide or contact our support team.</p>
              
              <p>Thank you for joining the InnoVault community!</p>
              
              <p>Best regards,<br>The InnoVault Team</p>
            </div>
            
            <div class="footer">
              <p>© 2025 ${process.env.COMPANY_NAME}. All rights reserved.</p>
              <p>Happy bidding! 🚀</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Welcome email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error: error.message };
  }
};
