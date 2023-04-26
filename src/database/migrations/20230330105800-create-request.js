'use strict';
<<<<<<< HEAD

<<<<<<< HEAD
const { default: REQUESTS_ENUM } = require('../enums/request');

=======
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Requests', {
      id: {
<<<<<<< HEAD
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      checkIn: {
        type: DataTypes.DATE,
        allowNull: true
      },
      checkOut: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.ENUM(REQUESTS_ENUM.APPROVED, REQUESTS_ENUM.CANCELLED, REQUESTS_ENUM.PENDING, REQUESTS_ENUM.REJECTED),
        defaultValue: REQUESTS_ENUM.PENDING
      },
      roomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Room,
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Requests');
=======
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Requests', {
      id: {
=======
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
<<<<<<< HEAD
      roomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'Rooms',
        //   key: 'id'
        // }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
=======
      checkIn: {
        type: Sequelize.DATE
      },
      checkOut: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true
      },
<<<<<<< HEAD
=======
      userId: {
        type: Sequelize.INTEGER
      },
      roomId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Rooms',
        //   key: 'id'
        // },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
<<<<<<< HEAD

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
>>>>>>> ac14e0b60be67f639d6906940bf779a5bcb511a7
=======
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Requests');
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
  }
};
