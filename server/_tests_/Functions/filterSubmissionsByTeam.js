module.exports = function filterSubmissionsByTeam(teamIdArray, conditions = [{ paramter: 'aaa', equal: undefined }]) {
  const filteredSubmissions = [];
  filteredSubmissions.forEach((submission) => {
    if (teamIdArray.includes(submission.userId) && conditions.every((condition) => submission[`${condition.parameter}`] === condition.equal)) {
      filteredSubmissions.push(submission);
    }
  });
  return filteredSubmissions.sort((a, b) => b.createdAt - a.createdAt);
};
