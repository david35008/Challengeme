const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Team, {
        foreignKey: "teamId",
      });
      this.belongsTo(models.Challenge, {
        foreignKey: "challengeId",
      });
    }
  };
  Assignment.init({
    teamId: {
      field: 'team_id',
      type: DataTypes.INTEGER,
    },
    challengeId: {
      field: 'challenge_id',
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Assignment',
    tableName: 'assignments',
  });
  return Assignment;
};