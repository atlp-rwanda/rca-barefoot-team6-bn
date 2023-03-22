'use strict'
import nodemailer from 'nodemailer';
require('dotenv').config();
<<<<<<< HEAD
<<<<<<< HEAD
export async function sendEmail (to, subject, text, html) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
=======
export async function sendEmail(to, subject, text, html) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
>>>>>>> a5d0fa4 (feat: added swagger documentation with openain)
=======
export async function sendEmail (to, subject, text, html) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
>>>>>>> ce74118 (ft:logout)
    // host: 'smtp.ethereal.com',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // replace with your sender email
<<<<<<< HEAD
<<<<<<< HEAD
      pass: process.env.APP_PASS // replace with your sender email password
=======
      pass: process.env.APP_PASS   // replace with your sender email password
>>>>>>> a5d0fa4 (feat: added swagger documentation with openain)
=======
      pass: process.env.APP_PASS // replace with your sender email password
>>>>>>> ce74118 (ft:logout)
    }
  });

  // send mail with defined transport object
<<<<<<< HEAD
<<<<<<< HEAD
  const info = await transporter.sendMail({
    from: process.env.EMAIL, // replace with your sender email
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html
=======
  let info = await transporter.sendMail({
    from: process.env.EMAIL, // replace with your sender email
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html
>>>>>>> a5d0fa4 (feat: added swagger documentation with openain)
=======
  const info = await transporter.sendMail({
    from: process.env.EMAIL, // replace with your sender email
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html
>>>>>>> ce74118 (ft:logout)
  });

  console.log('Message sent: %s', info.messageId);
}

<<<<<<< HEAD
<<<<<<< HEAD
export const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
=======

export const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
>>>>>>> a5d0fa4 (feat: added swagger documentation with openain)
=======
export const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
>>>>>>> ce74118 (ft:logout)
