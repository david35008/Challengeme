require('dotenv').config();
const request = require('supertest');
const app = require('../../../app');
const { generateToken } = require('../../Functions');
const { handleGithubTokens } = require('../../../helpers');
const { User, GitToken } = require('../../../models');
const { githubTokensMock, githubHeadersMock, usersMock } = require('../../mocks');

describe('testing challenges endpoints', () => {
  beforeEach(async () => {
    await GitToken.destroy({ truncate: true, force: true });
    await User.destroy({ truncate: true, force: true });
  });

  test('Can get all github token', async (done) => {
    await User.bulkCreate(usersMock);
    await GitToken.bulkCreate(githubTokensMock);

    process.env.GITHUB_ACCESS_TOKEN = githubTokensMock[2].token;

    const getAllToken = await request(app)
      .get('/api/v1/git')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(getAllToken.status).toBe(200);
    expect(getAllToken.body.length).toBe(githubTokensMock.length);
    expect(getAllToken.body[2].active).toBe(true);

    process.env.GITHUB_ACCESS_TOKEN = githubTokensMock[0].token;

    const getAllToken2 = await request(app)
      .get('/api/v1/git')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(getAllToken2.status).toBe(200);
    expect(getAllToken2.body.length).toBe(githubTokensMock.length);
    expect(getAllToken2.body[0].active).toBe(true);

    const unauthorized = await request(app)
      .get('/api/v1/git')
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });

  test('Can add new github token', async (done) => {
    await User.bulkCreate(usersMock);

    const postNewToken = await request(app)
      .post('/api/v1/git')
      .send(githubTokensMock[0])
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(postNewToken.status).toBe(201);

    const allTokens = await request(app)
      .get('/api/v1/git')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(allTokens.status).toBe(200);
    expect(allTokens.body.length).toBe(1);

    const unauthorized = await request(app)
      .post('/api/v1/git')
      .send(githubTokensMock[1])
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });

  test('Can change token status', async (done) => {
    await User.bulkCreate(usersMock);
    await GitToken.bulkCreate(githubTokensMock);

    process.env.GITHUB_ACCESS_TOKEN = githubTokensMock[0];

    const changedToken = await request(app)
      .patch('/api/v1/git')
      .send({ status: 'blocked', token: githubTokensMock[0].token })
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(changedToken.status).toBe(200);
    expect(process.env.GITHUB_ACCESS_TOKEN).toBe(githubTokensMock[1].token);

    const allTokens = await request(app)
      .get('/api/v1/git')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(allTokens.status).toBe(200);
    expect(allTokens.body.filter((token) => token.token === githubTokensMock[0].token)[0].status).toBe('blocked');

    const changedToken1 = await request(app)
      .patch('/api/v1/git')
      .send({ status: 'available', token: githubTokensMock[0].token })
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(changedToken1.status).toBe(200);

    const allTokens1 = await request(app)
      .get('/api/v1/git')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(allTokens1.status).toBe(200);
    expect(allTokens1.body.filter((token) => token.token === githubTokensMock[0].token)[0].status).toBe('available');

    const unauthorized = await request(app)
      .patch('/api/v1/git')
      .send({ status: 'blocked', token: githubTokensMock[0] })
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });

  test('Can delete token', async (done) => {
    await User.bulkCreate(usersMock);
    await GitToken.bulkCreate(githubTokensMock);

    const { body: getAllToken } = await request(app)
      .get('/api/v1/git')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(getAllToken.length).toBe(3);

    const deleteNewToken = await request(app)
      .delete(`/api/v1/git/${githubTokensMock[2].token}`)
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(deleteNewToken.status).toBe(204);

    const { body: getAllToken1 } = await request(app)
      .get('/api/v1/git')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(getAllToken1.length).toBe(2);

    const unauthorized = await request(app)
      .delete('/api/v1/git')
      .send(githubTokensMock[1])
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });

  test('If token replace when reach action limit', async (done) => {
    await User.bulkCreate(usersMock);
    await GitToken.bulkCreate(githubTokensMock);

    process.env.GITHUB_ACCESS_TOKEN = githubTokensMock[0].token;
    await handleGithubTokens(githubHeadersMock[0]);

    const getAllToken = await request(app)
      .get('/api/v1/git')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(getAllToken.status).toBe(200);
    expect(getAllToken.body[0].status).toBe('available');
    expect(process.env.GITHUB_ACCESS_TOKEN).toBe(githubTokensMock[0].token);

    await handleGithubTokens(githubHeadersMock[1]);

    const getAllToken1 = await request(app)
      .get('/api/v1/git')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(getAllToken1.status).toBe(200);
    expect(getAllToken1.body[0].status).toBe('blocked');
    expect(process.env.GITHUB_ACCESS_TOKEN).toBe(githubTokensMock[1].token);

    await timeout(3500);

    await handleGithubTokens(githubHeadersMock[2]);

    const getAllToken2 = await request(app)
      .get('/api/v1/git')
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(process.env.GITHUB_ACCESS_TOKEN).toBe(githubTokensMock[0].token);
    expect(getAllToken2.body[0].status).toBe('available');
    expect(getAllToken2.body[1].status).toBe('blocked');
    done();
  }, 10000);
});

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
