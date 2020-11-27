const insightTeacherRouter = require('express').Router();
const { Op } = require('sequelize');
const sequelize = require('sequelize');
const { checkTeacherPermission, checkTeamPermission } = require('../../../middleware/checkTeamPermission');
const { Submission, Challenge, User, Team, Assignment } = require('../../../models');
const { getTeamUsersIds } = require('./getTeamUsers');


// async function getTeamUsersIds(teamId) {

//     // get team users
//     const currentTeamUsers = await Team.findOne({
//         where: {
//             id: teamId,
//         },
//         attributes: ['name'],
//         include: [
//             {
//                 model: User,
//                 attributes: ['id'],
//                 through: {
//                     where: {
//                         permission: 'student'
//                     },
//                     attributes: [],
//                 },
//             },
//         ],
//     });

//     // returns array with users ids
//     const usersId = currentTeamUsers.Users.map((value) => value.id);

//     return usersId;
// }

const filterLastSubmissionPerChallenge = (submissionsOrderedByDate) => {
    const filteredAlready = [];
    let success = 0;
    let fail = 0;
    submissionsOrderedByDate.forEach((submission) => {
        if (filteredAlready.some(filteredSubmission =>
            filteredSubmission.userId === submission.userId &&
            filteredSubmission.challengeId === submission.challengeId)) {
        } else {
            filteredAlready.push({ userId: submission.userId, challengeId: submission.challengeId });
            if (submission.state === 'SUCCESS') {
                success++
            } else {
                fail++
            }
        }
    })
    return { success, fail }
}

// returns the teams submissions status(total amount, success, fail, not submitted)
insightTeacherRouter.get('/team-submissions/:teamId', checkTeamPermission, checkTeacherPermission, async (req, res) => {
    try {
        const { teamId } = req.params;
        const { challenge } = req.query;
        let idForQuery;
        let totalSubmissionsShouldBe = 1;
        if (challenge === 'assignments') {
            const challengesId = await Assignment.findAll({
                where: {
                    teamId
                },
            })
            totalSubmissionsShouldBe = challengesId.length;
            idForQuery = challengesId.map(challenge => challenge.challengeId)
        } else if (!isNaN(challenge)) {
            idForQuery = Number(challenge);
        } else {
            return res.status(400).json({ message: 'Cannot process request' });
        }

        const teamUsersId = await getTeamUsersIds(teamId);

        // returns submissions count for each state
        const totalSubmissionsOrderedByDate = await Submission.findAll({
            where: {
                userId: teamUsersId,
                challengeId: idForQuery
            },
            order: [['createdAt', 'DESC']]
        });

        const filteredSubmissions = filterLastSubmissionPerChallenge(totalSubmissionsOrderedByDate)
        const notYetSubmitted = (teamUsersId.length * totalSubmissionsShouldBe) - (filteredSubmissions.success + filteredSubmissions.fail);
        filteredSubmissions.notYet = notYetSubmitted ? notYetSubmitted : 0;

        res.json(filteredSubmissions);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Cannot process request' });
    }
});

// returns the top challenges, with the most successful submissions in the team
insightTeacherRouter.get('/success-challenge/:teamId', checkTeamPermission, checkTeacherPermission, async (req, res) => {
    try {
        const { teamId } = req.params
        const teamUsersIds = await getTeamUsersIds(teamId);

        // returns the count of all the successes per challenge for the team
        const successfulTeamChallenges = await Submission.findAll({
            group: ['challengeId'],
            attributes: [
                [sequelize.fn('COUNT', 'challengeId'), 'challengeSuccesses'],
                'challengeId',
            ],
            where: {
                state: 'SUCCESS',
                userId: teamUsersIds,
            },
            include: [
                {
                    model: Challenge,
                    attributes: ['name'],
                },
            ],
            order: [[sequelize.fn('COUNT', 'challengeId'), 'DESC']],
        });

        res.json(successfulTeamChallenges.slice(0, 5));
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Cannot process request' });
    }
});

// returns last week team submissions count
insightTeacherRouter.get('/last-week-submissions/:teamId', checkTeamPermission, checkTeacherPermission, async (req, res) => {
    try {
        const { teamId } = req.params
        const teamUsersIds = await getTeamUsersIds(teamId);

        // return the teams successful submissions from the last week by day

        const sevenDays = 7 * 24 * 60 * 60 * 1000;

        const lastWeekTeamSubmissions = await Submission.findAll({
            raw: true,
            group: [sequelize.fn('DAY', sequelize.col('Submission.created_at'))],
            attributes: [
                [sequelize.fn('COUNT', 'id'), 'dateSubmissions'],
                'createdAt',
            ],
            where: {
                created_at: {
                    [Op.gte]: new Date(Date.now() - sevenDays),
                },
                userId: teamUsersIds,
            },
            order: [
                [sequelize.fn('DAY', sequelize.col('Submission.created_at')), 'desc'],
            ],
        });
        res.json(lastWeekTeamSubmissions);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Cannot process request' });
    }
});

// returns all the team submissions per challenge
insightTeacherRouter.get('/challenges-submissions/:teamId', checkTeamPermission, checkTeacherPermission, async (req, res) => {
    try {
        const { teamId } = req.params
        const usersId = await getTeamUsersIds(teamId)
        const topChallenges = await Submission.findAll({
            attributes: {
                include: [
                    [sequelize.fn('COUNT', sequelize.col('challenge_id')), 'countSub'],
                ],
            },
            include: {
                model: Challenge,
                attributes: ['id', 'name'],
            },
            group: ['challenge_id'],
            order: [[sequelize.fn('COUNT', sequelize.col('challenge_id')), 'DESC']],
        });

        const users = await Challenge.findAll({
            include: {
                model: Submission,
                attributes: ['id', 'userId', 'createdAt', 'state', 'solutionRepository'],
                include: {
                    model: User,
                    where: {
                        id: usersId
                    },
                    attributes: ['userName'],
                },
            },
        });

        res.json([topChallenges, users]);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Cannot process request' });
    }
});

// returns all the team submissions per user
insightTeacherRouter.get('/users-submissions/:teamId', checkTeamPermission, checkTeacherPermission, async (req, res) => {
    try {
        const { teamId } = req.params
        const usersId = await getTeamUsersIds(teamId)
        const topUsers = await User.findAll({
            attributes: ['userName', 'phoneNumber', 'firstName', 'lastName', 'email'],
            where: {
                id: usersId
            },
            include: {
                model: Submission,
                include: { model: Challenge },
            },
        });
        res.json(topUsers);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Cannot process request' });
    }
});

// returns all the users in the team with ordered submissions by date
insightTeacherRouter.get('/top-user/:teamId', checkTeamPermission, checkTeacherPermission, async (req, res) => {
    try {
        const { teamId } = req.params
        const teamUsersIds = await getTeamUsersIds(teamId);

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
                        state: ['SUCCESS', 'FAIL']
                    }
                },
            ],
            order: [[Submission, 'createdAt', 'DESC']]
        });
        res.json(teamUsersTopSuccess);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Cannot process request' });
    }
});

module.exports = insightTeacherRouter;
