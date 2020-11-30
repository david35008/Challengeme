const insightTeacherRouter = require('express').Router();
const moment = require('moment');
const { Op } = require('sequelize');
const sequelize = require('sequelize');
const { Filters } = require('../../../helpers');
const { checkTeacherPermission } = require('../../../middleware/checkTeamPermission');
const {
  Submission, Challenge, User, Team, Assignment,
} = require('../../../models');

// returns the last teams submissions status(success, fail, not submitted)
insightTeacherRouter.get('/team-submissions/:teamId', checkTeacherPermission, async (req, res) => {
  try {
    const { teamId } = req.params;
    const { challenge } = req.query;
    let idForQuery;
    let totalSubmissionsShouldBe = 1;
    if (challenge === 'assignments') {
      const challengesId = await Assignment.findAll({
        where: {
          teamId,
        },
      });
      totalSubmissionsShouldBe = challengesId.length;
      idForQuery = challengesId.map((challenge) => challenge.challengeId);
    } else if (!isNaN(challenge)) {
      idForQuery = Number(challenge);
    } else {
      return res.status(400).json({ message: 'Cannot process request' });
    }

    const teamUsersId = await Filters.getTeamUsersIds(teamId);

    // returns submissions count for each state
    const totalSubmissionsOrderedByDate = await Submission.findAll({
      where: {
        userId: teamUsersId,
        challengeId: idForQuery,
      },
      order: [['createdAt', 'DESC']],
    });

    const filteredSubmissions = Filters.filterLastSubmissionPerChallenge(totalSubmissionsOrderedByDate);
    const notYetSubmitted = (teamUsersId.length * totalSubmissionsShouldBe) - (filteredSubmissions.success + filteredSubmissions.fail);
    filteredSubmissions.notYet = notYetSubmitted || 0;

    res.json(filteredSubmissions);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// returns the top challenges, with the most successful submissions in the team
insightTeacherRouter.get('/success-challenge/:teamId', checkTeacherPermission, async (req, res) => {
  try {
    const { teamId } = req.params;
    const teamUsersIds = await Filters.getTeamUsersIds(teamId);

    // returns the count of all the successes per challenge for the team
    const successfulTeamChallenges = await Challenge.findAll({
      attributes: ['name'],
      include: [
        {
          model: Submission,
          attributes: ['userId', 'state'],
          where: {
            state: 'SUCCESS',
            userId: teamUsersIds,
          },
        },
      ],
      order: [[Submission, 'createdAt', 'DESC']],
    });

    const onlyLast = [];
    successfulTeamChallenges.forEach((challenge) => {
      onlyLast.push({
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

// returns last week team submissions count
insightTeacherRouter.get('/last-week-submissions/:teamId', checkTeacherPermission, async (req, res) => {
  try {
    const { teamId } = req.params;
    const teamUsersIds = await Filters.getTeamUsersIds(teamId);

    // return the teams successful submissions from the last week by day
    const OneWeek = 7 * 24 * 60 * 60 * 1000;

    const lastWeekTeamSubmissions = await Submission.findAll({
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
        userId: teamUsersIds,
      },
      order: [
        [sequelize.fn('DAY', sequelize.col('Submission.created_at')), 'desc'],
      ],
    });

    const formattedSubmissions = lastWeekTeamSubmissions.map((submission) => {
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

// returns all the team submissions per challenge
insightTeacherRouter.get('/challenges-submissions/:teamId', checkTeacherPermission, async (req, res) => {
  try {
    const { teamId } = req.params;
    const { onlyLast } = req.query;
    const usersIds = await Filters.getTeamUsersIds(teamId);

    const challenges = await Challenge.findAll({
      include: {
        model: Submission,
        where: {
          userId: usersIds,
        },
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

// returns all the team submissions per user
insightTeacherRouter.get('/users-submissions/:teamId', checkTeacherPermission, async (req, res) => {
  try {
    const { teamId } = req.params;
    const { onlyLast } = req.query;
    const usersId = await Filters.getTeamUsersIds(teamId);
    const topUsers = await User.findAll({
      attributes: ['userName', 'phoneNumber', 'firstName', 'lastName', 'email'],
      where: {
        id: usersId,
      },
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
          if (myFilteredArrayUsers.includes(submission.dataValues.challengeId)) {
          } else {
            myFilteredArrayUsers.push(submission.dataValues.challengeId);
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

// =================Not Tested Insights Yet========================//

// returns all the users in the team with ordered submissions by date
insightTeacherRouter.get('/top-user/:teamId', checkTeacherPermission, async (req, res) => {
  try {
    const { teamId } = req.params;
    const teamUsersIds = await Filters.getTeamUsersIds(teamId);

    // returns top 5 users and their successful submissions
    const teamUsersTopSuccess = await User.findAll({
      where: {
        id: teamUsersIds,
      },
      attributes: ['id', 'userName'],
      include: [
        {
          model: Submission,
          where: {
            state: ['SUCCESS', 'FAIL'],
          },
        },
      ],
      order: [[Submission, 'createdAt', 'DESC']],
    });

    const formattedMembers = teamUsersTopSuccess.map((member) => {
      const filteredSubmissions = [];
      let success = 0;
      let fail = 0;
      member.Submissions.forEach((submission) => {
        if (filteredSubmissions.includes(submission.challengeId)) {
        } else {
          filteredSubmissions.push(submission.challengeId);
          if (submission.state === 'SUCCESS') {
            success++;
          } else {
            fail++;
          }
        }
      });
      return ({
        success,
        fail,
        userName: member.userName,
      });
    });
    res.json(formattedMembers);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// =================Not Tested Insights Yet========================//

module.exports = insightTeacherRouter;
