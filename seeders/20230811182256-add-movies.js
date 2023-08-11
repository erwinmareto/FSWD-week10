'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [
      {
        title: "Barbie",
        genres: "Drama|Romance",
        year: 2023,
        photo: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Oppenheimer",
        genres: "Documentary|Science",
        year: 2023,
        photo: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Spider-man: Across the spider-verse",
        genres: "Animation|Action|Comedy|Drama",
        year: 2023,
        photo: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Spider-man: Into the spider-verse",
        genres: "Animation|Action|Comedy|Drama",
        year: 2018,
        photo: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  }
};
