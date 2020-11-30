const request = require('supertest');
const app = require('../../../app');
const { Challenge, Review, User } = require('../../../models');
const { generateToken } = require('../../Functions');
const { challengesMock, usersMock, reviewsMock } = require('../../mocks');

describe('testing challenges endpoints', () => {
  beforeEach(async () => {
    await Review.destroy({ truncate: true, force: true });
    await Challenge.destroy({ truncate: true, force: true });
    await User.destroy({ truncate: true, force: true });
  });

  test('Can get reviews by challenge', async (done) => {
    await Challenge.bulkCreate(challengesMock);
    await User.bulkCreate(usersMock);
    await Review.bulkCreate(reviewsMock);

    const reviewsByChallenge = await request(app)
      .get(`/api/v1/reviews/${challengesMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(reviewsByChallenge.status).toBe(200);
    expect(reviewsByChallenge.body.every((challenge) => challenge.challengeId === challengesMock[0].id)).toBe(true);

    done();
  });

  test('Can add new review to challenge', async (done) => {
    await Challenge.bulkCreate(challengesMock);
    await User.bulkCreate(usersMock);
    await Review.bulkCreate(reviewsMock);

    const newChallenge = await request(app)
      .post(`/api/v1/reviews/${challengesMock[0].id}`)
      .send(reviewsMock[0])
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(newChallenge.status).toBe(201);

    const reviewsByChallenge = await request(app)
      .get(`/api/v1/reviews/${challengesMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    const reviews = await Review.findAll({
      where: { challengeId: challengesMock[0].id },
    });

    expect(reviewsByChallenge.status).toBe(200);
    expect(reviewsByChallenge.body.every((challenge) => challenge.challengeId === challengesMock[0].id)).toBe(true);
    expect(reviewsByChallenge.body[reviewsByChallenge.body.length - 1].title).toBe(reviews[reviews.length - 1].title);

    done();
  });

  test('Can delete review as admin', async (done) => {
    await Challenge.bulkCreate(challengesMock);
    await User.bulkCreate(usersMock);
    await Review.bulkCreate(reviewsMock);

    const deletedReview = await request(app)
      .delete(`/api/v1/reviews/${reviewsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    const reviews = await Review.findAll({});

    expect(deletedReview.status).toBe(204);
    expect(reviews.length).toBe(reviewsMock.length - 1);

    const unauthorized = await request(app)
      .delete(`/api/v1/reviews/${reviewsMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(unauthorized.status).toBe(401);

    done();
  });
});
