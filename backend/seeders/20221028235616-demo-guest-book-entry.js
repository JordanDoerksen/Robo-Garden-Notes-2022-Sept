'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('GuestBookEntry', [{
      firstName: "Jordan",
      lastName: "Doerksen",
      displayName: "PersistentCoder",
      email: "jordan.doerksen@robogarden.ca",
      message: "Hello, World!"
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
