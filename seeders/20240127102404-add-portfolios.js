'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id from users;`
    );
    const userRows = users[0];
    await queryInterface.bulkInsert('portfolios', [{
      name: 'Murat Can Uzuner Portfolio1',
      moneyAmount: 120000,
      userId: userRows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Murat Can Uzuner Portfolio2',
      moneyAmount: 40000,
      userId: userRows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'User2 Portfolio1',
      moneyAmount: 75000,
      userId: userRows[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'User3 Portfolio1',
      moneyAmount: 50000,
      userId: userRows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'User4 Portfolio1',
      moneyAmount: 35000,
      userId: userRows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'User4 Portfolio2',
      moneyAmount: 10000,
      userId: userRows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'User5 Portfolio1',
      moneyAmount: 25000,
      userId: userRows[4].id,
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
