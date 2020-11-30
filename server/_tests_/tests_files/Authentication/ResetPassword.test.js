const request = require('supertest');
const bcrypt = require('bcryptjs');
const server = require('../../../app');
const { User } = require('../../../models');
const { usersMock, usersLoginMock } = require('../../mocks');

const originalAnswer = usersMock[2].securityAnswer;

describe('Reset Password', () => {
  beforeAll(async () => {
    await User.destroy({ truncate: true, force: true });
    usersMock[2].password = await bcrypt.hashSync(usersMock[2].password, 10);
    usersMock[2].securityAnswer = await bcrypt.hashSync(usersMock[2].securityAnswer, 10);
    await User.create(usersMock[2]);
  });
  afterAll(async () => {
    await server.close();
  });

  test('User Can Reset Password', async (done) => {
    const questionResponse = await request(server)
      .post('/api/v1/auth/get-question')
      .send({ userName: usersMock[2].userName });
    expect(questionResponse.status).toBe(200);
    expect(questionResponse.body.securityQuestion).toBe(usersMock[2].securityQuestion);

    const answerRequest = {
      securityAnswer: originalAnswer,
      userName: usersMock[2].userName,
    };

    const answerResponse = await request(server)
      .post('/api/v1/auth/validate-answer')
      .send(answerRequest);
    expect(answerResponse.status).toBe(200);
    expect(answerResponse.body.resetToken.length > 0);

    const newPasswordRequest = {
      resetToken: answerResponse.body.resetToken,
      password: '87654321',
    };

    const newPasswordResponse = await request(server)
      .patch('/api/v1/auth/password-update')
      .send(newPasswordRequest);
    expect(newPasswordResponse.status).toBe(200);

    const loginAfterChangedPasswordRequest = {
      userName: usersMock[2].userName,
      password: '87654321',
      rememberMe: true,
    };

    const loginAfterChangedPasswordRes = await request(server)
      .post('/api/v1/auth/login')
      .send(loginAfterChangedPasswordRequest);
    expect(loginAfterChangedPasswordRes.status).toBe(200);

    const oldPasswordLoginResponse = await request(server)
      .post('/api/v1/auth/login')
      .send(usersLoginMock[2]);
    expect(oldPasswordLoginResponse.status).toBe(403);

    done();
  });
});
