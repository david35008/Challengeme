const request = require('supertest');
const bcrypt = require('bcryptjs');
const app = require('../../../app');
const { generateToken } = require('../../Functions');
const {
  Challenge, Label, LabelChallenge, Submission, User,
} = require('../../../models');
const { usersMock, labelsMock, challengesMock } = require('../../mocks');

describe('testing labels endpoints', () => {
  beforeEach(async () => {
    await Challenge.destroy({ truncate: true, force: true });
    await Label.destroy({ truncate: true, force: true });
    await LabelChallenge.destroy({ truncate: true, force: true });
    await Submission.destroy({ truncate: true, force: true });
    await User.destroy({ truncate: true, force: true });
  });

  test('Can get all labels', async (done) => {
    await Label.bulkCreate(labelsMock);
    const response = await request(app)
      .get('/api/v1/labels')
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);
    expect(response.body.length).toBe(14);
    expect(response.status).toBe(200);
    done();
  });

  test('Can add labels to challenge', async (done) => {
    await Label.bulkCreate(labelsMock);

    usersMock[2].password = await bcrypt.hashSync(usersMock[2].password, 10);
    await User.create(usersMock[2]);

    const postNewChallenge = await request(app)
      .post('/api/v1/challenges')
      .send(challengesMock[0])
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(postNewChallenge.status).toBe(201);

    const changeStateChallenge = await request(app)
      .patch(`/api/v1/challenges/state-update/${challengesMock[0].id}`)
      .send({ state: 'approved' })
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(changeStateChallenge.status).toBe(200);

    const challengesBeforeAddLabels = await request(app)
      .get(`/api/v1/challenges?${challengesMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(challengesBeforeAddLabels.status).toBe(200);
    expect(challengesBeforeAddLabels.body[0].Labels.length).toBe(0);

    const addLabels = await request(app)
      .post(`/api/v1/labels/${challengesMock[0].id}`)
      .send({ labels: [{ value: labelsMock[0].id }, { value: labelsMock[1].id }] })
      .set('authorization', `bearer ${generateToken(usersMock[2])}`);

    expect(addLabels.status).toBe(200);

    const challengesWithLables = await request(app)
      .get(`/api/v1/challenges?${challengesMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(challengesWithLables.status).toBe(200);
    expect(challengesWithLables.body[0].Labels.length).toBe(2);
    done();
  });
});
