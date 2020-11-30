const request = require('supertest');
const moment = require('moment');
const app = require('../../../app');
const {
  User, UserTeam, Team, Submission, Challenge, Assignment,
} = require('../../../models');
const {
  generateToken,
  countSuccessAndFailSubmissionsPerChallenge,
  countSuccessSubmissionsPerChallenge,
  filterUsersByTeam,
  filterSubmissionsByTeam,
  countGroupArray,
} = require('../../Functions');
const {
  usersMock, teamsMock, usersTeamsMock, submissionsMock, challengesMock, assignmentsMock,
} = require('../../mocks');

function filterLastSubmissionsForAdminRoute(challengeIdArray, submissionsArray) {
  const totalSubmissionsShouldBe = usersMock.length * challengeIdArray.length;

  const totalSubmissionsOrderedByDate = submissionsArray.map((submission) => {
    if (challengeIdArray.includes(submission.challengeId)) {
      return submission;
    }
  }).filter((a) => !(!a)).sort((a, b) => b.createdAt - a.createdAt);

  const filteredSubmissions = countSuccessAndFailSubmissionsPerChallenge(totalSubmissionsOrderedByDate);
  const notYetSubmitted = totalSubmissionsShouldBe - (filteredSubmissions.success + filteredSubmissions.fail);
  filteredSubmissions.notYet = notYetSubmitted || 0;
  return filteredSubmissions;
}

