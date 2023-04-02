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
      'Requests',
      [
        {
          id: 1,
          checkIn: '2023-03-29T09:03:13.697Z',
          checkOut: '2023-03-29T09:16:53.109Z',
          status: 'PENDING',
          roomId: 1,
          userId: 1,
          createdAt: '2023-03-29T09:03:13.697Z',
          updatedAt: '2023-03-29T09:16:53.108Z'
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
