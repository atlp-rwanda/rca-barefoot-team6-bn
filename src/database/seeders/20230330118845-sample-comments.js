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
      'Comments',
      [
        {
          comment_text: 'This is a comment',
          timestamp: '2023-03-29T09:03:13.697Z',
          request_id: 1,
          user_id: 1,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-03-29T09:03:13.697Z',
          updatedAt: '2023-03-29T09:16:53.108Z'
        },
        {
          comment_text: 'Great post, thanks for sharing!',
          timestamp: '2023-03-30T12:23:43.123Z',
          request_id: 2,
          user_id: 2,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-03-30T12:23:43.123Z',
          updatedAt: '2023-03-30T12:23:43.123Z'
        },
        {
          comment_text: 'I have a question about this post.',
          timestamp: '2023-03-31T17:54:21.456Z',
          request_id: 2,
          user_id: 1,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-03-31T17:54:21.456Z',
          updatedAt: '2023-03-31T17:54:21.456Z'
        },
        {
          comment_text: 'Thanks for answering my question!',
          timestamp: '2023-03-31T18:02:43.789Z',
          request_id: 2,
          user_id: 2,
          parent_comment_id: 3,
          is_deleted: false,
          createdAt: '2023-03-31T18:02:43.789Z',
          updatedAt: '2023-03-31T18:02:43.789Z'
        },
        {
          comment_text: 'This is a really insightful post, thank you.',
          timestamp: '2023-04-01T08:12:53.234Z',
          request_id: 3,
          user_id: 1,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-01T08:12:53.234Z',
          updatedAt: '2023-04-01T08:12:53.234Z'
        },
        {
          comment_text: 'I completely agree with your points in this post.',
          timestamp: '2023-04-01T12:45:32.987Z',
          request_id: 3,
          user_id: 2,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-01T12:45:32.987Z',
          updatedAt: '2023-04-01T12:45:32.987Z'
        },
        {
          comment_text: 'Interesting topic, I look forward to reading more.',
          timestamp: '2023-04-02T09:30:11.111Z',
          request_id: 4,
          user_id: 1,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-02T09:30:11.111Z',
          updatedAt: '2023-04-02T09:30:11.111Z'
        },
        {
          comment_text: 'Great post! Very informative and well-written.',
          timestamp: '2023-04-02T13:45:12.345Z',
          request_id: 4,
          user_id: 2,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-02T13:45:12.345Z',
          updatedAt: '2023-04-02T13:45:12.345Z'
        },

        {
          comment_text: 'I found this post to be very informative.',
          timestamp: '2023-04-03T16:45:34.567Z',
          request_id: 4,
          user_id: 2,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-03T16:45:34.567Z',
          updatedAt: '2023-04-03T16:45:34.567Z'
        },
        {
          comment_text: 'This is a great addition to the website!',
          timestamp: '2023-04-04T11:23:45.678Z',
          request_id: 5,
          user_id: 1,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-04T11:23:45.678Z',
          updatedAt: '2023-04-04T11:23:45.678Z'
        },
        {
          comment_text: "I'm so glad this feature was added, it's very helpful.",
          timestamp: '2023-04-05T14:30:12.345Z',
          request_id: 5,
          user_id: 2,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-05T14:30:12.345Z',
          updatedAt: '2023-04-05T14:30:12.345Z'
        },
        {
          comment_text: 'This is a really great post, thank you for sharing!',
          timestamp: '2023-04-06T10:12:34.567Z',
          request_id: 6,
          user_id: 1,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-06T10:12:34.567Z',
          updatedAt: '2023-04-06T10:12:34.567Z'
        },
        {
          comment_text: 'I have a question about something you mentioned in the post.',
          timestamp: '2023-04-07T15:42:12.345Z',
          request_id: 6,
          user_id: 2,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-07T15:42:12.345Z',
          updatedAt: '2023-04-07T15:42:12.345Z'
        },
        {
          comment_text: 'Thanks for addressing my question!',
          timestamp: '2023-04-07T16:01:23.456Z',
          request_id: 6,
          user_id: 1,
          parent_comment_id: 13,
          is_deleted: false,
          createdAt: '2023-04-07T16:01:23.456Z',
          updatedAt: '2023-04-07T16:01:23.456Z'
        },
        {
          comment_text: "Great post, I'll definitely be sharing this with others!",
          timestamp: '2023-04-08T09:12:34.567Z',
          request_id: 7,
          user_id: 2,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-08T09:12:34.567Z',
          updatedAt: '2023-04-08T09:12:34.567Z'
        },
        {
          comment_text: 'I have to disagree with this point, as I think it oversimplifies the issue.',
          timestamp: '2023-04-08T17:30:45.678Z',
          request_id: 7,
          user_id: 2,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-08T17:30:45.678Z',
          updatedAt: '2023-04-08T17:30:45.678Z'
        },
        {
          comment_text: "I think this feature could use some improvement, but it's a good start.",
          timestamp: '2023-04-09T14:23:45.678Z',
          request_id: 8,
          user_id: 1,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-09T14:23:45.678Z',
          updatedAt: '2023-04-09T14:23:45.678Z'
        },
        {
          comment_text: 'I agree with your assessment, hopefully the team will make some updates soon.',
          timestamp: '2023-04-10T10:30:12.345Z',
          request_id: 8,
          user_id: 2,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-10T10:30:12.345Z',
          updatedAt: '2023-04-10T10:30:12.345Z'
        },
        {
          comment_text: 'I had a similar issue and this post helped me solve it, thank you!',
          timestamp: '2023-04-10T14:12:34.567Z',
          request_id: 9,
          user_id: 1,
          parent_comment_id: null,
          is_deleted: false,
          createdAt: '2023-04-10T14:12:34.567Z',
          updatedAt: '2023-04-10T14:12:34.567Z'
        },
        {
          comment_text: 'Glad to hear this post was helpful for you!',
          timestamp: '2023-04-10T14:30:45.678Z',
          request_id: 9,
          user_id: 2,
          parent_comment_id: 19,
          is_deleted: false,
          createdAt: '2023-04-10T14:30:45.678Z',
          updatedAt: '2023-04-10T14:30:45.678Z'
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
