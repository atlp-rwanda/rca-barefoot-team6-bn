import User from '../database/models/user';
import jwt from 'jsonwebtoken';
import { generateEmailVerificationToken } from '../utils/emailVerificationToken';
import { sendEmail } from '../utils/sendEmail';

export async function createUser(req, res) {
  const { firstName, lastName, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    const user = await User.create({ firstName, lastName, email, password, role });
    const token = await generateEmailVerificationToken(email);
    await sendVerificationEmail(email, token);
    await updateUserVerificationInfo(user.id, token, false);
    user.password = undefined
    return res.status(201).json({
      message: "User registered successfully! You should receive an email shortly.",
      data: user
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}

// When user clicks verify email must be directed on this route
export async function welcomeNewUser(req, res) {
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

// login user
export async function loginUser(req, res) {
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
    user.set("isLoggedIn", true);
    await user.save()
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
    return res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}


// get user profile
export async function getMyProfile(req, res) {
  try {

    let user = await User.findOne({ where: { id: req.user.id } });
    delete user.dataValues.password;
    if (!user)
      return res.status(404).send(API_RESPONSE(false, "User not found", 404));
    return res.send(user);
  } catch (e) {
    return res.status(500).send(e);
  }
}

// GET users
export async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}

async function sendVerificationEmail(email, token) {
  const subject = 'Verify Your Email';
  const html = `<p>Click the following link to verify your email address: <a href="${process.env.WEB_URL}/api/users/verify-email/${token}">Verify My Email</a>`;
  await sendEmail(email, subject, '', html);
}

async function updateUserVerificationInfo(userId, token, isVerified) {
  await User.update({ emailVerificationToken: token, isEmailVerified: isVerified }, { where: { id: userId } });
}