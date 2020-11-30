require('dotenv').config();
const request = require('supertest');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const server = require('../../../app');
const { generateToken } = require('../../Functions');
const { User, RefreshToken } = require('../../../models');
const { usersMock, usersLoginMock } = require('../../mocks');

describe('Register & Login Tests', () => {
  beforeAll(async () => {
    await User.destroy({ truncate: true, force: true });
    usersMock[0].password = await bcrypt.hashSync(usersMock[0].password, 10);
    usersMock[0].securityAnswer = await bcrypt.hashSync(usersMock[0].securityAnswer, 10);
    await User.create(usersMock[0]);
  });
  afterAll(async () => {
    // await User.destroy({ truncate: true, force: true });
    await server.close();
  });

  test('User Can Register if the userName Unique', async (done) => {
    const regToken = jwt.sign(usersMock[1], process.env.EMAIL_TOKEN_SECRET);

    const createUserResponse = await request(server)
      .post('/api/v1/auth/create-user')
      .send({ token: regToken });
    expect(createUserResponse.status).toBe(201);

    const allreadyExistUser = await request(server)
      .post('/api/v1/auth/create-user')
      .send({ token: regToken });
    expect(allreadyExistUser.status).toBe(409);

    const invalidRegisterResponse = await request(server)
      .post('/api/v1/auth/create-user')
      .send({ token: 'Invalid Token' });
    expect(invalidRegisterResponse.status).toBe(403);

    done();
  });

  test('User Can Login With Correct Details', async (done) => {
    const invalidLoginResponse = await request(server)
      .post('/api/v1/auth/login')
      .send({ userName: 'supposed', password: 'toFail123', rememberMe: true });
    expect(invalidLoginResponse.status).toBe(403);

    const loginResponse = await request(server)
      .post('/api/v1/auth/login')
      .send(usersLoginMock[0]);

    expect(loginResponse.status).toBe(200);
    expect(loginResponse.headers['set-cookie'][2].slice(0, 11)).toBe('accessToken');
    expect(loginResponse.headers['set-cookie'][3].slice(0, 12)).toBe('refreshToken');

    const refreshTokenInDB = loginResponse.headers['set-cookie'][3].split('=')[1].split(';')[0];
    const validRefreshTokenInDB = await RefreshToken.findOne({
      where: {
        token: refreshTokenInDB,
      },
    });
    expect(validRefreshTokenInDB.userName).toBe(usersLoginMock[0].userName);
    expect(loginResponse.body.userDetails.userName).toBe(
      usersLoginMock[0].userName,
    );

    done();
  });

  test('User get new access token', async (done) => {
    const loginResponse = await request(server)
      .post('/api/v1/auth/login')
      .send(usersLoginMock[0]);
    expect(loginResponse.status).toBe(200);

    const refreshToken = loginResponse.headers['set-cookie'][3].split('=')[1].split(';')[0];
    const accessToken = loginResponse.headers['set-cookie'][2].split('=')[1].split(';')[0];

    const validateToken = await request(server)
      .get('/api/v1/auth/validate-token')
      .set('authorization', `Bearer ${accessToken}`);
    expect(validateToken.status).toBe(200);

    const notValidateToken = await request(server)
      .get('/api/v1/auth/validate-token')
      .set('authorization', 'hkdfhaskjfhdsakjfhkdshfkds');
    expect(notValidateToken.status).toBe(408);

    const newAccessTokenRes = await request(server)
      .post('/api/v1/auth/token')
      .send({ token: refreshToken });
    expect(newAccessTokenRes.status).toBe(200);
    const newAccessToken = newAccessTokenRes.headers['set-cookie'][0].split('=')[1].split(';')[0];
    expect(newAccessToken.length > 0).toBe(true);
    done();
  });

  test('User exists', async (done) => {
    const userExist = await request(server)
      .post('/api/v1/auth/user-exist')
      .send({ userName: usersMock[1].userName });
    expect(userExist.status).toBe(409);

    const userNotExist = await request(server)
      .post('/api/v1/auth/user-exist')
      .send({ userName: 'Alibaba' });
    expect(userNotExist.status).toBe(200);

    done();
  });

  test('User is admin', async (done) => {
    const userNotAdmin = await request(server)
      .get('/api/v1/auth/validate-admin')
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);
    expect(userNotAdmin.status).toBe(401);

    usersMock[2].password = await bcrypt.hashSync(usersMock[2].password, 10);
    await User.create(usersMock[2]);

    const userIsAdmin = await request(server)
      .get('/api/v1/auth/validate-admin')
      .set('authorization', `bearer ${generateToken(usersLoginMock[3])}`);

    expect(userIsAdmin.status).toBe(200);
    expect(userIsAdmin.body.admin).toBe(true);

    done();
  });

  test('User Can Logout', async (done) => {
    const loginResponse = await request(server)
      .post('/api/v1/auth/login')
      .send(usersLoginMock[0]);
    expect(loginResponse.status).toBe(200);

    const refreshToken = loginResponse.headers['set-cookie'][3].split('=')[1].split(';')[0];

    const logOutResponse = await request(server)
      .post('/api/v1/auth/logout')
      .send({ token: refreshToken });
    expect(logOutResponse.status).toBe(200);

    const deleteToken = await RefreshToken.findOne({
      where: {
        token: refreshToken,
      },
    });

    expect(deleteToken).toBe(null);

    done();
  });
});
