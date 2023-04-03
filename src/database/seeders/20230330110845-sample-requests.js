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
        },
        {
          id: 3,
          checkIn: '2023-03-29T09:28:06.945Z',
          checkOut: '2023-03-29T09:28:51.639Z',
          status: 'PENDING',
          roomId: 1,
          userId: 3,
          createdAt: '2023-03-29T09:28:06.945Z',
          updatedAt: '2023-03-29T09:28:51.639Z'
        },
        {
          id: 9,
          checkIn: '2023-03-29T10:09:23.081Z',
          checkOut: '2023-03-29T10:10:25.392Z',
          status: 'PENDING',
          roomId: 2,
          userId: 6,
          createdAt: '2023-03-29T10:09:23.081Z',
          updatedAt: '2023-03-29T10:10:25.392Z'
        },
        {
          id: 10,
          checkIn: '2023-03-29T10:21:03.567Z',
          checkOut: '2023-03-29T10:27:09.955Z',
          status: 'APPROVED',
          roomId: 2,
          userId: 1,
          createdAt: '2023-03-29T10:21:03.566Z',
          updatedAt: '2023-03-29T10:27:09.955Z'
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
