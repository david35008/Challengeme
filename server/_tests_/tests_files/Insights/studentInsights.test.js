const request = require('supertest');
const app = require('../../../app');
const {
  User, UserTeam, Team, Submission,
} = require('../../../models');
const { generateToken } = require('../../Functions');
const {
  usersMock, teamsMock, usersTeamsMock, submissionsMock,
} = require('../../mocks');

describe('Testing student insights routes', () => {
  beforeEach(async () => {
    await User.destroy({ truncate: true, force: true });
    await UserTeam.destroy({ truncate: true, force: true });
    await Team.destroy({ truncate: true, force: true });
    await Submission.destroy({ truncate: true, force: true });
  });

  test('Student can get insights about his team', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);
    await Submission.bulkCreate(submissionsMock);

    const insightsInformation = await request(app)
      .get(`/api/v1/insights/student/top-user/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(insightsInformation.status).toBe(200);
    expect(insightsInformation.body.length <= 5).toBe(true);

    const unauthorized = await request(app)
      .get(`/api/v1/insights/student/top-user/${teamsMock[1].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotInTeam = await request(app)
      .get(`/api/v1/insights/student/top-user/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotInTeam.status).toBe(200);

    done();
  });
});
