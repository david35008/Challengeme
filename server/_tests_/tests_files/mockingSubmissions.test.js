/**
 * @jest-environment node
 */
const request = require('supertest');
const app = require('../../app');
const {Submission, Challenge, User, Review} = require('../../models');
const jwt = require("jsonwebtoken");
const {challengeArr, solutionRepos, failRepos} = require('../mocks/mockingSubmissions');
const review = { commentContent : 'why you do this', commentTitle: 'annoying', rating: 3, userId: 1 }
const nock = require('nock');
const getCurrentBranch = require('../../helpers/getCurrentBranch')
let ref;
process.env.MY_URL = 'testingAddress';
let accessToken;
const userToAdd = {
  firstName: "Matan",
  lastName: "Greenvald",
  userName: "matanGreenvald",
  password: "$2b$10$brJxJ5NjKzcVMmpKw6qPQ.YzNtNeaCK7y3JMu2SAi1FOfrwO/qYge",
  email: "mgk@gmail.com",
  birthDate: "02-07-1998",
  country: "Israel",
  city: "Tel Aviv",
  phoneNumber: "0508864599",
  githubAccount: "MTN-G",
  reasonOfRegistration: "HUNGRY",
  securityQuestion: "Where was your best family vacation as a kid?",
  securityAnswer: "$2b$10$92A55W4fUxz3Ry/BT90p4.ZXWNMzpfDG0WItmKmVY3NTYdC5hmzKu",
}
describe('Submission process', () => {
    beforeAll(async (done) => {
        ref = await getCurrentBranch();
        process.env.MY_BRANCH = ref;
        console.log('current branch' , ref);    
        await Challenge.destroy({ truncate: true, force: true });
        await Submission.destroy({ truncate: true, force: true });
        await User.destroy({ truncate: true, force: true });
        await Review.destroy({ truncate: true, force: true });
        await Challenge.bulkCreate(challengeArr);
        await User.create({...userToAdd});
        await Submission.create({
          challengeId: solutionRepos[0].challengeId,
          state: 'FAIL',
          userId: 1,
          solutionRepository: solutionRepos[0].repo
        });
        await Submission.create({
          challengeId: failRepos[0].challengeId,
          state: 'FAIL',
          userId: 1,
          solutionRepository: failRepos[0].repo
        });
        const password = '12345678';
        const userName = 'matanGreenvald';
        const {headers} = await request(app).post('/api/v1/auth/login').send({userName, password, rememberMe:false})
        const index = headers['set-cookie'].findIndex(string => string.indexOf('accessToken') === 0);
        accessToken = headers['set-cookie'][index].split(';')[0].split('=')[1];
        const user = await User.findOne({
          where: {email: "mgk@gmail.com"}
        })
        accessToken = jwt.sign({userId:user.dataValues.id, userName: user.dataValues.userName}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h', })
        done();
      });
    test('Posting submisson and status change to PENDING + can Post Submissions that had FAIL status', async () => {
        const challenges = await Challenge.findAll();
        let initialSubmissions = await Submission.findAll();
        expect(initialSubmissions.length).toBe(2);
        let challengeType = challenges.find(challenge => challenge.id === solutionRepos[0].challengeId).type;
        let testRepo = challenges.find(challenge=> challenge.id === solutionRepos[0].challengeId).repositoryName;
        const successId = initialSubmissions.find(submission => submission.solutionRepository === solutionRepos[0].repo).id;
        let webhookUrl = process.env.MY_URL.concat(`/api/v1/webhook/submission/${successId}`);
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAA',ref)
        const githubPostmock1 = nock(`https://api.github.com`, {reqHeaders: {
          'Content-Type': 'application/json',
          Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
      }})
        .post(`/repos/${process.env.GITHUB_REPO}/actions/workflows/${challengeType}.yml/dispatches`,
        {
            ref: ref,
            inputs: {              
              testRepo: testRepo,
              solutionRepo: solutionRepos[0].repo,
              webhookUrl: webhookUrl,
              bearerToken: accessToken
            }
        })
        .reply(200)


        challengeType = challenges.find(challenge => challenge.id === failRepos[0].challengeId).type;
        testRepo = challengeArr.find(challenge=> challenge.id === failRepos[0].challengeId).repositoryName;
        const failId = initialSubmissions.find(submission => submission.solutionRepository === failRepos[0].repo).id;
        webhookUrl = process.env.MY_URL.concat(`/api/v1/webhook/submission/${failId}`);
        const githubPostmock2 = nock(`https://api.github.com`, {reqHeaders: {
          'Content-Type': 'application/json',
          Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
      }})
        .post(`/repos/${process.env.GITHUB_REPO}/actions/workflows/${challengeType}.yml/dispatches`,
        {
            ref: ref,
            inputs: {              
              testRepo: testRepo,
              solutionRepo: failRepos[0].repo,
              webhookUrl: webhookUrl,
              bearerToken: accessToken
            }
        })
        .reply(200)


        challengeType = challenges.find(challenge => challenge.id === solutionRepos[1].challengeId).type;
        testRepo = challengeArr.find(challenge=> challenge.id === solutionRepos[1].challengeId).repositoryName;
        webhookUrl = process.env.MY_URL.concat(`/api/v1/webhook/submission/${3}`);
        const githubPostmock3 = nock(`https://api.github.com`, {reqHeaders: {
          'Content-Type': 'application/json',
          Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
      }})
        .post(`/repos/${process.env.GITHUB_REPO}/actions/workflows/${challengeType}.yml/dispatches`,
        {
            ref: ref,
            inputs: {              
              testRepo: testRepo,
              solutionRepo: solutionRepos[1].repo,
              webhookUrl: webhookUrl,
              bearerToken: accessToken
            }
        })
        .reply(200)
    
        const myUser = await User.findOne();
        //console.log(myUser , '--------------------------------')
        await request(app).post(`/api/v1/challenges/${solutionRepos[0].challengeId}/apply`).set('authorization',`bearer ${accessToken}`)
        .send({repository:solutionRepos[0].repo , ...review, user:myUser.dataValues});
        await request(app).post(`/api/v1/challenges/${failRepos[0].challengeId}/apply`).set('authorization',`bearer ${accessToken}`)
        .send({repository:failRepos[0].repo, ...review, user:myUser.dataValues});
        await request(app).post(`/api/v1/challenges/${solutionRepos[1].challengeId}/apply`).set('authorization',`bearer ${accessToken}`)
        .send({repository:solutionRepos[1].repo, ...review, user:myUser.dataValues});
        expect(githubPostmock1.isDone()).toEqual(true);
        console.log('__AASSSSSSSSSSSSS__ASSAASAS', githubPostmock1)
        expect(githubPostmock2.isDone()).toEqual(true);
        expect(githubPostmock3.isDone()).toEqual(true);


        let submissions = await Submission.findAll();
        expect(submissions.length).toBe(3);
        submissions.forEach(submission => expect(submission.state).toBe('PENDING'));
        
    },10000);
    test('webhook simulation, state change from PENDING to SUCCESS or FAIL', async () => {
      let submissions = await Submission.findAll();
      const successId = submissions.find(submission => submission.solutionRepository === solutionRepos[0].repo).id;
      const successId2 = submissions.find(submission => submission.solutionRepository === solutionRepos[1].repo).id;
      const failId = submissions.find(submission => submission.solutionRepository === failRepos[0].repo).id;
      await request(app).patch(`/api/v1/webhook/submission/${successId}`).set('authorization',`bearer ${accessToken}`)
      .send({success: true });
      await request(app).patch(`/api/v1/webhook/submission/${successId2}`).set('authorization',`bearer ${accessToken}`)
      .send({success: true });
      await request(app).patch(`/api/v1/webhook/submission/${failId}`).set('authorization',`bearer ${accessToken}`)
      .send({success: false });
      const expectedSuccess = await Submission.findByPk(successId);
      const expectedSuccess2 = await Submission.findByPk(successId2)
      const expectedFail = await Submission.findByPk(failId);
      expect(expectedSuccess.state).toBe('SUCCESS')
      expect(expectedSuccess2.state).toBe('SUCCESS')
      expect(expectedFail.state).toBe('FAIL')
    });

});