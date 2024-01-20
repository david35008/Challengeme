import React, { useEffect, useCallback } from 'react';
import Selector from 'react-select';
import network from '../../services/network';
import { customStyles } from './ChoosersStyle';

const ChooseChallenges = ({
  teamId,
  chooseChallenges,
  setChooseChallenges,
  challengesOptions,
  setChallengesOptions,
}) => {
  const fetchAssignmentsData = useCallback(async () => {
    try {
      const { data: challengesAlreadyAssign } = await network.get(
        `/api/v1/assignments/${teamId}`,
      );
      const { data: allChallengesFromServer } = await network.get(
        '/api/v1/challenges/',
      );
      setChallengesOptions(
        allChallengesFromServer
          .map((challenge) => {
            let challengesForOptions;
            if (challengesAlreadyAssign[0].Challenge) {
              if (
                challengesAlreadyAssign.some(
                  (alreadyChallenge) => alreadyChallenge.Challenge.id === challenge.id,
                )
              ) {
                return null;
              }
            }
            challengesForOptions = {
              value: challenge.id,
              label: challenge.name,
            };

            return challengesForOptions;
          })
          .filter((option) => !!option),
      );
    } catch (error) {}
    // eslint-disable-next-line
  }, [teamId]);

  useEffect(() => {
    fetchAssignmentsData();
  }, [teamId]);

  const selectionChange = useCallback((chosen) => {
    setChooseChallenges(chosen);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Selector
        value={chooseChallenges}
        maxMenuHeight={300}
        placeholder="select challenges"
        isMulti
        name="labels"
        onChange={selectionChange}
        closeMenuOnSelect={false}
        options={challengesOptions}
        styles={customStyles}
      />
    </div>
  );
};

export default ChooseChallenges;
