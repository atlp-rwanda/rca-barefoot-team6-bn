'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
        // type: Sequelize.STRING
        type: Sequelize.JSONB,
        // allowNull: true,
        get: function () {
          return {
            latitude: this.getDataValue('coordinates.latitude'),
            longitude: this.getDataValue('coordinates.longitude')
          }
        },
        set: function (value) {
          this.setDataValue('coordinates', JSON.stringify(value));
        }
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
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Hotels');
  }
};
<<<<<<< HEAD
=======

>>>>>>> ac14e0b60be67f639d6906940bf779a5bcb511a7
