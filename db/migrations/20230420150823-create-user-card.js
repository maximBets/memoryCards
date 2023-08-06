/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserCards', {
      // удалили id

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        // внешний ключ связан с таблицей Users
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      card_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        // внешний ключ связан с таблицей Cards
        references: {
          model: 'Cards',
          key: 'id',
        },
      },
      card_status: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserCards');
  },
};
