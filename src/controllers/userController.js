import User from '../database/models/user';
import { generateEmailVerificationToken } from '../utils/emailVerificationToken';
import { sendEmail } from '../utils/sendEmail';

export async function createUser (req, res) {
  const { firstName, lastName, email, password } = req.body;
  console.log('req.body')
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    const user = await User.create({ firstName, lastName, email, password });
    const token = await generateEmailVerificationToken(email);
    await sendVerificationEmail(email, token);
    await updateUserVerificationInfo(user.id, token, false);
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

// When user clicks verify email must be directed on this route
export async function welcomeNewUser (req, res) {
  const { user } = req;
  try {
    await sendEmail(user.email, 'Welcome to My App', 'Thank you for verifying your email address.');
    await updateUserVerificationInfo(user.id, null, true);
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

// get single user
export async function getSingleUser (req, res) {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}

async function sendVerificationEmail (email, token) {
  const subject = 'Verify Your Email';
  const html = `<p>Click the following link to verify your email address: <a href="${process.env.BASE_URL}/api/users/verify-email/${token}">Verify My Email</a>`;
  await sendEmail(email, subject, '', html);
}

async function updateUserVerificationInfo (userId, token, isVerified) {
  await User.update({ emailVerificationToken: token, isEmailVerified: isVerified }, { where: { id: userId } });
}
