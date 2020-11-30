const request = require('supertest');
const app = require('../../../app');
const { User } = require('../../../models');
const { generateToken } = require('../../Functions');
const { usersMock } = require('../../mocks');

describe('testing types endpoints', () => {
  beforeEach(async () => {
    await User.destroy({ truncate: true, force: true });
  });

  test('Can get all github types', async (done) => {
    await User.bulkCreate(usersMock);
    const response = await request(app)
      .get('/api/v1/types')
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);
    expect(response.body.length).toBe(6);
    expect(response.status).toBe(200);
    done();
  });
});
