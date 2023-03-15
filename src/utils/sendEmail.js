'use strict'

const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(data) {
  try {
    await sgMail.send({ ...data, from: 'noreply@example.com' });
  } catch (err) {
    console.error(err);
  }
}

module.exports = sendEmail;