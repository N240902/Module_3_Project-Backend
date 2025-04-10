import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import { findUserByUsername, createUser, generateResetToken, verifyResetToken, resetPassword } from '../models/userModel.js';
import nodemailer from 'nodemailer';

// Handling login request
export const login = async (req, res) => {
  const { username, password } = req.body;

  // Validating request
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const user = await findUserByUsername(username);

    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: { username: user.username,userRole: user.user_role },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Handling registration request
export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  try {
    // Checking if user already exists
    const existingUser = await findUserByUsername(username);

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creating the new user in the database
    await createUser(username, email, hashedPassword);

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Handling forgot password request
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const token = await generateResetToken(email);
    
    if (!token) {
      return res.status(404).json({ message: 'User not found with this email address' });
    }

    // Generating reset URL
    const resetUrl = `http://localhost:5000/reset-password/${token}`;

    // Sending email with the reset link
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Password Reset Request',
      html: `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Password reset link has been sent to your email.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Handling reset password request
export const resetPasswordHandler = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    // Verifying the reset token
    const decoded = await verifyResetToken(token);

    if (!decoded) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    // Resetting the user's password
    await resetPassword(decoded.userId, newPassword);

    res.status(200).json({ message: 'Password successfully reset' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};