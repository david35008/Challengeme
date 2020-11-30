const { User, Team } = require('../../models');

module.exports = async function getTeamUsersIds(teamId) {
  const currentTeamUsers = await Team.findOne({
    where: {
      id: teamId,
    },
    attributes: ['name'],
    include: [
      {
        model: User,
        attributes: ['id'],
        through: {
          where: {
            permission: 'student',
          },
          attributes: [],
        },
      },
    ],
  });
    // returns array with users ids
  const usersId = currentTeamUsers.Users.map((value) => value.id);
  return usersId;
};
