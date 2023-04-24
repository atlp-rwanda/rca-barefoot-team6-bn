'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
<<<<<<< HEAD
  async up(queryInterface, Sequelize) {
=======
  async up (queryInterface, Sequelize) {
>>>>>>> ac14e0b60be67f639d6906940bf779a5bcb511a7
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
          hotel_id: 1,
          maxAccomodate: 2,
          floor: 1,
          roomType: 'SINGLE'
<<<<<<< HEAD
=======
        },
        {
          id: 2,
          name: 'Room 2',
          description: 'Room 2 description',
          createdAt: new Date(),
          updatedAt: new Date(),
          hotel_id: 2,
          maxAccomodate: 2,
          floor: 1,
          roomType: 'SINGLE'
        },
        {
          id: 3,
          name: 'Room 3',
          description: 'Room 3 description',
          createdAt: new Date(),
          updatedAt: new Date(),
          hotel_id: 1,
          maxAccomodate: 2,
          floor: 1,
          roomType: 'SINGLE'
        },
        {
          id: 4,
          name: 'Room 4',
          description: 'Room 4 description',
          createdAt: new Date(),
          updatedAt: new Date(),
          hotel_id: 2,
          maxAccomodate: 2,
          floor: 1,
          roomType: 'SINGLE'
>>>>>>> ac14e0b60be67f639d6906940bf779a5bcb511a7
        }
      ],
      {}
    );
  },

<<<<<<< HEAD
  async down(queryInterface, Sequelize) {
=======
  async down (queryInterface, Sequelize) {
>>>>>>> ac14e0b60be67f639d6906940bf779a5bcb511a7
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
