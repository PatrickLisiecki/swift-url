"use strict";

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
      "short_urls",
      [
        {
          origin: "https://patricklisiecki.com/",
          short: "aaa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          origin: "https://patricklisiecki.com/",
          short: "aaa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          origin: "https://patricklisiecki.com/",
          short: "aaa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("short_urls", null, {});
  },
};
