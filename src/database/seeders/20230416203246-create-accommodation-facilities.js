'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert(
      'AccommodationFacilities',
      [
        {
          name: 'Example Accommodation Facility 1',
          address: '123 Main St, Anytown USA',
          image: 'https://example.com/image1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Example Accommodation Facility 2',
          address: '456 Maple Ave, Anytown USA',
          image: 'https://example.com/image2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Example Accommodation Facility 3',
          address: '789 Oak St, Anytown USA',
          image: 'https://example.com/image3.jpg',
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
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
