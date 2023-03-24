'use strict'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
import nodemailer from 'nodemailer';
require('dotenv').config();
export async function sendEmail (to, subject, text, html) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
<<<<<<< HEAD
=======
import nodemailer from 'nodemailer';
require('dotenv').config();
export async function sendEmail (to, subject, text, html) {
  // create reusable transporter object using the default SMTP transport
<<<<<<< HEAD
  let transporter = nodemailer.createTransport({
>>>>>>> 3fa7883 (Separated Functions)
=======
  const transporter = nodemailer.createTransport({
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASS
    }
  });

  // send mail with defined transport object
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
  const info = await transporter.sendMail({
    from: process.env.EMAIL, // replace with your sender email
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html
  });
  console.log('Message sent: %s', info.messageId);
}
<<<<<<< HEAD

// Generate random token
export const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
=======

const sgMail = require('@sendgrid/mail');
=======
import { createTransport } from 'nodemailer';
>>>>>>> 5b90360 (User Register Works and refactoring)
require('dotenv').config();
export async function sendEmail(to, subject, text) {
  // let testAccount = await nodemailer.createTestAccount()
  // create reusable transporter object using the default SMTP transport
  let transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "igiranezah59@gmail.com", // replace with your sender email
      pass: process.env.API_KEY // replace with your sender email password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "igiranezah59@gmail.com", // replace with your sender email
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  });

  console.log('Message sent: %s', info.messageId);
}

<<<<<<< HEAD
module.exports = sendEmail;
>>>>>>> 9529301 (feat(user): implement user registration)
=======
// Generate random token
export const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
  let info = await transporter.sendMail({
=======
  const info = await transporter.sendMail({
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
    from: process.env.EMAIL, // replace with your sender email
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html
  });
  console.log('Message sent: %s', info.messageId);
}
<<<<<<< HEAD
>>>>>>> 3fa7883 (Separated Functions)
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
