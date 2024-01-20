import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import SubmissionsByChallenges from './SubmissionsByChallenges';
import SubmissionsByUsers from './SubmissionsByUsers';
import './style.css';

export default function Index() {
  const [showByChallengeOrUser, setShowByChallengeOrUser] = useState(true);

  return (
    <div className="generic-page">
      <div className="admin-sub-status-control-panel">
        <h1>Submissions Status</h1>
        <Button
          variant="outlined"
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
    </div>
  );
}
