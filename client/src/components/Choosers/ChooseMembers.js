import React, { useEffect } from 'react';
import Selector from 'react-select';
import network from '../../services/network';
import './ChooseLabel.css';

const ChooseMembers = ({
  teamId,
  chooseMembers,
  setChooseMembers,
  membersOptions,
  setMembersOptions,
  darkMode,
  isTeacher,
}) => {
  useEffect(() => {
    (async () => {
      try {
        const url = isTeacher ? `users/teacher/${teamId}` : 'users/admin';
        const { data: allUsersFromServer } = await network.get(`/api/v1/${url}`);
        const { data: teamAlreadyMembers } = await network.get(`/api/v1/teams/single-team/${teamId}`);
        setMembersOptions(allUsersFromServer.map((user) => {
          let userForOptions;
          if (teamAlreadyMembers[0].Users.some((memberUser) => memberUser.id === user.id)) {
            return null;
          }
          userForOptions = {
            value: user.id,
            label: user.userName,
          };

          return userForOptions;
        }).filter((option) => !(!option)));
      } catch (error) {
      }
    })();
  }, [setMembersOptions, teamId, isTeacher]);

  const selectionChange = (choosens) => {
    setChooseMembers(choosens);
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
        value={chooseMembers}
        className="selectLabels"
        maxMenuHeight={300}
        placeholder="select members"
        isMulti
        name="labels"
        onChange={selectionChange}
        closeMenuOnSelect={false}
        options={membersOptions}
        styles={customStyles}
      />
    </div>
  );
};

export default ChooseMembers;
