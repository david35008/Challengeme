
const request = require('supertest');
const app = require('../app');
const ngrok = require('ngrok');
const port = process.env.TEST_PORT || 4040;
const {Submission, Challenge, User, Review} = require('../models');
const {challengeArr, solutionRepos, failRepos} = require('./mockData');
process.env.MY_URL = 'testingAddress';
let server;
let accessToken;
const review = { commentContent : 'why you do this', commentTitle: 'annoying', rating: 3, userId: 1 }
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
        const url = await ngrok.connect(port);
        process.env.MY_URL = url;
        server = app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
          })
        await Challenge.destroy({ truncate: true, force: true });
        await Submission.destroy({ truncate: true, force: true });
        await User.destroy({ truncate: true, force: true });
        await Review.destroy({ truncate: true, force: true });
        await User.create({...userToAdd});
        await Challenge.bulkCreate(challengeArr);
        await Submission.create({
            challengeId: solutionRepos[0].challengeId,
            state: 'FAIL',
            solutionRepository: solutionRepos[0].repo
          });
        console.log(solutionRepos)
        console.log(process.env.MY_URL)
        const password = '12345678';
        const userName = 'matanGreenvald';
        const {headers} = await request(app).post('/api/v1/auth/login').send({userName, password, rememberMe:false})
        const index = headers['set-cookie'].findIndex(string => string.indexOf('accessToken') === 0);
        accessToken = headers['set-cookie'][index].split(';')[0].split('=')[1];
        done();
      });
    test('Posting submisson and status change to PENDING', async (done) => {
        const myUser = await User.findOne();
        await request(app).post(`/api/v1/challenges/${solutionRepos[0].challengeId}/apply`).set('authorization',`bearer ${accessToken}`)
        .send({repository:solutionRepos[0].repo, ...review, user:myUser});
        await request(app).post(`/api/v1/challenges/${solutionRepos[1].challengeId}/apply`).set('authorization',`bearer ${accessToken}`)
        .send({repository:solutionRepos[1].repo, ...review, user:myUser});
        await request(app).post(`/api/v1/challenges/${solutionRepos[2].challengeId}/apply`).set('authorization',`bearer ${accessToken}`)
        .send({repository:solutionRepos[2].repo, ...review, user:myUser});
        await request(app).post(`/api/v1/challenges/${solutionRepos[3].challengeId}/apply`).set('authorization',`bearer ${accessToken}`)
        .send({repository:solutionRepos[3].repo, ...review, user:myUser});
        await request(app).post(`/api/v1/challenges/${failRepos[0].challengeId}/apply`).set('authorization',`bearer ${accessToken}`)
        .send({repository:failRepos[0].repo, ...review, user:myUser});
        let submissions = await Submission.findAll();
        expect(submissions.length).toBe(5);
        submissions.forEach(submission => expect(submission.state).toBe('PENDING'));
        done();
    });
    test('Getting Submission Status back to database', async (done) => {
        let submissions;
        // changing the state of a successed submission to 'FAIL' to see if it will get resolved
        function checkingPending (){
            return new Promise((resolve, reject) => {
                function checking(){
                    setTimeout(async()=>{
                        submissions = await Submission.findAll();
                        expect(submissions.length).toBe(5);
                        if(submissions.every(submission => submission.state !== 'PENDING')){
                            console.log('success');
                            return resolve('success');
                        }else{
                            console.log('checking again')
                            return checking();
                    }
                    }, 10000);
                }
                checking();
            });
        }
        await checkingPending();
        done();
    },200000);
    
    test('Correct status on the Submissions', async (done) => {
        const allSubmissions = await Submission.findAll();
        expect(allSubmissions.length).toBe(5);
        solutionRepos.forEach(solution => {
            const index = allSubmissions.findIndex(submission => submission.solutionRepository === solution.repo && submission.state === 'SUCCESS');
            expect(index).toBeGreaterThan(-1);
        })
        failRepos.forEach(fail => {
            const index = allSubmissions.findIndex(submission => submission.solutionRepository === fail.repo && submission.state === 'FAIL');
            expect(index).toBeGreaterThan(-1);
        })
        done();
    })

    afterAll(async (done) => {
        server.close();
        await ngrok.disconnect();
        done();
    })
});  
