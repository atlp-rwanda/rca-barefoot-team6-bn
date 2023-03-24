<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import User from '../database/models/user';
<<<<<<< HEAD
=======
import User from '../database/models/user';
>>>>>>> 8d74a26 (feat: project structure initialization)
import { generateEmailVerificationToken } from '../utils/emailVerificationToken';
import { sendEmail } from '../utils/sendEmail';
import { generateResetPasswordToken } from '../utils/passwordResetToken';

export async function createUser (req, res) {
  const { firstName, lastName, email, password } = req.body;
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
      message:
        'User registered successfully! You should receive an email shortly.',
      data: user
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: 'Server Error', error: error.message });
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
<<<<<<< HEAD
=======
import { sendEmail, token } from '../utils/sendEmailAndToken';

<<<<<<< HEAD
export async function createUser(req, res) {
    const { firstName, lastName, email, password } = req.body;
=======
const User = require('../database/models/user');
const nodemailer = require('nodemailer');
exports.createUser = async (req, res) => {
    const { email, password } = req.body;
>>>>>>> 72acd8f (Refactoring)
=======
import User from '../database/models/user';
import { generateEmailVerificationToken } from '../utils/emailVerificationToken';
import { sendEmail } from '../utils/sendEmail';
import { generateResetPasswordToken } from '../utils/passwordResetToken';

<<<<<<< HEAD
export async function createUser(req, res) {
<<<<<<< HEAD
    const { email, password, emailVerificationToken, emailVerified } = req.body;
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
    const { firstName, lastName, email, password } = req.body;
>>>>>>> 0c89c25 (feat(user): Email Verification)
=======
import { generateToken, sendEmail, token } from '../utils/sendEmailAndToken';

export async function createUser(req, res) {
    const { email, password } = req.body;
>>>>>>> 5b3d044 (feat(user): Email Verification)
    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0c89c25 (feat(user): Email Verification)
        const user = await User.create({ firstName, lastName, email, password });
<<<<<<< HEAD
        await sendEmail(email, 'Verify Your Email', '', `<p>Click the following link to verify your email address: <a href="${process.env.BASE_URL}/verify-email/${token}">${process.env.BASE_URL}/verify-email/${token}</a>`);
        await User.update({ emailVerificationToken: token, isEmailVerified: false }, { where: { id: user.id } });
=======
        const token = await generateEmailVerificationToken(email);
        await sendVerificationEmail(email, token);
        await updateUserVerificationInfo(user.id, token, false);
>>>>>>> 3fa7883 (Separated Functions)
        return res.status(201).json({
            message: "User registered successfully! You should receive an email shortly.",
            data: user
        });
<<<<<<< HEAD
=======
        const user = await User.create({ email, password });
<<<<<<< HEAD
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
>>>>>>> 72acd8f (Refactoring)
=======
>>>>>>> 0c89c25 (feat(user): Email Verification)
=======
        await sendEmail(email, 'Verify Your Email', `Click the following link to verify your email address: ${process.env.BASE_URL}/verify-email?token=${token}`, `<p>Click the following link to verify your email address: <a href="${process.env.BASE_URL}/verify-email?token=${token}">${process.env.BASE_URL}/verify-email?token=${token}</a>`);
        await User.update({ emailVerificationToken: token, isEmailVerified: false }, { where: { id: user.id } });
        return res.status(201).json({
            message: "User registered successfully! You should receive an email shortly.",
            data: user
        });
>>>>>>> 5b3d044 (feat(user): Email Verification)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error', error: error.message });
=======
export async function createUser (req, res) {
  const { firstName, lastName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
    }
    const user = await User.create({ firstName, lastName, email, password });
    const token = await generateEmailVerificationToken(email);
    await sendVerificationEmail(email, token);
    await updateUserVerificationInfo(user.id, token, false);
    return res.status(201).json({
      message:
        'User registered successfully! You should receive an email shortly.',
      data: user
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: 'Server Error', error: error.message });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export async function verifyEmail(req, res, next) {
=======
exports.verifyEmail = async (req, res, next) => {
>>>>>>> 72acd8f (Refactoring)
=======
export async function verifyEmail(req, res, next) {
>>>>>>> 5b90360 (User Register Works and refactoring)
    const { token } = req.params;
    const user = await User.findOne({ where: { emailVerificationToken: token } });
    if (!user) {
        return res.status(404).json({ message: 'Email verification failed. Token is invalid or has expired.' });
    }
    req.user = user;
    next();
<<<<<<< HEAD
<<<<<<< HEAD
}

// When user clicks verify email must be directed on this route
export async function welcomeNewUser(req, res) {
    const { user } = req;
    try {
        await sendEmail(user.email, 'Welcome to My App', 'Thank you for verifying your email address.');
<<<<<<< HEAD
<<<<<<< HEAD
        await User.update({ emailVerificationToken: null, isEmailVerified: true }, { where: { id: user.id } });
=======
        await User.update({ emailVerificationToken: null, isEmailVerified: true }, { where: { id: user.id } })
            .then(() => {
                console.log('Email verification token and email verification status updated successfully');
            })
            .catch((error) => {
                console.error('Error updating email verification token and email verification status:', error);
            });

>>>>>>> 5b3d044 (feat(user): Email Verification)
        console.log('Email verified successfully!');
=======
        await updateUserVerificationInfo(user.id, null, true);
>>>>>>> 3fa7883 (Separated Functions)
        return res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        console.error('Error verifying email:', error);
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
=======
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
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
};
=======
}
>>>>>>> 5b90360 (User Register Works and refactoring)
// When user clicks verify email must be directed on this route
export async function welcomeNewUser(req, res) {
    const { user } = req;
<<<<<<< HEAD
    let testAccount = await nodemailer.createTestAccount();
    const { email, emailVerificationToken } = user;
    const msg = {
        from: testAccount.user, // sender address
        to: email,
        subject: 'Welcome to My App',
        text: `Thank you for verifying your email address. Welcome to My App!`,
        html: `Thank you for verifying your email address. Welcome to My App!`,
    };

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    await transporter.sendMail(msg);

    await user.update({ emailVerified: true, emailVerificationToken: null })
    res.status(200).json({ message: 'Email verification successful.' });
};
>>>>>>> 72acd8f (Refactoring)
=======
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
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
}
>>>>>>> 0c89c25 (feat(user): Email Verification)
=======
}
>>>>>>> 5b3d044 (feat(user): Email Verification)
=======
}
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])

    // generate a unique token for password reset
    const resetToken = await generateResetPasswordToken(email);

<<<<<<< HEAD
async function updateUserVerificationInfo(userId, token, isVerified) {
    await User.update({ emailVerificationToken: token, isEmailVerified: isVerified }, { where: { id: userId } });
}
>>>>>>> 3fa7883 (Separated Functions)
=======
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
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
