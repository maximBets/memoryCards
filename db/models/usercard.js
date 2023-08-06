const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserCard.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        // внешний ключ связан с таблицей Users
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      card_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        // внешний ключ связан с таблицей Cards
        references: {
          model: 'Cards',
          key: 'id',
        },
      },
      card_status: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'UserCard',
    }
  );
  return UserCard;
};
