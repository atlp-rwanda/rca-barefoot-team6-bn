'use strict'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
import { Model, DataTypes } from 'sequelize';
import { hash } from 'bcryptjs';
import { sequelize } from '../config/db';
require('dotenv').config();
<<<<<<< HEAD
=======
import { Model, DataTypes } from 'sequelize';
import { hash } from 'bcryptjs';
import { sequelize } from '../config/db';
<<<<<<< HEAD
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
require('dotenv').config();
>>>>>>> c977833 (feat: added swagger documentation with openain)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
  static associate (models) {
    // define association here
  }
};
<<<<<<< HEAD
User.init({
=======

const userObj = {
>>>>>>> 8d74a26 (feat: project structure initialization)
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false
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
  resetPasswordToken: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: ''
  },
  resetPasswordExpires: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
  },
  emailVerificationToken: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: ''
  },
  isEmailVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  }
<<<<<<< HEAD
}, {
  sequelize,
  modelName: 'Users'
});

User.beforeCreate(async (user, options) => {
  const hashedPassword = await hash(user.password, 10)
  user.password = hashedPassword;
})
sequelize.sync();

// export the model
export default User;
=======
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
=======
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const db = require("../config/db");
// const db = require("../models/index");

const nodemailer = require('nodemailer');
// const sendEmail = require('../../utils/sendEmail');
// Load environment variables
=======
import { Model, DataTypes } from 'sequelize';
import { hash } from 'bcryptjs';
>>>>>>> 5b90360 (User Register Works and refactoring)
require('dotenv').config();
import { sequelize } from '../config/db';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e7caa7b (Removed unnecessary package)

>>>>>>> 3fa7883 (Separated Functions)
class User extends Model {
<<<<<<< HEAD
  async checkPassword(password) {
    return await bcrypt.compare(password, this.password);
>>>>>>> 9529301 (feat(user): implement user registration)
  }
  static async hashPassword(password) {
    return await bcrypt.hash(password, 10);
  }
=======
>>>>>>> 5b90360 (User Register Works and refactoring)
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false
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
  const hashedPassword = await hash(user.password, 10)
  user.password = hashedPassword;
<<<<<<< HEAD
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
<<<<<<< HEAD
  return User
}
>>>>>>> 32936ce (chore: postgres and sequelize orm setup)
=======
  static associate(models) {
=======
  static associate (models) {
>>>>>>> c977833 (feat: added swagger documentation with openain)
    // define association here
  }
};
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false
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
  resetPasswordToken: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: ''
  },
  resetPasswordExpires: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
  },
  emailVerificationToken: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: ''
  },
  isEmailVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  }
}, {
=======
}
User.init(userObj, {
>>>>>>> 8d74a26 (feat: project structure initialization)
  sequelize,
  modelName: 'Users'
});

User.beforeCreate(async (user, options) => {
  const hashedPassword = await hash(user.password, 10)
  user.password = hashedPassword;
})
sequelize.sync();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 3fa7883 (Separated Functions)
=======
>>>>>>> e7caa7b (Removed unnecessary package)
// export the model
export default User;
<<<<<<< HEAD
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
  console.log("Message sent: %s", info.accepted, "Token: " + user.emailVerificationToken);
});
// synchronize the database
sequelize.sync();

// export the model
module.exports = User;
>>>>>>> 9529301 (feat(user): implement user registration)
=======
})
sequelize.sync();

// export the model
export default User;
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
>>>>>>> c977833 (feat: added swagger documentation with openain)
=======
// export the model
export default User;
>>>>>>> 8d74a26 (feat: project structure initialization)
