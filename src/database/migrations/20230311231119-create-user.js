'use strict';

const { default: USER_ENUM } = require('../enums/user');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM(USER_ENUM.ADMIN, USER_ENUM.AGENT, USER_ENUM.CLIENT, USER_ENUM.MANAGER),
        defaultValue: USER_ENUM.CLIENT
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      resetPasswordToken: {
        type: Sequelize.STRING,
        allowNull: true
      },
      resetPasswordExpires: {
        type: Sequelize.DATE
      },
      providerId: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      provider: {
        type: Sequelize.STRING,
        allowNull: true
      },
      emailVerificationToken: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: ''
      },
      isEmailVerified: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      isLoggedIn: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      role: {
        type: DataTypes.ENUM(USER_ENUM.ADMIN, USER_ENUM.AGENT, USER_ENUM.CLIENT, USER_ENUM.MANAGER),
        defaultValue: USER_ENUM.CLIENT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
