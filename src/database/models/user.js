'use strict'
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const db = require("../config/db");
// const db = require("../models/index");

const nodemailer = require('nodemailer');
// const sendEmail = require('../../utils/sendEmail');
// Load environment variables
require('dotenv').config();

class User extends Model {
  async checkPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
  static async hashPassword(password) {
    return await bcrypt.hash(password, 10);
  }
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

const sequelize = db.sequelize;

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  emailVerificationToken: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: ""
  },
  isEmailVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  }
}, {
  sequelize,
  modelName: 'Users'
});

User.beforeCreate(async (user, options) => {
  const hashedPassword = await User.hashPassword(user.password);
  user.password = hashedPassword;
  // Generate random token
  const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  // Set email verification token and flag
  user.emailVerificationToken = token;
  user.isEmailVerified = false;
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // Send email verification link
  let info = await transporter.sendMail({
    from: testAccount.user, // sender address
    to: user.email, // list of receivers
    subject: 'Verify your email address',
    text: `Click the following link to verify your email address: ${process.env.BASE_URL}/verify-email?token=${token}`,
    html: `<p>Click the following link to verify your email address: <a href="${process.env.BASE_URL}/verify-email?token=${token}">${process.env.BASE_URL}/verify-email?token=${token}</a></p>`
  })
  console.log("Message sent: %s", info.accepted, "Token: " + user.emailVerificationToken);
});
// synchronize the database
sequelize.sync();

// export the model
module.exports = User;