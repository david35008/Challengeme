require('dotenv').config();
const challengeRouter = require('express').Router();
const { Sequelize, Op } = require('sequelize');
const checkAdmin = require('../../middleware/checkAdmin');
const { newChallengeValidation } = require('../../helpers/validator');
const {
  Submission, User, Challenge, Label, Review,
} = require('../../models');

// get all challenges with reviews and labels
challengeRouter.get('/', async (req, res) => {
  try {
    const name = req.query.name || '';

    const allChallenges = await Challenge.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
        state: 'approved',
      },
      include: [
        {
          model: User,
          as: 'Author',
          attributes: ['userName'],
        },
        {
          model: Label,
          attributes: ['name', 'id'],
          through: {
            attributes: [],
          },
        },
      ],
    });

    const allChallengesId = allChallenges.map((challenge) => challenge.id);

    const challengeSubmittions = await Submission.findAll({
      where: {
        challengeId: allChallengesId,
      },
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('id')), 'submissionsCount'],
        'challengeId',
      ],
      group: ['challengeId'],
    });

    const reviewsAvg = await Review.findAll({
      where: {
        challengeId: allChallengesId,
      },
      attributes: [
        [Sequelize.fn('AVG', Sequelize.col('rating')), 'averageRaiting'],
        'challengeId',
      ],
      group: ['challengeId'],
    });

    const allChallengesWithReviews = allChallenges.map((challenge) => {
      reviewsAvg.forEach((review) => {
        if (review.dataValues.challengeId === challenge.dataValues.id) {
          challenge.dataValues.averageRaiting = review.dataValues.averageRaiting;
        }
      });

      if (!challenge.dataValues.averageRaiting) {
        challenge.dataValues.averageRaiting = null;
      }

      challengeSubmittions.forEach((countSubmissions) => {
        if (
          countSubmissions.dataValues.challengeId === challenge.dataValues.id
        ) {
          challenge.dataValues.submissionsCount = countSubmissions.dataValues.submissionsCount;
        }
      });

      if (!challenge.dataValues.submissionsCount) {
        challenge.dataValues.submissionsCount = 0;
      }
      return challenge;
    });

    res.json(allChallengesWithReviews);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: "can't get the challenges" });
  }
});

// get challenges that the user add to the system
challengeRouter.get('/user-challenges', async (req, res) => {
  try {
    const allChallenges = await Challenge.findAll({
      where: {
        authorId: req.user.userId,
      },
      include: [
        {
          model: User,
          as: 'Author',
          attributes: ['userName'],
        },
        {
          model: Label,
          attributes: ['name', 'id'],
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.json(allChallenges);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// get challenge by id with all information
challengeRouter.get('/info/:challengeId', async (req, res) => {
  try {
    const challenge = await Challenge.findOne({
      where: { id: req.params.challengeId, state: 'approved' },
      include: [
        {
          model: Label,
          attributes: ['name', 'id'],
          through: {
            attributes: [],
          },
        },
        {
          model: User,
          as: 'Author',
          attributes: ['email', 'userName'],
        },
      ],
    });

    const challengeSubmittions = await Submission.findAll({
      where: { challengeId: req.params.challengeId },
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('id')), 'submissionsCount'],
        'challengeId',
      ],
      group: ['challengeId'],
    });

    const averageRaiting = await Review.findAll({
      where: { challengeId: req.params.challengeId },
      attributes: [
        [Sequelize.fn('AVG', Sequelize.col('rating')), 'averageRating'],
        'challengeId',
      ],
      group: ['challengeId'],
    });

    challenge.dataValues.averageRaiting = averageRaiting[0]
      ? averageRaiting[0].dataValues.averageRating
      : null;
    challenge.dataValues.submissionsCount = challengeSubmittions[0]
      ? challengeSubmittions[0].dataValues.submissionsCount
      : 0;

    res.json(challenge);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// router Post - new challenge
challengeRouter.post('/', async (req, res) => {
  try {
    const { repositoryName: newRepo } = req.body;
    const repoExists = await Challenge.findOne({
      where: {
        repositoryName: newRepo,
      },
    });
    if (repoExists) {
      return res.status(409).json({ message: 'Repo is already in the system' });
    }
    const newChallengeObj = {
      name: req.body.name,
      description: req.body.description,
      type: req.body.type,
      repositoryName: req.body.repositoryName,
      boilerPlate: req.body.boilerPlate,
      authorId: req.user.userId,
    };
    const { error } = newChallengeValidation(newChallengeObj);
    if (error) {
      console.error(error.message);
      return res.status(400).json({ success: false, message: "Don't mess with me" });
    }
    const newChallenge = await Challenge.create(newChallengeObj);
    res.status(201).json(newChallenge);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

//= ============================= Admin Routes ======================================//

// get all challenges no matter the state
challengeRouter.get('/no-matter-the-state', checkAdmin, async (req, res) => {
  try {
    const allChallenges = await Challenge.findAll({
      include: [
        {
          model: User,
          as: 'Author',
          attributes: ['userName'],
        },
        {
          model: Label,
          attributes: ['name', 'id'],
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.json(allChallenges);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// update challenge state
challengeRouter.patch('/state-update/:challengeId', checkAdmin, async (req, res) => {
  try {
    const { challengeId } = req.params;
    const { state } = req.body;
    const updatedChallenge = await Challenge.update({
      state,
    },
    {
      where: {
        id: challengeId,
      },
    });
    if (updatedChallenge[0]) {
      res.json({ message: 'Success' });
    } else {
      console.error('Failed to Update State');
      res.status(400).json({ message: 'Failed to Update State' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

module.exports = challengeRouter;
