import User from '../database/models/user';
import { generateEmailVerificationToken } from '../utils/emailVerificationToken';
import { sendEmail } from '../utils/sendEmail';
import { generateResetPasswordToken } from '../utils/passwordResetToken';

export async function createUser(req, res) {
    const { firstName, lastName, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        const user = await User.create({ firstName, lastName, email, password });
        await sendEmail(email, 'Verify Your Email', '', `<p>Click the following link to verify your email address: <a href="${process.env.BASE_URL}/verify-email/${token}">${process.env.BASE_URL}/verify-email/${token}</a>`);
        await User.update({ emailVerificationToken: token, isEmailVerified: false }, { where: { id: user.id } });
        return res.status(201).json({
            message: "User registered successfully! You should receive an email shortly.",
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
    return res.status(404).json({
      message: 'Email verification failed. Token is invalid or has expired.'
    });
  }
  req.user = user;
  next();
}

// When user clicks verify email must be directed on this route
export async function welcomeNewUser (req, res) {
  const { user } = req;
  try {
    await sendEmail(
      user.email,
      'Welcome to My App',
      'Thank you for verifying your email address.'
    );
    await updateUserVerificationInfo(user.id, null, true);
    return res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    console.error('Error verifying email:', error);
    return res
      .status(500)
      .json({ message: 'Server Error', error: error.message });
  }
}

// GET users
export async function getUsers (req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: 'Server Error', error: error.message });
  }
}

async function sendVerificationEmail (email, token) {
  const subject = 'Verify Your Email';
  const html = `<p>Click the following link to verify your email address: <a href="${process.env.BASE_URL}/api/users/verify-email/${token}">Verify My Email</a>`;
  await sendEmail(email, subject, '', html);
}

async function updateUserVerificationInfo (userId, token, isVerified) {
  await User.update(
    { emailVerificationToken: token, isEmailVerified: isVerified },
    { where: { id: userId } }
  );
}

// POST request to initiate password change process
exports.initiatePasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    // check if email exists in the database
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // generate a unique token for password reset
    const resetToken = await generateResetPasswordToken(email);

    await sendEmail(
      user.email,
      'Reset Password',
      `You recently requested to reset your password.\n\nPlease click on the following link or paste it into your browser to reset your password:\n\nhttp://${req.headers.host}/api/users/reset-password/${resetToken}\n\nThis link is valid for 1 hour.\n\nIf you did not request a password reset, please ignore this email.\n\nThanks,\nThe Example App Team`
    );

    // save the user document
    await updateUserPasswordResetToken(email, resetToken);
    res.status(200).json({ message: 'Password reset email sent.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.resetPassword = async (req, res) => {
  const { pass } = req.body;
  const { token } = req.params;
  try {
    // Find the user in the database by the reset password token
    const user = await User.findOne({ where: { resetPasswordToken: token } });

    if (!user) {
      // If no user is found with the token, return an error response
      return res.status(404).json({ error: 'Invalid token' });
    }

    // Check if the reset password token has expired
    const tokenExpiration = new Date(user.resetPasswordExpires);
    const currentTime = new Date();

    if (currentTime > tokenExpiration) {
      // If the token has expired, return an error response
      return res.status(401).json({ error: 'Token has expired' });
    }

    // Update the user's password and reset the reset password token and expiration time
    // user.password = password;
    // user.resetPasswordToken = null;
    // user.resetPasswordExpires = null;
    await User.update(
      { password: pass, resetPasswordToken: null, resetPasswordExpires: null },
      { where: { resetPasswordToken: token } }
    );
    // Return a success response
    return res.status(200).json({ message: 'Password reset successful' });
  } catch (err) {
    console.error(err);
    // If an error occurs, return an error response
    return res.status(500).json({ error: 'Server error' });
  }
};

async function updateUserPasswordResetToken (userEmail, token) {
  await User.update(
    { resetPasswordToken: token, resetPasswordExpires: Date.now() + 3600000 },
    { where: { email: userEmail } }
  );
};
