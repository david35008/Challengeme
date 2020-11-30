'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GitToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GitToken.init({
    token: DataTypes.TEXT,
    status: DataTypes.ENUM("blocked", "available"),
    resetsAt: DataTypes.DATE,
    gitAccount: DataTypes.STRING,
    actionsLimit: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'GitToken',
  });
  return GitToken;
};