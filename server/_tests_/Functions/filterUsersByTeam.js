module.exports = function filterUsersByTeam(team, userTeamArray) {
  return userTeamArray.map((userTeam) => {
    if (userTeam.teamId === team.id && userTeam.permission === 'student') {
      return userTeam.userId;
    }
  }).filter((a) => !(!a));
};
