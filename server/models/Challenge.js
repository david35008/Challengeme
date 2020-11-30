const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Challenge extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "authorId",
        as: "Author",
      });
      this.hasMany(models.Submission, {
        foreignKey: "challengeId",
      });
      this.hasMany(models.Review, {
        foreignKey: "challengeId",
      });
      this.hasMany(models.Assignment, {
        foreignKey: "challengeId",
      });
      this.belongsToMany(models.Label, {
        through: "LabelChallenge",
        foreignKey: "challengeId",
      });
    }
  }
  Challenge.init(
    {
      name: DataTypes.STRING,
      boilerPlate: DataTypes.STRING,
      description: DataTypes.STRING,
      type: DataTypes.STRING,
      repositoryName: DataTypes.STRING,
      authorId: DataTypes.STRING,
      state: DataTypes.ENUM("pending", "denied", "approved"),
    },
    {
      sequelize,
      modelName: "Challenge",
      tableName: "challenges",
    }
  );
  return Challenge;
};
