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

    await queryInterface.bulkInsert('trades', [{
      portfolioId: portfolioRows[0].id,
      shareId: shareRows[0].id,
      operationType: "BUY",
      quantity: 20000,
      price: 503200,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[1].id,
      shareId: shareRows[3].id,
      operationType: "BUY",
      quantity: 15000,
      price: 507900,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[4].id,
      shareId: shareRows[2].id,
      operationType: "SELL",
      quantity: 25000,
      price: 1142750,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: portfolioRows[6].id,
      shareId: shareRows[5].id,
      operationType: "SELL",
      quantity: 50000,
      price: 3346000,
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
