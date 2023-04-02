'use strict';

const { default: REQUESTS_ENUM } = require('../enums/request');
const { default: Room } = require('../models/room');
const { default: User } = require('../models/user');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Requests', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      checkIn: {
        type: Sequelize.DATE
      },
      checkOut: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM(REQUESTS_ENUM.APPROVED, REQUESTS_ENUM.CANCELLED, REQUESTS_ENUM.PENDING, REQUESTS_ENUM.REJECTED),
        defaultValue: REQUESTS_ENUM.PENDING
      },
      roomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Room,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Requests');
  }
};
