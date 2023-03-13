'use strict'
import { createTransport } from 'nodemailer';
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

// Generate random token
export const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);