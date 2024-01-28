'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('shares', [{
      longName: 'Amazon',
      shortName: 'AMZ',
      quantity: 140000,
      price: 25.16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      longName: 'Nvidia',
      shortName: 'NVD',
      quantity: 200000,
      price: 15.05,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      longName: 'Tesla',
      shortName: 'TSL',
      quantity: 300000,
      price: 45.71,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      longName: 'Microsoft',
      shortName: 'MCS',
      quantity: 65000,
      price: 33.86,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      longName: 'Mercedes',
      shortName: 'MRC',
      quantity: 625000,
      price: 21.15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      longName: 'Google',
      shortName: 'GGL',
      quantity: 1140000,
      price: 66.92,
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
