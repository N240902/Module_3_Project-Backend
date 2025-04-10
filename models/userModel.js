import {db} from '../config/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// User model for finding user, checking password, and inserting user
export const findUserByUsername = async (username) => {
  const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0]; 
};

export const createUser = async (username, email, passwordHash) => {
  await db.query('INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)', [username, email, passwordHash]);
};

// Generating and save a password reset token
export const generateResetToken = async (email) => {
    const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    const userData = user[0][0];
    if (!userData) return null;
  
    // Generate a reset token (JWT)
    const resetToken = jwt.sign({ userId: userData.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
    // Save the reset token and expiration time to the database
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1); // Token expires in 1 hour
  
    await db.query(
      'UPDATE users SET reset_token = ?, reset_token_expiration = ? WHERE email = ?',
      [resetToken, expiration, email]
    );
  
    return resetToken;
  };
  
  // Function to verify the reset token
  export const verifyResetToken = async (token) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded;
    } catch (error) {
      return null; 
    }
  };
  
  // Function to reset the password
  export const resetPassword = async (userId, newPassword) => {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
  
    await db.query('UPDATE users SET password_hash = ? WHERE id = ?', [hashedPassword, userId]);
  };