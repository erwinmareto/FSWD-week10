'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'joey@kadokawa.com',
        gender: 'Male',
        password: 'theanimeman',
        role: 'Content Creator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'amelia@hololive.com',
        gender: 'Female',
        password: 'watson4',
        role: 'Tech Support',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'link@mythical.com',
        gender: 'Male',
        password: 'gmm',
        role: 'Co-owner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
