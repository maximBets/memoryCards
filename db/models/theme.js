const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Card }) {
      // у одной темы много карточек
      this.hasMany(Card, { foreignKey: 'theme_id' });
    }
  }
  Theme.init(
    {
      theme_title: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Theme',
    }
  );
  return Theme;
};
