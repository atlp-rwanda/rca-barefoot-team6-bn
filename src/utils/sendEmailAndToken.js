'use strict'
import nodemailer from 'nodemailer';
require('dotenv').config();
export async function sendEmail (to, subject, text, html) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.com',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // replace with your sender email
      pass: process.env.APP_PASS // replace with your sender email password
    }
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.EMAIL, // replace with your sender email
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html
  });

  console.log('Message sent: %s', info.messageId);
}

export const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
