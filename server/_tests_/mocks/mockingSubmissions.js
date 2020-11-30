const challengeArr = [
  {
    id: 1,
    name: 'Promise Implementation',
    description: 'https://github.com/suvelocity/PromiseBoilerplate',
    type: 'server-only',
    repositoryName: 'suvelocity/PromiseChallenge',
    cover: 'https://storage.googleapis.com/challenges-cover/promise.jpeg',
  },
  {
    id: 2,
    name: 'React - Calculator',
    description: 'https://github.com/suvelocity/calculator-challenge',
    type: 'client-only',
    repositoryName: 'suvelocity/calculator-challange-tests',
    cover: 'https://storage.googleapis.com/challenges-cover/calc.jpg',
  },
  {
    id: 3,
    name: 'React - Chat app',
    description: 'https://github.com/suvelocity/Chat-App-Template',
    type: 'fullstack',
    repositoryName: 'suvelocity/Chat_App-Challange',
    cover: 'https://storage.googleapis.com/challenges-cover/chat_f.png',
  },
  {
    id: 4,
    name: 'Mysql - My Nodejs ORM',
    description: 'https://github.com/suvelocity/challenge-sequelize-template',
    type: 'server-mysql',
    repositoryName: 'suvelocity/challenge-sequelize',
    cover: 'https://storage.googleapis.com/challenges-cover/orm.jpeg',
  },
  {
    id: 5,
    name: 'JWT - Node.js',
    description: 'https://github.com/suvelocity/Authentication-Challenge-TEMPLATE',
    type: 'server-only',
    repositoryName: 'suvelocity/Authentication-Challenge',
    cover: 'https://storage.googleapis.com/challenges-cover/jwt.png',
  },
];

const solutionRepos = [
  { repo: 'royc67/PromiseBoilerplate', challengeId: 1 },
  { repo: 'david35008/Authentication-Challenge-SOLUTION', challengeId: 5 },
  { repo: 'ZBejavu/calculator-challenge', challengeId: 2 },
  { repo: 'giladyavneh/challenge-sequelize-template', challengeId: 4 },
];
const failRepos = [
  { repo: 'ZBejavu/noneexistingrepo', challengeId: 3 },
];

module.exports = { challengeArr, solutionRepos, failRepos };
