import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import SubmissionsByChallenges from './SubmissionsByChallenges';
import SubmissionsByUsers from './SubmissionsByUsers';
import './style.css';

export default function Index({ teamName, darkMode }) {
  const [showByChallengeOrUser, setShowByChallengeOrUser] = useState(true);

  return (
    <div className="generic-page">
      <div className="admin-sub-status-control-panel">
        <h1>
          {teamName}
          {' '}
          Submissions Status
        </h1>
        <Button
          variant={darkMode ? 'contained' : 'outlined'}
          onClick={() => setShowByChallengeOrUser((prev) => !prev)}
        >
          {showByChallengeOrUser ? 'Show By User' : 'Show By Challenge'}
        </Button>
      </div>
      {showByChallengeOrUser ? (
        <SubmissionsByChallenges darkMode={darkMode} />
      ) : (
        <SubmissionsByUsers darkMode={darkMode} />
      )}
    </div>
  );
}
