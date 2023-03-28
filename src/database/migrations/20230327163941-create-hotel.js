'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
<<<<<<< HEAD
  async up (queryInterface, Sequelize) {
=======
  async up(queryInterface, Sequelize) {
>>>>>>> 27815fd (feat: create CRUD operations for hotels)
    await queryInterface.createTable('Hotels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true
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
<<<<<<< HEAD
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Hotels');
  }
};
=======
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hotels');
  }
};
>>>>>>> 27815fd (feat: create CRUD operations for hotels)
