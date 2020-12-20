const {User , Team} = require('../../../models')
const getTeamUsersIds = async (teamId) => {

    // get team users
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
              permission: 'student'
            },
            attributes: [],
          },
        },
      ],
    });
  
    // returns array with users ids
    const usersId = currentTeamUsers.Users.map((value) => value.id);
  
    return usersId;
  }
const getTeamUsersNames = async (teamId) => {

    // get team users
    const currentTeamUsers = await Team.findOne({
      where: {
        id: teamId,
      },
      attributes: ['id'],
      include: [
        {
          model: User,
          attributes: ['userName'],
          through: {
            where: {
              permission: 'student'
            },
            attributes: [],
          },
        },
      ],
    });
  
    // returns array with users ids
    const usersNames = currentTeamUsers.Users.map((value) => value.userName);
    return usersNames;
  }

  module.exports.getTeamUsersIds = getTeamUsersIds;
  module.exports.getTeamUsersNames = getTeamUsersNames;