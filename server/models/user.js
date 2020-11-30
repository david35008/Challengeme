const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Submission, {
        foreignKey: "userId",
      });
      this.belongsToMany(models.Team, {
        through: "UserTeam",
        foreignKey: "userId",
      });
      this.hasMany(models.Review, {
        foreignKey: "challengeId",
      });
      this.hasMany(models.RefreshToken, {
        foreignKey: "userName",
      });
      this.hasMany(models.Challenge, {
        foreignKey: "authorId",
        as: "Author",
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      country: DataTypes.STRING,
      city: DataTypes.STRING,
      phoneNumber: DataTypes.INTEGER,
      githubAccount: DataTypes.STRING,
      reasonOfRegistration: DataTypes.STRING,
      securityQuestion: DataTypes.STRING,
      securityAnswer: DataTypes.STRING,
      permission: DataTypes.ENUM("admin", "user"),
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
