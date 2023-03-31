'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
<<<<<<< HEAD
  async up(queryInterface, Sequelize) {
=======
  async up (queryInterface, Sequelize) {
>>>>>>> 1bca06d7bbb292b2a1fd48b6963e896f30f33609
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
      province: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      sector: {
        type: Sequelize.STRING
      },
      cell: {
        type: Sequelize.STRING
      },
      village: {
        type: Sequelize.STRING
      },
      coordinates: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hotels');
  }
};
=======
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Hotels');
  }
};
>>>>>>> 1bca06d7bbb292b2a1fd48b6963e896f30f33609
