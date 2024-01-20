import React, { useEffect, useState, useContext } from 'react';
import mixpanel from 'mixpanel-browser';
import Cookies from 'js-cookie';
import ChallengeCard from '../../components/Cards/WideChallengeCard';
import AllChallenges from '../../context/AllChallengesContext';
import FilteredLabels from '../../context/FilteredLabelsContext';
import '../../styles/Challenges.css';

export default function Home() {
  const allChallenges = useContext(AllChallenges).challenges;
  const filteredLabels = useContext(FilteredLabels);
  const [challengesFiltered, setChallengesFiltered] = useState(allChallenges);

  useEffect(() => {
    (async () => {
      try {
        if (filteredLabels.filteredLabels.length > 0) {
          const filteredByLabelChallenges = [];
          allChallenges.forEach((challenge) => {
            if (
              filteredLabels.filteredLabels.every((labelChallenge) => challenge.Labels.map((label) => label.id).includes(
                labelChallenge,
              ))
            ) {
              if (!filteredByLabelChallenges.includes(challenge)) {
                filteredByLabelChallenges.push(challenge);
              }
            }
          });
          setChallengesFiltered(filteredByLabelChallenges);
        } else {
          setChallengesFiltered(allChallenges);
        }
      } catch (error) {}
    })();
  }, [filteredLabels]);

  useEffect(() => {
    const user = Cookies.get('userName');
    mixpanel.track('User On Home Page', { User: `${user}` });
    return () => filteredLabels.setFilteredLabels([]);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="home-page">
        <div className="challenges-container">
          {challengesFiltered.length > 0 ? (
            challengesFiltered.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                challengeId={challenge.id}
                name={challenge.name}
                description={challenge.description}
                repositoryName={challenge.repositoryName}
                labels={challenge.Labels}
                rating={challenge.averageRaiting}
                submissions={challenge.submissionsCount}
                createdAt={challenge.createdAt}
                authorName={challenge.Author.userName}
              />
            ))
          ) : (
            <h1>Not Found</h1>
          )}
        </div>
      </div>
    </div>
  );
}
