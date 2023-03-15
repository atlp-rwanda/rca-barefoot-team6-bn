const User = require('../database/models/user');
const nodemailer = require('nodemailer');
exports.createUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        const user = await User.create({ email, password });
        return res.json({ message: 'User registered successfully!', data: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

exports.verifyEmail = async (req, res, next) => {
    const { token } = req.params;
    const user = await User.findOne({ where: { emailVerificationToken: token } });
    if (!user) {
        return res.status(404).json({ message: 'Email verification failed. Token is invalid or has expired.' });
    }
    req.user = user;
    next();
};
// When user clicks verify email must be directed on this route
exports.getVerifiedEmail = async (req, res) => {
    const { user } = req;
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