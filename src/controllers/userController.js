import User from '../database/models/user';
import { sendEmail, token } from '../utils/sendEmailAndToken';
import jwt from 'jsonwebtoken';

export async function createUser(req, res) {
    const { firstName, lastName, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        const user = await User.create({ firstName, lastName, email, password });
        await sendEmail(email, 'Verify Your Email', `Click the following link to verify your email address: ${process.env.BASE_URL}/verify-email?token=${token}`, `<p>Click the following link to verify your email address: <a href="${process.env.BASE_URL}/verify-email?token=${token}">${process.env.BASE_URL}/verify-email?token=${token}</a>`);
        await User.update({ emailVerificationToken: token, isEmailVerified: false }, { where: { id: user.id } });
        return res.status(201).json({
          message: 'User registered successfully! You should receive an email shortly.',
          data: user
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }

  }

export async function verifyEmail (req, res, next) {
  const { token } = req.params;
  const user = await User.findOne({ where: { emailVerificationToken: token } });
  if (!user) {
    return res.status(404).json({ message: 'Email verification failed. Token is invalid or has expired.' });
  }
  req.user = user;
  next();
}

export async function loginUser (req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
    return res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}

// When user clicks verify email must be directed on this route
export async function welcomeNewUser (req, res) {
  const { user } = req;
  try {
    await sendEmail(user.email, 'Welcome to My App', 'Thank you for verifying your email address.');
    await User.update({ emailVerificationToken: null, isEmailVerified: true }, { where: { id: user.id } });
    console.log('Email verified successfully!');
    return res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    console.error('Error verifying email:', error);
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}

// GET users
export async function getUsers (req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}
