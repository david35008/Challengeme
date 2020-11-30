const countSuccessAndFailSubmissionsPerChallenge = require('./countSuccessAndFailSubmissionsPerChallenge');
const filterUsersByTeam = require('./filterUsersByTeam');

module.exports = function filterLastSubmissionsForTeacherRoute(team, challengeIdArray, submissionsArray, userTeamArray) {
  const teamUsersId = filterUsersByTeam(team, userTeamArray);
  const totalSubmissionsShouldBe = teamUsersId.length * challengeIdArray.length;

  const totalSubmissionsOrderedByDate = submissionsArray.map((submission) => {
    if (teamUsersId.includes(submission.userId) && challengeIdArray.includes(submission.challengeId)) {
      return submission;
    }
  }).filter((a) => !(!a)).sort((a, b) => b.createdAt - a.createdAt);

  const filteredSubmissions = countSuccessAndFailSubmissionsPerChallenge(totalSubmissionsOrderedByDate);
  const notYetSubmitted = (teamUsersId.length * totalSubmissionsShouldBe) - (filteredSubmissions.success + filteredSubmissions.fail);
  filteredSubmissions.notYet = notYetSubmitted || 0;
  return filteredSubmissions;
};
