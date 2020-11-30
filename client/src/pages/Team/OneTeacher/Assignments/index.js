import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import network from '../../../../services/network';
import ChallengeCard from '../../../../components/ChallengeCardSmallVersion';
import AddAssignment from '../../../../components/Modals/AddAssignment';
import './style.css';

function TeacherAssignments({ darkMode, teamName }) {
  const { id } = useParams();

  const [allAssignments, setAllAssignments] = useState();
  const [openNewAssignmentModal, setOpenNewAssignmentModal] = useState(false);

  const getAllAssignments = async () => {
    try {
      const { data: assignments } = await network.get(`/api/v1/assignments/${id}`);
      setAllAssignments(assignments);
    } catch (error) {
    }
  };

  const removeAssignment = async (challengeId) => {
    try {
      await network.delete(`/api/v1/assignments/${id}?challengeId=${challengeId}`);
      getAllAssignments();
    } catch (error) {
    }
  };

  useEffect(() => {
    getAllAssignments();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="generic-page">
      <AddAssignment
        open={openNewAssignmentModal}
        setOpen={setOpenNewAssignmentModal}
        getAllAssignments={getAllAssignments}
        teamId={id}
      />
      <div className="assignments-title-and-button">
        <h1>
          This Assignments Teacher For Team
          {teamName}
          {' '}
          Page
        </h1>
        <Button variant={darkMode ? 'contained' : 'outlined'} onClick={() => setOpenNewAssignmentModal(true)}>
          Add New Assignment
        </Button>
      </div>
      {allAssignments && allAssignments[0].Challenge ? (
        <div className="assignments-flexbox">
          {allAssignments.map((challenge) => (
            <div className="assignments-card-and-button" key={challenge.Challenge.id + challenge.Challenge.name}>
              <ChallengeCard
                key={challenge.Challenge.id}
                challengeId={challenge.Challenge.id}
                name={challenge.Challenge.name}
                description={challenge.Challenge.description}
                repositoryName={challenge.Challenge.repositoryName}
                labels={challenge.Challenge.Labels}
                rating={challenge.Challenge.averageRaiting}
                submissions={challenge.Challenge.submissionsCount}
                createdAt={challenge.Challenge.createdAt}
              />
              <Button variant="contained" style={{ marginBottom: '50px' }} onClick={() => removeAssignment(challenge.Challenge.id)}>
                Remove Assignment
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="not-found">Not Found</h1>
      )}
    </div>
  );
}

export default TeacherAssignments;
