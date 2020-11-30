const request = require('supertest');
const moment = require('moment');
const app = require('../../../app');
const {
  User, UserTeam, Team, Submission, Challenge, Assignment,
} = require('../../../models');
const {
  generateToken,
  countSuccessSubmissionsPerChallenge,
  filterUsersByTeam,
  filterSubmissionsByTeam,
  countGroupArray,
  filterLastSubmissionsForTeacherRoute,
} = require('../../Functions');
const {
  usersMock, teamsMock, usersTeamsMock, submissionsMock, challengesMock, assignmentsMock,
} = require('../../mocks');

describe('Testing teacher insights routes', () => {
  beforeEach(async () => {
    await User.destroy({ truncate: true, force: true });
    await UserTeam.destroy({ truncate: true, force: true });
    await Team.destroy({ truncate: true, force: true });
    await Submission.destroy({ truncate: true, force: true });
    await Challenge.destroy({ truncate: true, force: true });
    await Assignment.destroy({ truncate: true, force: true });
  });

  test('Teacher can get last submissions insights about his team', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);
    await Submission.bulkCreate(submissionsMock);
    await Challenge.bulkCreate(challengesMock);
    await Assignment.bulkCreate(assignmentsMock);

    const teamSubmissionsInsightsOneChallenge = await request(app)
      .get(`/api/v1/insights/teacher/team-submissions/${teamsMock[0].id}`)
      .query({ challenge: challengesMock[0].id })
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    const filteredSubmissions = filterLastSubmissionsForTeacherRoute(teamsMock[0], [challengesMock[0].id], submissionsMock, usersTeamsMock);

    expect(teamSubmissionsInsightsOneChallenge.status).toBe(200);
    expect(teamSubmissionsInsightsOneChallenge.body.hasOwnProperty('success')).toBe(true);
    expect(teamSubmissionsInsightsOneChallenge.body.hasOwnProperty('fail')).toBe(true);
    expect(teamSubmissionsInsightsOneChallenge.body.hasOwnProperty('notYet')).toBe(true);
    expect(teamSubmissionsInsightsOneChallenge.body.success).toBe(filteredSubmissions.success);
    expect(teamSubmissionsInsightsOneChallenge.body.fail).toBe(filteredSubmissions.fail);
    expect(teamSubmissionsInsightsOneChallenge.body.notYet).toBe(filteredSubmissions.notYet);

    const teamSubmissionsInsightsAssignments = await request(app)
      .get(`/api/v1/insights/teacher/team-submissions/${teamsMock[0].id}`)
      .query({ challenge: 'assignments' })
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    const teamAssignments = assignmentsMock.map((assignment) => {
      if (assignment.teamId === teamsMock[0].id) {
        return assignment.challengeId;
      }
    }).filter((a) => !(!a));

    const filteredAssignments = filterLastSubmissionsForTeacherRoute(teamsMock[0], teamAssignments, submissionsMock, usersTeamsMock);

    expect(teamSubmissionsInsightsAssignments.status).toBe(200);
    expect(teamSubmissionsInsightsAssignments.body.hasOwnProperty('success')).toBe(true);
    expect(teamSubmissionsInsightsAssignments.body.hasOwnProperty('fail')).toBe(true);
    expect(teamSubmissionsInsightsAssignments.body.hasOwnProperty('notYet')).toBe(true);
    expect(teamSubmissionsInsightsAssignments.body.success).toBe(filteredAssignments.success);
    expect(teamSubmissionsInsightsAssignments.body.fail).toBe(filteredAssignments.fail);
    expect(teamSubmissionsInsightsAssignments.body.notYet).toBe(filteredAssignments.notYet);

    const unauthorized = await request(app)
      .get(`/api/v1/insights/teacher/team-submissions/${teamsMock[0].id}`)
      .query({ challenge: challengesMock[0].id })
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotInTeam = await request(app)
      .get(`/api/v1/insights/teacher/team-submissions/${teamsMock[0].id}`)
      .query({ challenge: challengesMock[0].id })
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotInTeam.status).toBe(200);

    done();
  });

  test.skip('Teacher can get the most success submitted challenges of his team', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);
    await Submission.bulkCreate(submissionsMock);
    await Challenge.bulkCreate(challengesMock);
    await Assignment.bulkCreate(assignmentsMock);

    const teamSubmissionsInsightsOneChallenge = await request(app)
      .get(`/api/v1/insights/teacher/success-challenge/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(teamSubmissionsInsightsOneChallenge.status).toBe(200);
    expect(teamSubmissionsInsightsOneChallenge.body.length <= 5).toBe(true);
    teamSubmissionsInsightsOneChallenge.body.forEach((challenge) => {
      expect(challenge.hasOwnProperty('challengeSuccesses')).toBe(true);
      expect(challenge.hasOwnProperty('name')).toBe(true);
    });

    const teamUsersId = filterUsersByTeam(teamsMock[0], usersTeamsMock);
    const conditions = [
      {
        paramter: 'state',
        equal: 'SUCCESS',
      }];
    const teamSubmissions = filterSubmissionsByTeam(teamUsersId, conditions);
    // console.log(teamSubmissions);
    const filteredChallenges = countSuccessSubmissionsPerChallenge(teamSubmissions, challengesMock);
    const groupedChallenges = countGroupArray(filteredChallenges, 'challengeSuccesses', 'name');
    const filteredOrderedGrouped = groupedChallenges.sort((a, b) => b.challengeSuccesses - a.challengeSuccesses).splice(0, 5);
    filteredOrderedGrouped.forEach((element, index) => {
      expect(teamSubmissionsInsightsOneChallenge.body[index].name).toBe(element.name);
      expect(teamSubmissionsInsightsOneChallenge.body[index].challengeSuccesses).toBe(element.challengeSuccesses);
    });

    const unauthorized = await request(app)
      .get(`/api/v1/insights/teacher/success-challenge/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotInTeam = await request(app)
      .get(`/api/v1/insights/teacher/success-challenge/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotInTeam.status).toBe(200);

    done();
  });

  test.skip('Teacher can get the last week submissions of his team', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);
    await Submission.bulkCreate(submissionsMock);
    await Challenge.bulkCreate(challengesMock);
    await Assignment.bulkCreate(assignmentsMock);

    const teamLastWeekSubmissions = await request(app)
      .get(`/api/v1/insights/teacher/last-week-submissions/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(teamLastWeekSubmissions.status).toBe(200);
    const teamUsersId = filterUsersByTeam(teamsMock[0], usersTeamsMock);
    const teamSubmissions = filterSubmissionsByTeam(teamUsersId);
    const formattedSubmissions = teamSubmissions.map((submission) => {
      submission.createdAt = moment(submission.createdAt).fromNow();
      submission.createdAt = submission.createdAt.includes('hour') ? 'today' : submission.createdAt.includes('minutes') ? 'today' : submission.createdAt.includes('seconds') ? 'today' : submission.createdAt;
      return { dateSubmissions: 1, createdAt: submission.createdAt };
    });
    const groupSubmissions = countGroupArray(formattedSubmissions, 'dateSubmissions', 'createdAt');
    groupSubmissions.forEach((element, index) => {
      expect(teamLastWeekSubmissions.body[index].dateSubmissions).toBe(element.dateSubmissions);
      expect(teamLastWeekSubmissions.body[index].createdAt).toBe(element.createdAt);
    });

    const unauthorized = await request(app)
      .get(`/api/v1/insights/teacher/last-week-submissions/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotInTeam = await request(app)
      .get(`/api/v1/insights/teacher/last-week-submissions/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotInTeam.status).toBe(200);

    done();
  });

  test('Teacher can get the challenges submissions per challenges of his team', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);
    await Submission.bulkCreate(submissionsMock);
    await Challenge.bulkCreate(challengesMock);
    await Assignment.bulkCreate(assignmentsMock);

    const teamSubmissionsPerChallenges = await request(app)
      .get(`/api/v1/insights/teacher/challenges-submissions/${teamsMock[0].id}?onlyLast=false`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    const teamUsersId = filterUsersByTeam(teamsMock[0], usersTeamsMock);
    const filteredSubmissionsByTeam = submissionsMock.filter((submission) => teamUsersId.includes(submission.userId))
      .sort((a, b) => b.createdAt - a.createdAt);
    const challengesWithCount = challengesMock.map((challenge) => {
      challenge.Submissions = [];
      filteredSubmissionsByTeam.forEach((submission) => {
        if (challenge.id === submission.challengeId) {
          challenge.Submissions.push(submission);
        }
      });
      return challenge;
    }).filter((challenge) => challenge.count > 0).sort((a, b) => b.count - a.count);

    expect(teamSubmissionsPerChallenges.status).toBe(200);
    challengesWithCount.forEach((challenge, index) => {
      expect(teamSubmissionsPerChallenges.body[index].name).toBe(challenge.name);
      expect(teamSubmissionsPerChallenges.body[index].Submissions.length).toBe(challenge.Submissions.length);
      expect(teamSubmissionsPerChallenges.body[index].Submissions[0].id).toBe(challenge.Submissions[0].id);
    });

    const teamSubmissionsPerChallengesOnlyLast = await request(app)
      .get(`/api/v1/insights/teacher/challenges-submissions/${teamsMock[0].id}?onlyLast=true`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(teamSubmissionsPerChallengesOnlyLast.status).toBe(200);

    const challengesWithCountOnlyLast = challengesMock.map((challenge) => {
      challenge.Submissions = [];
      filteredSubmissionsByTeam.forEach((submission) => {
        if (challenge.id === submission.challengeId) {
          challenge.Submissions.push(submission);
        }
      });
      const myFilteredArray = [];
      const myFilteredArrayUsers = [];
      challenge.Submissions.forEach((submission) => {
        if (myFilteredArrayUsers.includes(submission.userId)) {
        } else {
          myFilteredArrayUsers.push(submission.userId);
          myFilteredArray.push(submission);
        }
      });
      challenge.Submissions = myFilteredArray;
      return challenge;
    }).filter((challenge) => challenge.count > 0).sort((a, b) => b.count - a.count);

    challengesWithCountOnlyLast.forEach((challenge, index) => {
      expect(teamSubmissionsPerChallengesOnlyLast.body[index].name).toBe(challenge.name);
      expect(teamSubmissionsPerChallengesOnlyLast.body[index].Submissions.length).toBe(challenge.Submissions.length);
      expect(teamSubmissionsPerChallengesOnlyLast.body[index].Submissions[0].id).toBe(challenge.Submissions[0].id);
    });

    const unauthorized = await request(app)
      .get(`/api/v1/insights/teacher/challenges-submissions/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotInTeam = await request(app)
      .get(`/api/v1/insights/teacher/challenges-submissions/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotInTeam.status).toBe(200);

    done();
  });

  test('Teacher can get the challenges submissions per users of his team', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);
    await Submission.bulkCreate(submissionsMock);
    await Challenge.bulkCreate(challengesMock);
    await Assignment.bulkCreate(assignmentsMock);

    const teamSubmissionsPerUsers = await request(app)
      .get(`/api/v1/insights/teacher/users-submissions/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(teamSubmissionsPerUsers.status).toBe(200);

    const teamUsersId = filterUsersByTeam(teamsMock[0], usersTeamsMock);
    const usersFromTeam = usersMock.filter((user) => teamUsersId.includes(user.id));
    const filteredSubmissionsByTeam = submissionsMock.filter((submission) => teamUsersId.includes(submission.userId)).sort((a, b) => b.createdAt - a.createdAt);
    const usersFromTeamWithSubmissions = usersFromTeam.map((user) => {
      user.Submissions = [];
      filteredSubmissionsByTeam.forEach((submission) => {
        if (submission.userId === user.id) {
          user.Submissions.push(submission);
        }
      });
      return user;
    });

    usersFromTeamWithSubmissions.forEach((user, index) => {
      expect(teamSubmissionsPerUsers.body[index].userName).toBe(user.userName);
      expect(teamSubmissionsPerUsers.body[index].Submissions.length).toBe(user.Submissions.length);
      expect(teamSubmissionsPerUsers.body[index].Submissions[0].id).toBe(user.Submissions[0].id);
    });

    const teamSubmissionsPerUsersOnlyLast = await request(app)
      .get(`/api/v1/insights/teacher/users-submissions/${teamsMock[0].id}?onlyLast=true`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    const usersFromTeamWithSubmissionsOnlyLast = usersFromTeam.map((user) => {
      user.Submissions = [];
      filteredSubmissionsByTeam.forEach((submission) => {
        if (submission.userId === user.id) {
          user.Submissions.push(submission);
        }
      });
      const myFilteredArray = [];
      const myFilteredArrayChallenges = [];
      user.Submissions.forEach((submission) => {
        if (myFilteredArrayChallenges.includes(submission.challengeId)) {
        } else {
          myFilteredArrayChallenges.push(submission.challengeId);
          myFilteredArray.push(submission);
        }
      });
      user.Submissions = myFilteredArray;
      return user;
    });

    expect(teamSubmissionsPerUsersOnlyLast.status).toBe(200);
    usersFromTeamWithSubmissionsOnlyLast.forEach((user, index) => {
      expect(teamSubmissionsPerUsersOnlyLast.body[index].userName).toBe(user.userName);
      expect(teamSubmissionsPerUsersOnlyLast.body[index].Submissions.length).toBe(user.Submissions.length);
      expect(teamSubmissionsPerUsersOnlyLast.body[index].Submissions[0].id).toBe(user.Submissions[0].id);
    });

    const unauthorized = await request(app)
      .get(`/api/v1/insights/teacher/users-submissions/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotInTeam = await request(app)
      .get(`/api/v1/insights/teacher/users-submissions/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotInTeam.status).toBe(200);

    done();
  });

  test('Teacher can get the top users per success challenges of his team', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);
    await Submission.bulkCreate(submissionsMock);
    await Challenge.bulkCreate(challengesMock);
    await Assignment.bulkCreate(assignmentsMock);

    const teamSubmissionsPerUsers = await request(app)
      .get(`/api/v1/insights/teacher/top-user/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    const teamUsersId = filterUsersByTeam(teamsMock[0], usersTeamsMock);
    const usersFromTeam = usersMock.filter((user) => teamUsersId.includes(user.id));
    const filteredSubmissionsByTeam = submissionsMock.filter((submission) => teamUsersId.includes(submission.userId)).sort((a, b) => b.createdAt - a.createdAt);
    const usersFromTeamWithSubmissions = usersFromTeam.map((user) => {
      user.Submissions = [];
      filteredSubmissionsByTeam.forEach((submission) => {
        if (submission.userId === user.id && (submission.state === 'FAIL' || submission.state === 'SUCCESS')) {
          user.Submissions.push(submission);
        }
      });
      return user;
    });

    const fromattedMembers = usersFromTeamWithSubmissions.map((member) => {
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

    expect(teamSubmissionsPerUsers.status).toBe(200);
    fromattedMembers.forEach((user, index) => {
      expect(teamSubmissionsPerUsers.body[index].userName).toBe(user.userName);
      expect(teamSubmissionsPerUsers.body[index].success).toBe(user.success);
      expect(teamSubmissionsPerUsers.body[index].fail).toBe(user.fail);
    });

    const unauthorized = await request(app)
      .get(`/api/v1/insights/teacher/top-user/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotInTeam = await request(app)
      .get(`/api/v1/insights/teacher/top-user/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotInTeam.status).toBe(200);

    done();
  });
});
