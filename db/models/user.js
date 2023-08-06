const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Card }) {
      // у одного user может быть много карточек
      this.belongsToMany(Card, {
        foreignKey: 'user_id',
        through: 'UserCards',
      });
    }
  }
  User.init(
    {
      login: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
