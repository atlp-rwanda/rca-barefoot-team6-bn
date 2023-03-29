'use strict'
import { Model, DataTypes } from 'sequelize';
import { hash, compare } from 'bcryptjs';
import { sequelize } from '../config/db';
import dotenv from 'dotenv';
dotenv.config();

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

const userObj = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  role: {
    type: DataTypes.ENUM('USER', 'AGENT', 'ADMIN'),
    defaultValue: 'USER'
  },
  firstName: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true
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
    allowNull: true
  },
  provider: {
    type: DataTypes.STRING,
    allowNull: true
  },
  providerId: {
    type: DataTypes.TEXT,
    allowNull: true
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
  },
  isLoggedIn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  }
}
User.init(userObj, {
  sequelize,
  modelName: 'Users'
});

User.beforeCreate(async (user, options) => {
  if (user.password) {
    const hashedPassword = await hash(user.password, 10)
    user.password = hashedPassword;
  }
})

User.prototype.isValidPassword = async function (password) {
  const user = this;
  const compareResult = await compare(password, user.password);
  return compareResult;
};

sequelize.sync();
// export the model
export default User;
