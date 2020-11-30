const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static async getRatingAVG() {
      const reviewsAvgByChallenge = await this.findAll({
        group: ['challengeId'],
        attributes: ['challengeId', 'name', [sequelize.fn('AVG', sequelize.col('rating')), 'ratingAVG']],
      });

      return reviewsAvgByChallenge;
    }

    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.Challenge, {
        foreignKey: 'challengeId',
      });
    }
  }
  Review.init({
    userId: DataTypes.INTEGER,
    challengeId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews',
  });
  return Review;
};
