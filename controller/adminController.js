import bcrypt from 'bcrypt';
import { findAdminByUsername } from '../models/adminModel.js';

// Controller for Admin Login
export const adminLogin = async (req, res) => {
  const { username, password } = req.body;


  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const admin = await findAdminByUsername(username);

    if (!admin) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const match = await bcrypt.compare(password, admin.password_hash);

    if (!match) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({
      success: true,
      message: 'Admin login successful',
      admin: { username: admin.username },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};