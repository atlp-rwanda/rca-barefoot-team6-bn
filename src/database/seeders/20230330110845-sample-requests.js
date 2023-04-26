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
      'Requests',
      [
        {
          id: 1,
<<<<<<< HEAD
<<<<<<< HEAD
          checkIn: '2023-03-29T09:03:13.697Z',
          checkOut: '2023-03-29T09:16:53.109Z',
          status: 'PENDING',
          roomId: 1,
          userId: 1,
          createdAt: '2023-03-29T09:03:13.697Z',
          updatedAt: '2023-03-29T09:16:53.108Z'
=======
          checkin: '2023-03-29T09:03:13.697Z',
          checkout: '2023-03-29T09:16:53.109Z',
          status: 'CLOSED',
          roomId: 1,
          user_id: 1,
=======
          checkIn: '2023-03-29T09:03:13.697Z',
          checkOut: '2023-03-29T09:16:53.109Z',
          status: 'CLOSED',
          roomId: 1,
          userId: 1,
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
          createdAt: '2023-03-29T09:03:13.697Z',
          updatedAt: '2023-03-29T09:16:53.108Z'
        },
        {
          id: 2,
<<<<<<< HEAD
          checkin: '2023-03-29T09:19:21.916Z',
          checkout: null,
          status: 'PENDING',
          roomId: 1,
          user_id: 1,
=======
          checkIn: '2023-03-29T09:19:21.916Z',
          checkOut: null,
          status: 'PENDING',
          roomId: 1,
          userId: 1,
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
          createdAt: '2023-03-29T09:19:21.916Z',
          updatedAt: '2023-03-29T09:19:21.916Z'
        },
        {
          id: 3,
<<<<<<< HEAD
          checkin: '2023-03-29T09:28:06.945Z',
          checkout: '2023-03-29T09:28:51.639Z',
          status: 'CLOSED',
          roomId: 1,
          user_id: 3,
=======
          checkIn: '2023-03-29T09:28:06.945Z',
          checkOut: '2023-03-29T09:28:51.639Z',
          status: 'CLOSED',
          roomId: 1,
          userId: 3,
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
          createdAt: '2023-03-29T09:28:06.945Z',
          updatedAt: '2023-03-29T09:28:51.639Z'
        },
        {
          id: 4,
<<<<<<< HEAD
          checkin: '2023-03-29T09:55:11.207Z',
          checkout: null,
          status: 'PENDING',
          roomId: 2,
          user_id: 3,
=======
          checkIn: '2023-03-29T09:55:11.207Z',
          checkOut: null,
          status: 'PENDING',
          roomId: 2,
          userId: 3,
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
          createdAt: '2023-03-29T09:55:11.207Z',
          updatedAt: '2023-03-29T09:55:11.207Z'
        },
        {
          id: 5,
<<<<<<< HEAD
          checkin: '2023-03-29T10:00:43.960Z',
          checkout: null,
          status: 'PENDING',
          roomId: 3,
          user_id: 3,
=======
          checkIn: '2023-03-29T10:00:43.960Z',
          checkOut: null,
          status: 'PENDING',
          roomId: 3,
          userId: 3,
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
          createdAt: '2023-03-29T10:00:43.959Z',
          updatedAt: '2023-03-29T10:00:43.959Z'
        },
        {
          id: 6,
<<<<<<< HEAD
          checkin: '2023-03-29T10:02:16.010Z',
          checkout: null,
          status: 'PENDING',
          roomId: 3,
          user_id: 1,
=======
          checkIn: '2023-03-29T10:02:16.010Z',
          checkOut: null,
          status: 'PENDING',
          roomId: 3,
          userId: 1,
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
          createdAt: '2023-03-29T10:02:16.010Z',
          updatedAt: '2023-03-29T10:02:16.010Z'
        },
        {
          id: 7,
<<<<<<< HEAD
          checkin: '2023-03-29T10:08:02.395Z',
          checkout: null,
          status: 'PENDING',
          roomId: 3,
          user_id: 6,
=======
          checkIn: '2023-03-29T10:08:02.395Z',
          checkOut: null,
          status: 'PENDING',
          roomId: 3,
          userId: 6,
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
          createdAt: '2023-03-29T10:08:02.395Z',
          updatedAt: '2023-03-29T10:08:02.395Z'
        },
        {
          id: 8,
<<<<<<< HEAD
          checkin: '2023-03-29T10:09:16.487Z',
          checkout: null,
          status: 'PENDING',
          roomId: 1,
          user_id: 6,
=======
          checkIn: '2023-03-29T10:09:16.487Z',
          checkOut: null,
          status: 'PENDING',
          roomId: 1,
          userId: 6,
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
          createdAt: '2023-03-29T10:09:16.487Z',
          updatedAt: '2023-03-29T10:09:16.487Z'
        },
        {
          id: 9,
<<<<<<< HEAD
          checkin: '2023-03-29T10:09:23.081Z',
          checkout: '2023-03-29T10:10:25.392Z',
          status: 'CLOSED',
          roomId: 2,
          user_id: 6,
=======
          checkIn: '2023-03-29T10:09:23.081Z',
          checkOut: '2023-03-29T10:10:25.392Z',
          status: 'CLOSED',
          roomId: 2,
          userId: 6,
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
          createdAt: '2023-03-29T10:09:23.081Z',
          updatedAt: '2023-03-29T10:10:25.392Z'
        },
        {
          id: 11,
<<<<<<< HEAD
          checkin: '2023-03-29T10:24:00.360Z',
          checkout: null,
          status: 'PENDING',
          roomId: 4,
          user_id: 1,
=======
          checkIn: '2023-03-29T10:24:00.360Z',
          checkOut: null,
          status: 'PENDING',
          roomId: 4,
          userId: 1,
>>>>>>> d0ffcf5e53e68b6f1904ab593f8ea1dcde55888f
          createdAt: '2023-03-29T10:24:00.359Z',
          updatedAt: '2023-03-29T10:24:00.359Z'
        },
        {
          id: 10,
<<<<<<< HEAD
          checkin: '2023-03-29T10:21:03.567Z',
          checkout: '2023-03-29T10:27:09.955Z',
          status: 'CONFIRMED',
          roomId: 2,
          user_id: 1,
          createdAt: '2023-03-29T10:21:03.566Z',
          updatedAt: '2023-03-29T10:27:09.955Z'
>>>>>>> ac14e0b60be67f639d6906940bf779a5bcb511a7
=======
          checkIn: '2023-03-29T10:21:03.567Z',
          checkOut: '2023-03-29T10:27:09.955Z',
          status: 'CONFIRMED',
          roomId: 2,
          userId: 1,
          createdAt: '2023-03-29T10:21:03.566Z',
          updatedAt: '2023-03-29T10:27:09.955Z'
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
