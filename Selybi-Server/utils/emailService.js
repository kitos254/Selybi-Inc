import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const env = {
  emailUser: process.env.EMAIL_USER?.trim(),
  companyName: process.env.COMPANY_NAME?.trim() || 'Selybi',
  frontendUrl: process.env.FRONTEND_URL?.trim() || 'http://localhost:5173',
  googleClientId: process.env.GOOGLE_CLIENT_ID?.trim(),
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET?.trim(),
  refreshToken: process.env.REFRESH_TOKEN?.trim(),
};

const hasOAuth2Config =
  Boolean(env.googleClientId) &&
  Boolean(env.googleClientSecret) &&
  Boolean(env.refreshToken) &&
  Boolean(env.emailUser);

const createOAuth2Transporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: env.emailUser,
      clientId: env.googleClientId,
      clientSecret: env.googleClientSecret,
      refreshToken: env.refreshToken,
    },
  });
};

const sendEmail = async (mailOptions) => {
  if (!hasOAuth2Config) {
    return {
      success: false,
      error: 'OAuth2 email config missing. Set EMAIL_USER, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and REFRESH_TOKEN.',
    };
  }

  try {
    const oauthTransporter = createOAuth2Transporter();
    const result = await oauthTransporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId, transport: 'oauth2' };
  } catch (oauthError) {
    return { success: false, error: oauthError.message };
  }
};

// Send verification email
export const sendVerificationEmail = async (email, name, verificationToken) => {
  try {
    const verificationUrl = `${env.frontendUrl}/verify-email?token=${verificationToken}`;
    
    const mailOptions = {
      from: `"${env.companyName}" <${env.emailUser}>`,
      to: email,
      subject: 'Verify Your Email Address',
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
            <div class="logo">🚀 ${env.companyName}</div>
            <h1>Welcome!</h1>
            
            <div class="content">
              <h2>Hi ${name},</h2>
              <p>Thank you for joining us!</p>
              
              <p>To complete your registration, please verify your email address by clicking the button below:</p>
              
              <div style="text-align: center;">
                <a href="${verificationUrl}" class="button">Verify Email Address</a>
              </div>
              
              <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
              <div class="code">${verificationUrl}</div>
              
              <p><strong>This verification link will expire in 24 hours.</strong></p>
              
              <p>If you didn't create this account, please ignore this email.</p>
              
              <p>Best regards,<br>The ${env.companyName} Team</p>
            </div>
            
            <div class="footer">
              <p>© 2025 ${env.companyName}. All rights reserved.</p>
              <p>This email was sent to ${email}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Welcome!
        
        Hi ${name},
        
        Thank you for joining us! To complete your registration, please verify your email address by visiting:
        
        ${verificationUrl}
        
        This verification link will expire in 24 hours.
        
        If you didn't create this account, please ignore this email.
        
        Best regards,
        The ${env.companyName} Team
      `
    };

    const result = await sendEmail(mailOptions);
    if (result.success) {
      console.log(`Verification email sent successfully via ${result.transport}:`, result.messageId);
    }
    return result;
  } catch (error) {
    console.error('Error sending verification email:', error);
    return { success: false, error: error.message };
  }
};

// Send welcome email after verification
export const sendWelcomeEmail = async (email, name) => {
  try {
    const mailOptions = {
      from: `"${env.companyName}" <${env.emailUser}>`,
      to: email,
      subject: 'Welcome - Get Started!',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome</title>
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
            <div class="logo">🎉 Welcome!</div>
            <h1>Your email has been verified!</h1>
            
            <div class="content">
              <h2>Hi ${name},</h2>
              <p>Congratulations! Your email has been successfully verified and your account is now active.</p>
              
              <p>You're now ready to get started!</p>
              
              <div style="text-align: center;">
                <a href="${env.frontendUrl}" class="button">Get Started</a>
              </div>
              
              <p>Need help getting started? Contact our support team.</p>
              
              <p>Thank you for joining us!</p>
              
              <p>Best regards,<br>The ${env.companyName} Team</p>
            </div>
            
            <div class="footer">
              <p>© 2025 ${env.companyName}. All rights reserved.</p>
              <p>Happy bidding! 🚀</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    const result = await sendEmail(mailOptions);
    if (result.success) {
      console.log(`Welcome email sent successfully via ${result.transport}:`, result.messageId);
    }
    return result;
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error: error.message };
  }
};

// Send newsletter subscription confirmation email
export const sendNewsletterConfirmationEmail = async (email) => {
  try {
    const mailOptions = {
      from: `"${env.companyName}" <${env.emailUser}>`,
      to: email,
      subject: `You're Subscribed to ${env.companyName} Newsletter`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Newsletter Subscription</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #1f2937;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background: #f8fafc;
            }
            .card {
              background: white;
              border-radius: 12px;
              padding: 28px;
              border: 1px solid #e2e8f0;
            }
            .brand {
              font-size: 24px;
              font-weight: 700;
              color: #0f172a;
              margin-bottom: 8px;
            }
            .muted {
              color: #64748b;
              font-size: 14px;
            }
            .cta {
              display: inline-block;
              margin-top: 18px;
              background: #0f172a;
              color: #ffffff;
              text-decoration: none;
              padding: 10px 18px;
              border-radius: 8px;
              font-weight: 600;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="brand">${env.companyName}</div>
            <p>Thanks for subscribing to our newsletter.</p>
            <p>You will now receive product updates, practical engineering insights, and selected project stories from our team.</p>
            <a href="${env.frontendUrl}" class="cta">Visit Website</a>
            <p class="muted" style="margin-top: 20px;">If you did not subscribe, you can ignore this email.</p>
          </div>
        </body>
        </html>
      `,
      text: `
        Thanks for subscribing to the ${env.companyName} newsletter.

        You will now receive updates and insights from our team.

        Visit: ${env.frontendUrl}

        If you did not subscribe, you can ignore this email.
      `,
    };

    const result = await sendEmail(mailOptions);
    if (result.success) {
      console.log(`Newsletter confirmation email sent successfully via ${result.transport}:`, result.messageId);
    }
    return result;
  } catch (error) {
    console.error('Error sending newsletter confirmation email:', error);
    return { success: false, error: error.message };
  }
};
