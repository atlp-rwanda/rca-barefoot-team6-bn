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
      'Requests',
      [
        {
          checkin: '2023-03-29T09:03:13.697Z',
          checkout: '2023-03-29T09:16:53.109Z',
          status: 'CLOSED',
          room_id: 1,
          user_id: 1,
          createdAt: '2023-03-29T09:03:13.697Z',
          updatedAt: '2023-03-29T09:16:53.108Z'
        },
        {
          checkin: '2023-03-29T09:19:21.916Z',
          checkout: null,
          status: 'PENDING',
          room_id: 1,
          user_id: 1,
          createdAt: '2023-03-29T09:19:21.916Z',
          updatedAt: '2023-03-29T09:19:21.916Z'
        },
        {
          checkin: '2023-03-29T09:28:06.945Z',
          checkout: '2023-03-29T09:28:51.639Z',
          status: 'CLOSED',
          room_id: 1,
          user_id: 3,
          createdAt: '2023-03-29T09:28:06.945Z',
          updatedAt: '2023-03-29T09:28:51.639Z'
        },
        {
          checkin: '2023-03-29T09:55:11.207Z',
          checkout: null,
          status: 'PENDING',
          room_id: 2,
          user_id: 3,
          createdAt: '2023-03-29T09:55:11.207Z',
          updatedAt: '2023-03-29T09:55:11.207Z'
        },
        {
          checkin: '2023-03-29T10:00:43.960Z',
          checkout: null,
          status: 'PENDING',
          room_id: 3,
          user_id: 3,
          createdAt: '2023-03-29T10:00:43.959Z',
          updatedAt: '2023-03-29T10:00:43.959Z'
        },
        {
          checkin: '2023-03-29T10:02:16.010Z',
          checkout: null,
          status: 'PENDING',
          room_id: 3,
          user_id: 1,
          createdAt: '2023-03-29T10:02:16.010Z',
          updatedAt: '2023-03-29T10:02:16.010Z'
        },
        {
          checkin: '2023-03-29T10:08:02.395Z',
          checkout: null,
          status: 'PENDING',
          room_id: 3,
          user_id: 6,
          createdAt: '2023-03-29T10:08:02.395Z',
          updatedAt: '2023-03-29T10:08:02.395Z'
        },
        {
          checkin: '2023-03-29T10:09:16.487Z',
          checkout: null,
          status: 'PENDING',
          room_id: 1,
          user_id: 6,
          createdAt: '2023-03-29T10:09:16.487Z',
          updatedAt: '2023-03-29T10:09:16.487Z'
        },
        {
          checkin: '2023-03-29T10:09:23.081Z',
          checkout: '2023-03-29T10:10:25.392Z',
          status: 'CLOSED',
          room_id: 2,
          user_id: 6,
          createdAt: '2023-03-29T10:09:23.081Z',
          updatedAt: '2023-03-29T10:10:25.392Z'
        },
        {
          checkin: '2023-03-29T10:24:00.360Z',
          checkout: null,
          status: 'PENDING',
          room_id: 4,
          user_id: 1,
          createdAt: '2023-03-29T10:24:00.359Z',
          updatedAt: '2023-03-29T10:24:00.359Z'
        },
        {
          checkin: '2023-03-29T10:21:03.567Z',
          checkout: '2023-03-29T10:27:09.955Z',
          status: 'CONFIRMED',
          room_id: 2,
          user_id: 1,
          createdAt: '2023-03-29T10:21:03.566Z',
          updatedAt: '2023-03-29T10:27:09.955Z'
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
