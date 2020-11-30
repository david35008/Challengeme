const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  Image.init({
    challengeId: {
      field: 'challenge_id',
      type: DataTypes.INTEGER,
    },
    img: DataTypes.TEXT('long'),
  }, {
    sequelize,
    modelName: 'Image',
    tableName: 'images',
  });
  return Image;
};
