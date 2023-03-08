const express = require('express');
// const sendEmail = require('./utils/sendEmail');
const app = express()
<<<<<<< HEAD
<<<<<<< HEAD
const nodemailer = require('nodemailer');
=======
>>>>>>> 72acd8f (Refactoring)
const User = require('./database/models/user');
const port = 3000;
const { connectDB, sequelize } = require('./database/config/db');
const { urlencoded, json } = require('body-parser');
app.use(urlencoded({ extended: false }));
app.use(json());

<<<<<<< HEAD
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    const user = await User.create({ email, password });
    res.json({ message: 'User registered successfully!', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.use('/verify-email/:token', async (req, res, next) => {
  const { token } = req.params;
  const user = await User.findOne({ where: { emailVerificationToken: token } });
  if (!user) {
    return res.status(404).json({ message: 'Email verification failed. Token is invalid or has expired.' });
  }
  req.user = user;
  next();
});

// When user clicks verify email must be directed on this route
app.get('/verify-email/:token', async (req, res) => {
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
});
=======
require('dotenv').config();

const port = process.env.PORT || 3000;

const db = require('./database/models/index');

db.sequelize.sync()
  .then(() => {
    console.log('Synced with database');
  })
  .catch((err) => {
    console.log('Error syncing with database', err);
  });
>>>>>>> 262bffb (chore: env file setup and database variables)

=======
>>>>>>> 72acd8f (Refactoring)
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log("✅Synced database successfully...");
  });
})