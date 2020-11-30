const request = require('supertest');
const app = require('../../../app');
const { User } = require('../../../models');
const { generateToken } = require('../../Functions');
const { usersMock } = require('../../mocks');

describe('Testing users routes', () => {
  beforeEach(async () => {
    await User.destroy({ truncate: true, force: true });
  });

  test('Can user get info about himself', async (done) => {
    await User.bulkCreate(usersMock);

    const userInformation = await request(app)
      .get('/api/v1/users/info')
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(userInformation.status).toBe(200);
    expect(userInformation.body.githubAccount).toBe(usersMock[0].githubAccount);
    done();
  });

  test('Can admin get info about all users', async (done) => {
    await User.bulkCreate(usersMock);

    const userInformation = await request(app)
      .get('/api/v1/users/admin')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(userInformation.status).toBe(200);
    expect(userInformation.body.length).toBe(usersMock.length);

    const unauthorized = await request(app)
      .get('/api/v1/users/admin')
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });

  test('Can admin change user permission', async (done) => {
    await User.bulkCreate(usersMock);

    const beforePermission = await request(app)
      .patch('/api/v1/users/permission')
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(beforePermission.status).toBe(401);

    const changePermission = await request(app)
      .patch('/api/v1/users/permission')
      .send({ permission: 'admin', userName: usersMock[0].userName })
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(changePermission.status).toBe(200);

    const allUsersWithPermission = await request(app)
      .get('/api/v1/users/admin')
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(allUsersWithPermission.status).toBe(200);
    expect(allUsersWithPermission.body.length).toBe(usersMock.length);

    done();
  });
});
