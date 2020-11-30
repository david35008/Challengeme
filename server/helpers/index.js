const Filters = require('./Filters');
const Communicator = require('./communicator');
const handleGithubTokens = require('./handleGithubTokens');
const getCurrentBranch = require('./getCurrentBranch');

module.exports = {
  mailer: Communicator, handleGithubTokens, getCurrentBranch, Filters,
};