describe('Testing admin insights routes', () => {
  beforeEach(async () => {
    await User.destroy({ truncate: true, force: true });
    await UserTeam.destroy({ truncate: true, force: true });
    await Team.destroy({ truncate: true, force: true });
    await Submission.destroy({ truncate: true, force: true });
    await Challenge.destroy({ truncate: true, force: true });
    await Assignment.destroy({ truncate: true, force: true });
  });

  test('Admin can get last submissions insights about all users', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);
    await Submission.bulkCreate(submissionsMock);
    await Challenge.bulkCreate(challengesMock);
    await Assignment.bulkCreate(assignmentsMock);

    const teamSubmissionsInsightsOneChallenge = await request(app)
      .get('/api/v1/insights/admin/all-submissions')
      .query({ challenge: challengesMock[0].id })
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    const filteredSubmissions = filterLastSubmissionsForAdminRoute([challengesMock[0].id], submissionsMock);

    expect(teamSubmissionsInsightsOneChallenge.status).toBe(200);
    expect(teamSubmissionsInsightsOneChallenge.body.hasOwnProperty('success')).toBe(true);
    expect(teamSubmissionsInsightsOneChallenge.body.hasOwnProperty('fail')).toBe(true);
    expect(teamSubmissionsInsightsOneChallenge.body.hasOwnProperty('notYet')).toBe(true);
    expect(teamSubmissionsInsightsOneChallenge.body.success).toBe(filteredSubmissions.success);
    expect(teamSubmissionsInsightsOneChallenge.body.fail).toBe(filteredSubmissions.fail);
    expect(teamSubmissionsInsightsOneChallenge.body.notYet).toBe(filteredSubmissions.notYet);

    const teamSubmissionsInsightsAssignments = await request(app)
      .get('/api/v1/insights/admin/all-submissions')
      .query({ challenge: 'all' })
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    const challengesId = challengesMock.map((challenge) => challenge.id);

    const filteredAssignments = filterLastSubmissionsForAdminRoute(challengesId, submissionsMock);

    expect(teamSubmissionsInsightsAssignments.status).toBe(200);
    expect(teamSubmissionsInsightsAssignments.body.hasOwnProperty('success')).toBe(true);
    expect(teamSubmissionsInsightsAssignments.body.hasOwnProperty('fail')).toBe(true);
    expect(teamSubmissionsInsightsAssignments.body.hasOwnProperty('notYet')).toBe(true);
    expect(teamSubmissionsInsightsAssignments.body.success).toBe(filteredAssignments.success);
    expect(teamSubmissionsInsightsAssignments.body.fail).toBe(filteredAssignments.fail);
    expect(teamSubmissionsInsightsAssignments.body.notYet).toBe(filteredAssignments.notYet);

    const unauthorized = await request(app)
      .get('/api/v1/insights/admin/all-submissions')
      .query({ challenge: challengesMock[0].id })
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });

  test('Admin can get the most success submitted challenges of all users', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);
    await Submission.bulkCreate(submissionsMock);
    await Challenge.bulkCreate(challengesMock);
    await Assignment.bulkCreate(assignmentsMock);

    const adminSubmissionsInsightsOneChallenge = await request(app)
      .get('/api/v1/insights/admin/success-challenge')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminSubmissionsInsightsOneChallenge.status).toBe(200);
    expect(adminSubmissionsInsightsOneChallenge.body.length <= 5).toBe(true);
    adminSubmissionsInsightsOneChallenge.body.forEach((challenge) => {
      expect(challenge.hasOwnProperty('challengeSuccesses')).toBe(true);
      expect(challenge.hasOwnProperty('name')).toBe(true);
    });

    const allUsersSubmissionsOrdered = submissionsMock
      .filter((submission) => submission.state === 'SUCCESS')
      .sort((a, b) => b.createdAt - a.createdAt);

    const filteredChallenges = countSuccessSubmissionsPerChallenge(allUsersSubmissionsOrdered, challengesMock)
      .sort((a, b) => b.challengeSuccesses - a.challengeSuccesses)
      .slice(0, 5);

    filteredChallenges.forEach((element, index) => {
      expect(adminSubmissionsInsightsOneChallenge.body[index].challengeSuccesses).toBe(element.challengeSuccesses);
    });

    const unauthorized = await request(app)
      .get('/api/v1/insights/admin/success-challenge')
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });

  test.skip('Admin can get the last week submissions of all users', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);
    await Submission.bulkCreate(submissionsMock);
    await Challenge.bulkCreate(challengesMock);
    await Assignment.bulkCreate(assignmentsMock);

    const teamLastWeekSubmissions = await request(app)
      .get('/api/v1/insights/admin/last-week-submissions')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    // console.log(teamLastWeekSubmissions.body);

    expect(teamLastWeekSubmissions.status).toBe(200);

    const allUsersSubmissionsOrdered = submissionsMock
      .sort((a, b) => b.createdAt - a.createdAt);

    const formattedSubmissions = allUsersSubmissionsOrdered.map((submission) => {
      submission.createdAt = moment(submission.createdAt).fromNow();
      submission.createdAt = submission.createdAt.includes('hour') ? 'today' : submission.createdAt.includes('minutes') ? 'today' : submission.createdAt.includes('seconds') ? 'today' : submission.createdAt;
      return { dateSubmissions: 1, createdAt: submission.createdAt };
    });
    const groupSubmissions = countGroupArray(formattedSubmissions, 'dateSubmissions', 'createdAt')
      .sort((a, b) => b.dateSubmissions - a.dateSubmissions);

    // console.log(groupSubmissions);
    teamLastWeekSubmissions.body.forEach((element, index) => {
      expect(groupSubmissions[index].dateSubmissions).toBe(element.dateSubmissions);
      expect(groupSubmissions[index].createdAt).toBe(element.createdAt);
    });

    const unauthorized = await request(app)
      .get('/api/v1/insights/admin/last-week-submissions')
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotInTeam = await request(app)
      .get('/api/v1/insights/admin/last-week-submissions')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotInTeam.status).toBe(200);

    done();
  });

  test.skip('Admin can get the challenges submissions per challenges of all users', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);
    await Submission.bulkCreate(submissionsMock);
    await Challenge.bulkCreate(challengesMock);
    await Assignment.bulkCreate(assignmentsMock);

    const teamSubmissionsPerChallenges = await request(app)
      .get('/api/v1/insights/admin/challenges-submissions?onlyLast=false')
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
      .get('/api/v1/insights/admin/challenges-submissions?onlyLast=true')
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
      .get('/api/v1/insights/admin/challenges-submissions')
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotInTeam = await request(app)
      .get('/api/v1/insights/admin/challenges-submissions')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotInTeam.status).toBe(200);

    done();
  });

  test.skip('Admin can get the challenges submissions per users of all users', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);
    await Submission.bulkCreate(submissionsMock);
    await Challenge.bulkCreate(challengesMock);
    await Assignment.bulkCreate(assignmentsMock);

    const teamSubmissionsPerUsers = await request(app)
      .get('/api/v1/insights/admin/users-submissions')
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
      .get('/api/v1/insights/admin/users-submissions?onlyLast=true')
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
      .get('/api/v1/insights/admin/users-submissions')
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotInTeam = await request(app)
      .get('/api/v1/insights/admin/users-submissions')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotInTeam.status).toBe(200);

    done();
  });

  test.skip('Admin can get the top users per success challenges of all users', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);
    await Submission.bulkCreate(submissionsMock);
    await Challenge.bulkCreate(challengesMock);
    await Assignment.bulkCreate(assignmentsMock);

    const teamSubmissionsPerUsers = await request(app)
      .get('/api/v1/insights/admin/top-user')
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
      .get('/api/v1/insights/admin/top-user')
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotInTeam = await request(app)
      .get('/api/v1/insights/admin/top-user')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotInTeam.status).toBe(200);

    done();
  });
});
