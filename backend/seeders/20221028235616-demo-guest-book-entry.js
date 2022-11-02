'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('guestbookentries', [{
      firstName: "Jordan",
      lastName: "Doerksen",
      displayName: "PersistentCoder",
      email: "jordan.doerksen@robogarden.ca",
      message: "Hello, World!",
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
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
