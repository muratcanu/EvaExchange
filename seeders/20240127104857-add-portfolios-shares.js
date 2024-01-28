'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const portfolios = await queryInterface.sequelize.query(
      `SELECT id from portfolios;`
    );
    const portfolioRows = portfolios[0];

    const shares = await queryInterface.sequelize.query(
      `SELECT id from shares;`
    );
    const shareRows = shares[0];

    await queryInterface.bulkInsert('portfolios_shares', [{
      portfolioId: portfolioRows[0].id,
      shareId: shareRows[0].id,
      quantity: 20000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[0].id,
      shareId: shareRows[2].id,
      quantity: 45000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[0].id,
      shareId: shareRows[3].id,
      quantity: 30000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[0].id,
      shareId: shareRows[5].id,
      quantity: 110000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[1].id,
      shareId: shareRows[1].id,
      quantity: 30000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[1].id,
      shareId: shareRows[4].id,
      quantity: 75000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[2].id,
      shareId: shareRows[0].id,
      quantity: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[2].id,
      shareId: shareRows[1].id,
      quantity: 20000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[2].id,
      shareId: shareRows[3].id,
      quantity: 65000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[3].id,
      shareId: shareRows[5].id,
      quantity: 400000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[3].id,
      shareId: shareRows[2].id,
      quantity: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[4].id,
      shareId: shareRows[4].id,
      quantity: 300000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[5].id,
      shareId: shareRows[0].id,
      quantity: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[5].id,
      shareId: shareRows[3].id,
      quantity: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[5].id,
      shareId: shareRows[5].id,
      quantity: 350000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[6].id,
      shareId: shareRows[2].id,
      quantity: 550000,
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
