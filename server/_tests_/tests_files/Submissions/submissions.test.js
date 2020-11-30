const request = require('supertest');
const app = require('../../../app');
const { generateToken } = require('../../Functions');
const {
  Challenge, Label, LabelChallenge, Submission, User,
} = require('../../../models');
const { usersMock, submissionsMock, challengesMock } = require('../../mocks');

describe('testing challenges endpoints', () => {
  beforeEach(async () => {
    await Challenge.destroy({ truncate: true, force: true });
    await Label.destroy({ truncate: true, force: true });
    await LabelChallenge.destroy({ truncate: true, force: true });
    await Submission.destroy({ truncate: true, force: true });
    await User.destroy({ truncate: true, force: true });
  });

  test('Can get submission per certain challenge for logged user ', async (done) => {
    await Challenge.bulkCreate(challengesMock);
    await User.bulkCreate(usersMock);
    await Submission.bulkCreate(submissionsMock);

    const lastSubmission = await request(app)
      .get(`/api/v1/submissions/by-user/${challengesMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(lastSubmission.status).toBe(200);
    expect(lastSubmission.body.userId).toBe(usersMock[0].id);

    let lastSubmissionMockObj = { createdAt: new Date('12/12/2000') };
    submissionsMock.forEach((submission) => {
      if (submission.userId === usersMock[0].id && submission.challengeId === challengesMock[0].id) {
        if (lastSubmissionMockObj.createdAt < submission.createdAt) {
          lastSubmissionMockObj = submission;
        }
      }
    });

    expect(lastSubmission.body.state).toBe(lastSubmissionMockObj.state);
    expect(Array.isArray(lastSubmission.body)).toBe(false);
    done();
  });

  test('Can get all submissions per challenge', async (done) => {
    await Challenge.bulkCreate(challengesMock);
    await User.bulkCreate(usersMock);
    await Submission.bulkCreate(submissionsMock);

    const allSubmissionsChallenge = await request(app)
      .get(`/api/v1/submissions/${challengesMock[0].id}`)
      .set('authorization', `bearer ${generateToken(usersMock[0])}`);

    expect(allSubmissionsChallenge.status).toBe(200);
    expect(allSubmissionsChallenge.body.length).toBe(submissionsMock.filter((submission) => submission.challengeId === challengesMock[0].id).length);
    done();
  });
});

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
