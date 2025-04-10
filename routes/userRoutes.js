import express from 'express';
import { check } from 'express-validator';
import { login, register, forgotPassword, resetPasswordHandler } from '../controller/userController.js';
// import userRoutes from 'routes/userRoutes.js';
const router = express.Router();

// Login route
router.post('/login', login);

// Register route with validation checks
router.post(
  '/register',
  [
    check('username').notEmpty().withMessage('Username is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  register
);

// Forgot Password route
router.post('/forgot-password', [
    check('email').isEmail().withMessage('Valid email is required'),
  ], forgotPassword);
  
  // Reset Password route (with token verification)
  router.post('/reset-password/:token', [
    check('newPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ], resetPasswordHandler);

export default router;