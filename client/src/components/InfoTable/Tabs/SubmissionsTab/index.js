import React, { useEffect, useState } from 'react';
import network from '../../../../services/network';
import Submission from './Submission';

function SubmissionTab({ challengeId }) {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const { data: submissionsFromDb } = await network.get(
          `/api/v1/submissions/${challengeId}`,
        );
        setSubmissions(submissionsFromDb);
      } catch (error) {
      }
    };
    fetchSubmissions();
    const liveSubmissions = setInterval(fetchSubmissions, 7000);
    return () => clearInterval(liveSubmissions);
  }, [challengeId]);
  return (
    <div>
      <Submission
        className="headlines"
        name="Name"
        status="Status"
        submittedAt="Submitted at"
        bold
      />
      {submissions.map((item) => (
        <Submission
          className="submission"
          key={item.solutionRepository + item.updatedAt}
          name={item.solutionRepository.split('/')[0]}
          status={item.state}
          submittedAt={item.updatedAt.split('T').join(' ').split('.')[0]}
          solutionRepository={item.solutionRepository}
          bold={false}
        />
      ))}
    </div>
  );
}

export default SubmissionTab;
