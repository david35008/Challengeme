import React, { useEffect } from 'react';
import Selector from 'react-select';
import network from '../../services/network';
import './ChooseLabel.css';

const ChooseChallenges = ({
  teamId,
  chooseChallenges,
  setChooseChallenges,
  challengesOptions,
  setChallengesOptions,
  darkMode,
}) => {
  useEffect(() => {
    (async () => {
      try {
        const { data: challengesAlreadyAssign } = await network.get(`/api/v1/assignments/${teamId}`);
        const { data: allChallengesFromServer } = await network.get('/api/v1/challenges/');
        setChallengesOptions(allChallengesFromServer.map((challenge) => {
          let challengesForOptions;
          if (challengesAlreadyAssign[0].Challenge) {
            if (challengesAlreadyAssign.some((alreadyChallenge) => alreadyChallenge.Challenge.id === challenge.id)) {
              return null;
            }
          }
          challengesForOptions = {
            value: challenge.id,
            label: challenge.name,
          };

          return challengesForOptions;
        }).filter((option) => !(!option)));
      } catch (error) {
      }
    })();
  }, [setChallengesOptions, teamId]);

  const selectionChange = (choosens) => {
    setChooseChallenges(choosens);
  };

  const customStyles = {
    option: (provided) => ({
      ...provided,
      borderBottom: '1px dotted black',
      color: darkMode ? 'white' : 'blue',
      backgroundColor: darkMode ? 'rgb(51,51,51)' : 'white',
      height: '100%',
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: 'neutral30',
    }),
  };
  return (
    <div className="labelFilter">
      <Selector
        value={chooseChallenges}
        className="selectLabels"
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
