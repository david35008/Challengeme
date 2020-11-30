const request = require('supertest');
const app = require('../../../app');
const { Image } = require('../../../models');
const { generateToken } = require('../../Functions');
const { usersMock, imagesMock } = require('../../mocks');

describe('testing challenges endpoints', () => {
  beforeEach(async () => {
    await Image.destroy({ truncate: true, force: true });
  });

  test('Can get image by challenge id', async (done) => {
    await Image.bulkCreate(imagesMock);
    const imageResponse = await request(app)
      .get('/api/v1/image?id=2')
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(imageResponse.status).toBe(200);
    expect(imageResponse.body.challengeId).toBe(2);
    done();
  });

  test('Can post image to a challenge, sends an error if image already exists', async (done) => {
    const newImage = await request(app)
      .post('/api/v1/image')
      .send(imagesMock[1])
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(newImage.status).toBe(200);

    const imageResponse = await request(app)
      .get('/api/v1/image?id=2')
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);
    expect(imageResponse.status).toBe(200);
    expect(imageResponse.body.challengeId).toBe(2);

    const alreadyExistImage = await request(app)
      .post('/api/v1/image')
      .send(imagesMock[1])
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(alreadyExistImage.status).toBe(400);
    done();
  });
});
