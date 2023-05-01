'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
      'Rooms',
      [
        {
          id: 1,
          name: 'Room 1',
          description: 'Room 1 description',
          createdAt: new Date(),
          updatedAt: new Date(),
          hotelId: 1,
          maxAccomodate: 2,
          floor: 1,
          roomType: 'SINGLE'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
