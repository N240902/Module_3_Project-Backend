import { db } from '../config/config.js';
import bcrypt from 'bcrypt';

// Finding admin by their username in the 'admins' table
export const findAdminByUsername = async (username) => {
  const [rows] = await db.query('SELECT * FROM admins WHERE username = ?', [username]);
  return rows[0]; // Returns the admin data if found
};

// Creating a new admin by inserting their username and hashed password into the 'admins' table
export const createAdmin = async (username, passwordHash) => {
  await db.query('INSERT INTO admins (username, password_hash) VALUES (?, ?)', [username, passwordHash]);
};