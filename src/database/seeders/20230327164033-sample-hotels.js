"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Hotels",
      [
        {
          name: "The Grand Hotel",
          email: "reservations@thegrandhotel.com",
          address: "123 Main St, City, State",
          website: "https://www.thegrandhotel.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Luxury Inn",
          email: "info@luxuryinn.com",
          address: "456 Broad St, City, State",
          website: "https://www.luxuryinn.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Hotels', null, {});
     */
  },
};
