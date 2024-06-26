import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import mixpanel from 'mixpanel-browser';
import network from '../../../../services/network';
import Loading from '../../../../components/Loading';
import NotFound from '../../../NotFound';
import SecondHeader from '../../../../components/Header/SecondHeader';
import ChallengeCard from '../../../../components/Cards/WideChallengeCard';
import './style.css';

function TeamAssignments() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [allAssignments, setAllAssignments] = useState();

  const getAllAssignments = useCallback(async () => {
    try {
      const { data: assignments } = await network.get(
        `/api/v1/assignments/${id}`,
      );
      setAllAssignments(assignments);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    getAllAssignments();
    const user = Cookies.get('userName');
    mixpanel.track('User On Assignments Student Area', {
      User: `${user}`,
      Team: id,
    });
  }, [id]);

  const paths = [
    { name: 'Team Information', URL: `/teams/${id}` },
    { name: 'Team Tasks', URL: `/teams/tasks/${id}` },
  ];

  return !loading ? (
    allAssignments ? (
      <>
        <SecondHeader paths={paths} />
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
                  authorName={challenge.Challenge.Author.userName}
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
    <Loading />
  );
}

export default TeamAssignments;
