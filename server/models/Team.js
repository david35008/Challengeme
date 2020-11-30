const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, {
        through: 'UserTeam',
        foreignKey: 'teamId'
      });
      this.hasMany(models.Assignment, {
        foreignKey: "teamId",
      });
    }
  }
  Team.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Team',
    tableName: 'teams',
  });
  return Team;
};
