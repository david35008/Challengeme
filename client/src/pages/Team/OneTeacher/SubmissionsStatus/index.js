import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import mixpanel from 'mixpanel-browser';
import Button from '@material-ui/core/Button';
import SubmissionsByChallenges from './SubmissionsByChallenges';
import SubmissionsByUsers from './SubmissionsByUsers';
import './style.css';

export default function Index({ teamName }) {
  const [showByChallengeOrUser, setShowByChallengeOrUser] = useState(true);

  useEffect(() => {
    const user = Cookies.get('userName');
    mixpanel.track('User On Team Submissions Teacher Area', {
      User: `${user}`,
      Team: teamName,
    });
  }, [teamName]);

  return (
    <div className="generic-page">
      <div className="student-info-control-panel">
        <h1 className="student-info-title-page">
          {' '}
          Team:
          {' '}
          <span className="student-info-title-page-name">
            {teamName}
          </span>
          {' '}
        </h1>
        <Button
          variant="outlined"
          style={{ marginBottom: '20px' }}
          onClick={() => setShowByChallengeOrUser((prev) => !prev)}
        >
          {showByChallengeOrUser ? 'Show By User' : 'Show By Challenge'}
        </Button>
      </div>
      {showByChallengeOrUser ? (
        <SubmissionsByChallenges />
      ) : (
        <SubmissionsByUsers />
      )}
      <div style={{ height: '50px' }} />
    </div>
  );
}
