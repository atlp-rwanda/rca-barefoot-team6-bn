import User from '../database/models/user';

import { sendEmail, token } from '../utils/sendEmail';
export async function createUser(req, res) {
    const { email, password, emailVerificationToken, emailVerified } = req.body;
    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        const user = await User.create({ email, password });
        sendEmail(email, 'Verify Email', 'This is a test email.')
            .then(() => {
                emailVerificationToken = token;
                emailVerified = false;
                console.log('Email sent successfully!');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
        return res.json({ message: 'User registered successfully!', data: user });
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

// When user clicks verify email must be directed on this route
export async function welcomeNewUser(req, res) {
    const { user } = req;
    sendEmail(user.email, 'Welcome to My App', 'Thank you for verifying your email address.')
        .then(() => {
            emailVerificationToken = null;
            emailVerified = true;
            console.log('Email verified successfully!');
        })
        .catch((error) => {
            console.error('Error verifying email:', error);
        });
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
