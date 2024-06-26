import React, { useEffect, useCallback } from 'react';
import Selector from 'react-select';
import network from '../../services/network';
import { customStyles } from './ChoosersStyle';

const ChooseMembers = ({
  teamId,
  chooseMembers,
  setChooseMembers,
  membersOptions,
  setMembersOptions,
  isTeacher,
}) => {
  const fetchUsersData = useCallback(async () => {
    try {
      const url = isTeacher ? `users/teacher/${teamId}` : 'users/admin';
      const { data: allUsersFromServer } = await network.get(`/api/v1/${url}`);
      const { data: teamAlreadyMembers } = await network.get(
        `/api/v1/teams/single-team/${teamId}`,
      );
      const allUsers = isTeacher
        ? allUsersFromServer.Users
        : allUsersFromServer;
      setMembersOptions(
        allUsers
          .map((user) => {
            let userForOptions;
            if (
              teamAlreadyMembers[0].Users.some(
                (memberUser) => memberUser.id === user.id,
              )
            ) {
              return null;
            }
            userForOptions = {
              value: user.id,
              label: user.userName,
            };
            return userForOptions;
          })
          .filter((option) => !!option),
      );
    } catch (error) {}
    // eslint-disable-next-line
  }, [teamId, isTeacher]);

  useEffect(() => {
    fetchUsersData();
  }, [teamId, isTeacher]);

  const selectionChange = useCallback((chosen) => {
    setChooseMembers(chosen);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Selector
        value={chooseMembers}
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
