const insightAdminRouter = require('express').Router();
const moment = require('moment');
const { Op } = require('sequelize');
const sequelize = require('sequelize');
const { Filters } = require('../../../helpers');
const {
  Submission, Challenge, Review, User, Team,
} = require('../../../models');

//= ==================Not in use=========================================//

// returns the 5 challenges with most submissions
insightAdminRouter.get('/top-challenges', async (req, res) => {
  try {
    const topChallenges = await Submission.findAll({
      attributes: {
        include: [
          [sequelize.fn('COUNT', sequelize.col('challenge_id')), 'countSub'],
        ],
      },
      include: {
        model: Challenge,
        attributes: ['name'],
      },
      group: ['challenge_id'],
      order: [[sequelize.fn('COUNT', sequelize.col('challenge_id')), 'DESC']],
      limit: 5,
    });

    res.json(topChallenges);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// returns the count of challenges from same type('type name' + 'count')
insightAdminRouter.get('/challenges-type', async (req, res) => {
  try {
    const challengesByType = await Challenge.findAll({
      attributes: [
        'type',
        [sequelize.fn('COUNT', sequelize.col('type')), 'countType'],
      ],
      group: ['type'],
      order: [[sequelize.fn('COUNT', sequelize.col('type')), 'DESC']],
      limit: 5,
    });
    res.json(challengesByType);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// returns top 5 challenges ordered by rating average (from reviews)
insightAdminRouter.get('/challenges-by-reviews', async (req, res) => {
  try {
    const challengesByRating = await Review.findAll({
      attributes: [[sequelize.fn('AVG', sequelize.col('rating')), 'ratingAVG']],
      include: {
        model: Challenge,
      },
      group: ['challenge_id'],
      order: [[sequelize.fn('AVG', sequelize.col('rating')), 'DESC']],
      limit: 5,
    });

    // returns the average rating as number
    const challengesTopRating = challengesByRating.map((element) => {
      element.dataValues.ratingAVG = Number(element.dataValues.ratingAVG);
      return element;
    });

    res.json(challengesTopRating);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// returns the 5 teams with the most successful submissions
insightAdminRouter.get('/top', async (req, res) => {
  try {
    const topTeams = await Team.findAll({
      group: ['id'],
      attributes: ['id', 'name'],
      include: [
        {
          model: User,
          attributes: ['userName'],
          through: {
            attributes: [],
          },
          include: {
            model: Submission,
            attributes: [
              [
                sequelize.fn('COUNT', sequelize.col('challenge_id')),
                'teamSuccessSubmissions',
              ],
            ],
            where: {
              state: 'success',
            },
          },
        },
      ],
      order: [[sequelize.fn('COUNT', sequelize.col('challenge_id')), 'DESC']],
    });

    const topFiveTeams = topTeams.slice(0, 5);

    res.json(topFiveTeams);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

//= ======================================================================//

// returns the submissions status(total amount, success, fail, not submitted)
insightAdminRouter.get('/all-submissions/', async (req, res) => {
  try {
    const { challenge } = req.query;
    let idForQuery;
    let totalSubmissionsShouldBe = 1;
    if (challenge === 'all') {
      const challengesId = await Challenge.findAll({
        where: {
          state: 'approved',
        },
      });
      totalSubmissionsShouldBe = challengesId.length;
      idForQuery = challengesId.map((challenge) => challenge.id);
    } else if (!isNaN(challenge)) {
      idForQuery = Number(challenge);
    } else {
      return res.status(400).json({ message: 'Cannot process request' });
    }

    const users = await User.findAll();

    // returns submissions count for each state
    const totalSubmissionsOrderedByDate = await Submission.findAll({
      where: {
        challengeId: idForQuery,
      },
      order: [['createdAt', 'DESC']],
    });

    const filteredSubmissions = Filters.filterLastSubmissionPerChallenge(totalSubmissionsOrderedByDate);
    const notYetSubmitted = (users.length * totalSubmissionsShouldBe) - (filteredSubmissions.success + filteredSubmissions.fail);
    filteredSubmissions.notYet = notYetSubmitted || 0;

    res.json(filteredSubmissions);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// returns the top challenges, with the most successful submissions
insightAdminRouter.get('/success-challenge', async (req, res) => {
  try {
    const challengesWithSuccessSubmissions = await Challenge.findAll({
      attributes: ['name'],
      include: [
        {
          model: Submission,
          attributes: ['userId', 'state'],
          where: {
            state: 'SUCCESS',
          },
        },
      ],
      order: [[Submission, 'createdAt', 'DESC']],
    });

    const onlyLast = [];
    challengesWithSuccessSubmissions.forEach((challenge) => {
      onlyLast.unshift({
        challengeSuccesses: Filters.filterLastSubmissionPerChallenge(challenge.Submissions).success,
        name: challenge.name,
        challengeId: challenge.id,
      });
    });

    res.json(onlyLast.sort((a, b) => b.challengeSuccesses - a.challengeSuccesses).slice(0, 5));
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// returns last week submissions count
insightAdminRouter.get('/last-week-submissions', async (req, res) => {
  try {
    const OneWeek = 7 * 24 * 60 * 60 * 1000;
    const lastWeekAllUsersSubmissions = await Submission.findAll({
      raw: true,
      group: [sequelize.fn('DAY', sequelize.col('Submission.created_at'))],
      attributes: [
        [sequelize.fn('COUNT', 'id'), 'dateSubmissions'],
        'createdAt',
      ],
      where: {
        created_at: {
          [Op.gte]: new Date(Date.now() - OneWeek),
        },
      },
      order: [
        [sequelize.fn('DAY', sequelize.col('Submission.created_at')), 'desc'],
      ],
    });

    const formattedSubmissions = lastWeekAllUsersSubmissions.map((submission) => {
      submission.createdAt = moment(submission.createdAt).fromNow();
      submission.createdAt = submission.createdAt.includes('hour') ? 'today' : submission.createdAt.includes('minutes') ? 'today' : submission.createdAt.includes('seconds') ? 'today' : submission.createdAt;
      return submission;
    });

    res.json(formattedSubmissions);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// returns all the submissions per challenge
insightAdminRouter.get('/challenges-submissions', async (req, res) => {
  try {
    const { onlyLast } = req.query;
    const challenges = await Challenge.findAll({
      include: {
        model: Submission,
        attributes: ['id', 'userId', 'createdAt', 'state', 'solutionRepository'],
        include: {
          model: User,
          attributes: ['userName'],
        },
      },
      order: [[Submission, 'createdAt', 'DESC']],
    });

    if (onlyLast === 'true') {
      challenges.forEach((challenge) => {
        const myFilteredArray = [];
        const myFilteredArrayUsers = [];
        challenge.Submissions.forEach((submission) => {
          if (myFilteredArrayUsers.includes(submission.dataValues.userId)) {
          } else {
            myFilteredArrayUsers.push(submission.dataValues.userId);
            myFilteredArray.push(submission);
          }
        });
        challenge.dataValues.Submissions = myFilteredArray;
      });
    }
    challenges.sort((a, b) => b.dataValues.Submissions.length - a.dataValues.Submissions.length);

    res.json(challenges);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// returns all the submissions per user
insightAdminRouter.get('/users-submissions', async (req, res) => {
  try {
    const { onlyLast } = req.query;
    const topUsers = await User.findAll({
      attributes: ['userName', 'phoneNumber', 'firstName', 'lastName', 'email'],
      include: {
        model: Submission,
        include: { model: Challenge },
      },
      order: [[Submission, 'createdAt', 'DESC']],
    });

    if (onlyLast === 'true') {
      topUsers.forEach((user) => {
        const myFilteredArray = [];
        const myFilteredArrayUsers = [];
        user.Submissions.forEach((submission) => {
          if (myFilteredArrayUsers.includes(submission.challengeId)) {
          } else {
            myFilteredArrayUsers.push(submission.challengeId);
            myFilteredArray.push(submission);
          }
        });
        user.dataValues.Submissions = myFilteredArray;
      });
    }

    res.json(topUsers);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// returns all the users with ordered submissions by date
insightAdminRouter.get('/top-user', async (req, res) => {
  try {
    const topUsers = await User.findAll({
      attributes: ['id', 'userName'],
      include: {
        model: Submission,
        where: {
          state: ['SUCCESS', 'FAIL'],
        },
      },
      order: [[Submission, 'createdAt', 'DESC']],
    });
    res.json(topUsers);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

module.exports = insightAdminRouter;
