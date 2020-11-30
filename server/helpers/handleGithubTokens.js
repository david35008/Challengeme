const { Op } = require('sequelize');
const { GitToken } = require('../models');

module.exports = async function handleGithubTokens(headers) {
  console.log('---------------------------------------------------------------------');
  console.log('Will Reset In - ', Math.round((((new Date(headers['x-ratelimit-reset'] * 1000) - new Date()) % 86400000) % 3600000) / 60000), 'Minutes');
  console.log('Remain Actions - ', headers['x-ratelimit-remaining']);
  console.log('Total Action Alowed - ', headers['x-ratelimit-limit']);
  console.log('Actions Alredy Used - ', headers['x-ratelimit-used']);
  console.log('---------------------------------------------------------------------');

  process.env.REMAINING_ACTIONS_TOKEN_GITHUB = headers['x-ratelimit-remaining'];

  if (headers['x-ratelimit-remaining'] < 500) {
    try {
      await GitToken.update({
        status: 'blocked',
        resetsAt: new Date(headers['x-ratelimit-reset'] * 1000),
      },
      {
        where: {
          token: process.env.GITHUB_ACCESS_TOKEN,
        },
      });

      const allTokens = await GitToken.findAll({
        where: {
          [Op.or]: [
            { status: 'available' },
            {
              [Op.and]: [
                { resetsAt: { [Op.lt]: Date.now() } },
                { status: 'blocked' },
              ],
            },
          ],
        },
      });
      const tokensArray = allTokens.map((token) => token.dataValues.token);

      await GitToken.update({
        status: 'available',
      },
      {
        where: {
          token: tokensArray,
        },
      });

      console.log('BEFORE WE DO AMAZING', process.env.GITHUB_ACCESS_TOKEN);

      process.env.GITHUB_ACCESS_TOKEN = tokensArray[0];

      console.log('AFTER SWITCH', process.env.GITHUB_ACCESS_TOKEN);
    } catch (error) {
      console.error(error);
    }
  }
};
