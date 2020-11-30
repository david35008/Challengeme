const request = require('supertest');
const app = require('../../../app');
const { User, UserTeam, Team } = require('../../../models');
const { generateToken } = require('../../Functions');
const { usersMock, teamsMock, usersTeamsMock } = require('../../mocks');

describe('Testing teams routes', () => {
  beforeEach(async () => {
    await User.destroy({ truncate: true, force: true });
    await UserTeam.destroy({ truncate: true, force: true });
    await Team.destroy({ truncate: true, force: true });
  });

  test('Can admin get all teams information', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);

    const allTeamInformation = await request(app)
      .get('/api/v1/teams/all-teams')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(allTeamInformation.status).toBe(200);
    expect(allTeamInformation.body.length).toBe(teamsMock.length);

    const unauthorized = await request(app)
      .get('/api/v1/teams/all-teams')
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });

  test('Can admin get one team information', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);

    const oneTeamInformation = await request(app)
      .get(`/api/v1/teams/single-team/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(oneTeamInformation.status).toBe(200);
    expect(oneTeamInformation.body.length).toBe(1);

    const unauthorized = await request(app)
      .get(`/api/v1/teams/single-team/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });

  test('Can admin create new team', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);

    const newTeamCreation = await request(app)
      .post('/api/v1/teams/create-team')
      .send({ name: 'test' })
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(newTeamCreation.status).toBe(201);

    const allTeamInformation = await request(app)
      .get('/api/v1/teams/all-teams')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(allTeamInformation.status).toBe(200);
    expect(allTeamInformation.body.length).toBe(teamsMock.length + 1);

    const unauthorized = await request(app)
      .post('/api/v1/teams/create-team')
      .send({ name: 'test' })
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });

  test('Can admin change user permission on team', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);

    const studentUnauthorized = await request(app)
      .get(`/api/v1/teams/teacher-area/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(studentUnauthorized.status).toBe(401);

    const changeUserPermission = await request(app)
      .patch(`/api/v1/teams/permission/${teamsMock[0].id}`)
      .send({ userId: usersMock[1].id, permission: 'teacher' })
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(changeUserPermission.status).toBe(200);

    const studentBecomeTeacher = await request(app)
      .get(`/api/v1/teams/teacher-area/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(studentBecomeTeacher.status).toBe(200);

    const unauthorized = await request(app)
      .patch(`/api/v1/teams/permission/${teamsMock[0].id}`)
      .send({ userId: usersMock[1].id, permission: 'teacher' })
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });

  test('Can admin delete team', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);

    const newTeamCreation = await request(app)
      .delete(`/api/v1/teams/remove-team/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(newTeamCreation.status).toBe(204);

    const allTeamInformation = await request(app)
      .get('/api/v1/teams/all-teams')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(allTeamInformation.status).toBe(200);
    expect(allTeamInformation.body.length).toBe(teamsMock.length - 1);

    const unauthorized = await request(app)
      .delete(`/api/v1/teams/remove-team/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });
});
