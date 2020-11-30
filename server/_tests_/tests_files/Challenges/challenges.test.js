const request = require('supertest');
const bcrypt = require('bcryptjs');
const app = require('../../../app');
const {
  Challenge, Label, LabelChallenge, Submission, User,
} = require('../../../models');
const { generateToken } = require('../../Functions');
const { challengesMock, usersMock } = require('../../mocks');

describe('testing challenges endpoints', () => {
  beforeEach(async () => {
    await Challenge.destroy({ truncate: true, force: true });
    await Label.destroy({ truncate: true, force: true });
    await LabelChallenge.destroy({ truncate: true, force: true });
    await Submission.destroy({ truncate: true, force: true });
    await User.destroy({ truncate: true, force: true });
  });

  test('Can get all challenges approved', async (done) => {
    await Challenge.bulkCreate(challengesMock);
    const allChallenges = await request(app)
      .get('/api/v1/challenges')
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(allChallenges.status).toBe(200);
    expect(allChallenges.body.length).toBe(challengesMock.length);

    done();
  });

  test('Can get challenge by name', async (done) => {
    await Challenge.bulkCreate(challengesMock);

    const filteredChallenges = await request(app)
      .get(`/api/v1/challenges?name=${challengesMock[0].name}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(filteredChallenges.status).toBe(200);
    expect(filteredChallenges.body[0].name).toBe(challengesMock[0].name);

    done();
  });

  test('Can get challenges bu user', async (done) => {
    await Challenge.bulkCreate(challengesMock);

    const filteredChallenges = await request(app)
      .get('/api/v1/challenges/user-challenges')
      .set('authorization', `bearer ${generateToken(usersMock[1])}`);

    expect(filteredChallenges.status).toBe(200);
    expect(filteredChallenges.body.length).toBe(challengesMock.filter((challenge) => challenge.authorId === usersMock[1].id).length);

    done();
  });

  test('Can get challenge information', async (done) => {
    await Challenge.bulkCreate(challengesMock);

    const challenges = await request(app)
      .get(`/api/v1/challenges/info/${challengesMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(challenges.status).toBe(200);
    expect(challenges.body.id).toBe(challengesMock[0].id);
    expect(challenges.body.name).toBe(challengesMock[0].name);
    expect(challenges.body.description).toBe(challengesMock[0].description);
    expect(challenges.body.type).toBe(challengesMock[0].type);
    expect(challenges.body.boilerPlate).toBe(challengesMock[0].boilerPlate);
    expect(challenges.body.repositoryName).toBe(challengesMock[0].repositoryName);
    expect(challenges.body.hasOwnProperty('Labels')).toBe(true);
    expect(challenges.body.hasOwnProperty('Author')).toBe(true);
    expect(challenges.body.hasOwnProperty('averageRaiting')).toBe(true);
    expect(challenges.body.hasOwnProperty('submissionsCount')).toBe(true);
    done();
  });

  test("Can post new challenge - send error if challenge's repo is already exists", async (done) => {
    const postNewChallenge = await request(app)
      .post('/api/v1/challenges')
      .send(challengesMock[0])
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(postNewChallenge.status).toBe(201);

    // because not approved yet
    const response = await request(app)
      .get(`/api/v1/challenges?${challengesMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0);

    const newChallengeFromDB = await Challenge.findOne({
      where: {
        name: challengesMock[0].name,
      },
    });

    expect(newChallengeFromDB.dataValues.name).toBe(challengesMock[0].name);

    const postNewChallengeAgain = await request(app)
      .post('/api/v1/challenges')
      .send(challengesMock[0])
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(postNewChallengeAgain.status).toBe(409);
    done();
  });

  test('Can get pending challenges', async (done) => {
    usersMock[2].password = await bcrypt.hashSync(usersMock[2].password, 10);
    await User.create(usersMock[2]);

    const postNewChallenge = await request(app)
      .post('/api/v1/challenges')
      .send(challengesMock[0])
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(postNewChallenge.status).toBe(201);

    const postNewChallenge1 = await request(app)
      .post('/api/v1/challenges')
      .send(challengesMock[1])
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(postNewChallenge1.status).toBe(201);

    await Challenge.create(challengesMock[2]);

    const pendingChallenges = await request(app)
      .get('/api/v1/challenges/no-matter-the-state')
      .send(challengesMock[0])
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(pendingChallenges.status).toBe(200);

    const allChallenges = await Challenge.findAll({});

    expect(pendingChallenges.body.length).toBe(allChallenges.length);

    done();
  });

  test('Can change the state of a challenge', async (done) => {
    usersMock[2].password = await bcrypt.hashSync(usersMock[2].password, 10);
    await User.create(usersMock[2]);

    const postNewChallenge = await request(app)
      .post('/api/v1/challenges')
      .send(challengesMock[0])
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(postNewChallenge.status).toBe(201);

    // because not approved yet
    const challengesBeforeApproved = await request(app)
      .get(`/api/v1/challenges?${challengesMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(challengesBeforeApproved.status).toBe(200);
    expect(challengesBeforeApproved.body.length).toBe(0);

    const changeStateChallenge = await request(app)
      .patch(`/api/v1/challenges/state-update/${challengesMock[0].id}`)
      .send({ state: 'approved' })
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(changeStateChallenge.status).toBe(200);

    const challengesAfterApproved = await request(app)
      .get(`/api/v1/challenges?${challengesMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(challengesAfterApproved.status).toBe(200);
    expect(challengesAfterApproved.body[0].name).toBe(challengesMock[0].name);

    done();
  });
});
