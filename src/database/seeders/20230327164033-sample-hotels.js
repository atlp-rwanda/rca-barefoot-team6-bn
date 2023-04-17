'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Hotels',
      [
        {
          name: 'The Grand Hotel',
          email: 'reservations@thegrandhotel.com',
          address: '123 Main St, City, State',
          website: 'https://www.thegrandhotel.com',
          province: 'Kigali',
          district: 'Gasabo',
          sector: 'Kacyiru',
          cell: 'Kamatamu',
          village: 'Karukina',
          // coordinates: {
          //   latitude: 37.7749,
          //   longitude: -122.4194
          // },
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Luxury Inn',
          email: 'info@luxuryinn.com',
          address: '456 Broad St, City, State',
          province: 'North',
          district: 'Musanze',
          sector: 'Muhoza',
          cell: 'Kabuga',
          village: 'Kabuga',
          // coordinates: {
          //   latitude: 37.7749,
          //   longitude: -122.4194
          // },
          website: 'https://www.luxuryinn.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ],
      {}
    );
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Hotels', null, {});
     */
  }
};
