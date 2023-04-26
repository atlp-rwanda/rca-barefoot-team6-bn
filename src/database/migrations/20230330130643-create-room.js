'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      maxAccomodate: {
        type: Sequelize.INTEGER
      },
      floor: {
        type: Sequelize.INTEGER
      },
      roomType: {
        // type: Sequelize.DataTypes.ENUM('PRESIDENTIAL', 'SINGLE', 'DOUBLE_ROOM'),
<<<<<<< HEAD
        type: Sequelize.STRING,
        allowNull: false
      },
      hotel_id: {
        type: Sequelize.INTEGER,
        field: 'hotel_id',
=======
        type: Sequelize.ENUM('PRESIDENTIAL', 'SINGLE', 'DOUBLE_ROOM'),
        // type: Sequelize.STRING,
        allowNull: false
      },
      hotelId: {
        type: Sequelize.INTEGER,
        field: 'hotelId',
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
        references: {
          model: 'Hotels',
          key: 'id'
        },
<<<<<<< HEAD
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
=======
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL'
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
      },
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
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Rooms');
  }
};
