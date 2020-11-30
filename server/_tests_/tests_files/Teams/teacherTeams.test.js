const request = require('supertest');
const { Op } = require('sequelize');
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

  test('Can teacher get info about his team', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);

    const teamInformation = await request(app)
      .get(`/api/v1/teams/teacher-area/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(teamInformation.status).toBe(200);

    const unauthorized = await request(app)
      .get(`/api/v1/teams/teacher-area/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotInTeam = await request(app)
      .get(`/api/v1/teams/teacher-area/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotInTeam.status).toBe(200);

    done();
  });

  test('Can teacher add user to team', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);

    const teamInformation = await request(app)
      .get(`/api/v1/teams/team-page/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(teamInformation.status).toBe(200);
    expect(teamInformation.body.Users.length).toBe(usersTeamsMock.filter((connection) => connection.teamId === teamsMock[0].id).length);

    const addUser = await request(app)
      .post(`/api/v1/teams/add-users/${teamsMock[0].id}`)
      .send({ newUsers: [{ value: 3 }] })
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(addUser.status).toBe(201);

    const teamInformationAfterAdded = await request(app)
      .get(`/api/v1/teams/team-page/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(teamInformationAfterAdded.status).toBe(200);
    expect(teamInformationAfterAdded.body.Users.length).toBe(usersTeamsMock.filter((connection) => connection.teamId === teamsMock[0].id).length + 1);

    const unauthorized = await request(app)
      .post(`/api/v1/teams/add-users/${teamsMock[0].id}`)
      .send({ newUsers: [{ value: 3 }] })
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotTeacherInTeam = await request(app)
      .post(`/api/v1/teams/add-users/${teamsMock[0].id}`)
      .send({ newUsers: [{ value: 4 }] })
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotTeacherInTeam.status).toBe(201);

    done();
  });

  test('Can teacher add user to team', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);

    const teamInformation = await request(app)
      .get(`/api/v1/teams/team-page/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(teamInformation.status).toBe(200);
    expect(teamInformation.body.Users.length).toBe(usersTeamsMock.filter((connection) => connection.teamId === teamsMock[0].id).length);

    const addUser = await request(app)
      .delete(`/api/v1/teams/remove-user/${teamsMock[0].id}`)
      .query({ userId: 2 })
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(addUser.status).toBe(204);

    const teamInformationAfterRemoved = await request(app)
      .get(`/api/v1/teams/team-page/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(teamInformationAfterRemoved.status).toBe(200);
    expect(teamInformationAfterRemoved.body.Users.length).toBe(usersTeamsMock.filter((connection) => connection.teamId === teamsMock[0].id).length - 1);

    const unauthorized = await request(app)
      .delete(`/api/v1/teams/remove-user/${teamsMock[0].id}`)
      .query({ userId: 1 })
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    const adminNotTeacherInTeam = await request(app)
      .delete(`/api/v1/teams/remove-user/${teamsMock[0].id}`)
      .query({ userId: 1 })
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(adminNotTeacherInTeam.status).toBe(204);

    done();
  });

  test('Teacher can get info about all users from his Team (deleted included)', async (done) => {
    await User.bulkCreate(usersMock);
    await UserTeam.bulkCreate(usersTeamsMock);
    await Team.bulkCreate(teamsMock);

    const userInformation = await request(app)
      .get(`/api/v1/users/teacher/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(userInformation.status).toBe(200);
    expect(userInformation.body.length).toBe(usersTeamsMock.filter((x) => x.teamId === teamsMock[0].id).length);

    await UserTeam.destroy({
      where: {
        [Op.and]: [
          { userId: usersMock[2].id },
          { teamId: teamsMock[0].id },
        ],
      },
    });

    const userInformationAfterDelete = await request(app)
      .get(`/api/v1/users/teacher/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(userInformationAfterDelete.status).toBe(200);
    expect(userInformationAfterDelete.body.length).toBe(usersTeamsMock.filter((x) => x.teamId === teamsMock[0].id).length);

    const unauthorized = await request(app)
      .get(`/api/v1/users/teacher/${teamsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });
});
