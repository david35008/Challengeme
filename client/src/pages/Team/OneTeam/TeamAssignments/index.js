import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import network from '../../../../services/network';
import Loading from '../../../../components/Loading';
import NotFound from '../../../NotFound';
import SecondHeader from '../../../../components/Header/SecondHeader';
import ChallengeCard from '../../../../components/ChallengeCard';
import './style.css';

function TeamAssignments({ darkMode }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [allAssignments, setAllAssignments] = useState();

  const getAllAssignments = async () => {
    try {
      const { data: assignments } = await network.get(`/api/v1/assignments/${id}`);
      setAllAssignments(assignments);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllAssignments();
    // eslint-disable-next-line
  }, [id]);

  const paths = [
    { name: 'Team Information', URL: `/teams/${id}` },
    { name: 'Team Tasks', URL: `/teams/tasks/${id}` },
  ];

  return !loading ? (
    allAssignments ? (
      <>
        <SecondHeader paths={paths} darkMode={darkMode} />
        <div className="generic-page">
          <h1 className="team-task-title-page">
            {' '}
            Team:
            {' '}
            <span className="team-task-title-page-name">
              {allAssignments[0].Team.name}
            </span>
            {' '}
          </h1>
          <div className="team-task-cards">
            {allAssignments[0].Challenge ? (
              allAssignments.map((challenge) => (
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
              ))
            ) : (
              <h1 className="not-found">Not Found</h1>
            )}
          </div>
        </div>
      </>
    ) : (
      <NotFound />
    )
  ) : (
    <Loading darkMode={darkMode} />
  );
}

export default TeamAssignments;
