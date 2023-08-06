const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ Theme, User }) {
      // Один карточка принадлежит одной теме
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
      // Одна карточка может быть у разных User
      this.belongsToMany(User, {
        foreignKey: 'card_id',
        through: 'UserCards',
      });
    }
  }
  Card.init(
    {
      theme_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
      },
      eng_word: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      rus_word: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Card',
    }
  );
  return Card;
};
