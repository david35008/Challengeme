const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Submission extends Model {
    static associate(models) {
      this.belongsTo(models.Challenge, {
        foreignKey: 'challengeId',
      });

      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
    }
  }
  Submission.init(
    {
      challengeId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      state: DataTypes.STRING, // PENDING || FAIL || SUCCESS
      solutionRepository: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Submission',
      tableName: 'submissions',
    },
  );
  return Submission;
};
