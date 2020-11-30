module.exports = function countSuccessAndFailSubmissionsPerChallenge(submissionsOrderedByDate) {
  const filteredAlready = [];
  let success = 0;
  let fail = 0;
  submissionsOrderedByDate.forEach((submission) => {
    if (filteredAlready.some((filteredSubmission) => filteredSubmission.userId === submission.userId
            && filteredSubmission.challengeId === submission.challengeId)) {
    } else {
      filteredAlready.push({ userId: submission.userId, challengeId: submission.challengeId });
      if (submission.state === 'SUCCESS') {
        success++;
      } else {
        fail++;
      }
    }
  });
  return { success, fail };
};
