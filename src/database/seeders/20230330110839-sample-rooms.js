'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
  async up(queryInterface, Sequelize) {
=======
  async up (queryInterface, Sequelize) {
>>>>>>> ac14e0b60be67f639d6906940bf779a5bcb511a7
=======
  async up(queryInterface, Sequelize) {
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
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
<<<<<<< HEAD
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
=======
          hotelId: 1,
          maxAccomodate: 2,
          floor: 1,
          roomType: 'SINGLE'
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
        }
      ],
      {}
    );
  },

<<<<<<< HEAD
<<<<<<< HEAD
  async down(queryInterface, Sequelize) {
=======
  async down (queryInterface, Sequelize) {
>>>>>>> ac14e0b60be67f639d6906940bf779a5bcb511a7
=======
  async down(queryInterface, Sequelize) {
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
