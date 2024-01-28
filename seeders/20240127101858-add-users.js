'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      firstName: 'Murat Can',
      lastName: 'Uzuner',
      email: 'muratcan1107@outlook.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'User2',
      lastName: 'Lastname2',
      email: 'user2@usermail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'User3',
      lastName: 'Lastname3',
      email: 'user3@usermail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'User4',
      lastName: 'Lastname4',
      email: 'user4@usermail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'User5',
      lastName: 'Lastname5',
      email: 'user5@usermail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
