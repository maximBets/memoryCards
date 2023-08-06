module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          login: 'Lexa',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          login: 'Dimon',
          password: '12345',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
