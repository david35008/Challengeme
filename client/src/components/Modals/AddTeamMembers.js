import React, { useState, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import network from '../../services/network';
import ChooseMembers from '../Choosers/ChooseMembers';
import { getModalStyle, useModalStyles } from '../../utils';

export default function AddTeamMembers({
  open = false,
  setOpen,
  getAllTeams,
  teamNameForMember,
  isTeacher,
}) {
  const classes = useModalStyles();

  const [modalStyle] = useState(getModalStyle);
  const [newTeamMembers, setNewTeamMembers] = useState([]);
  const [newTeamMembersOptions, setNewTeamMembersOptions] = useState([]);

  const handleSubmitNewTeam = useCallback(async () => {
    try {
      const url = isTeacher ? 'add-users' : 'admin-add-users';
      await network.post(`/api/v1/teams/${url}/${teamNameForMember}`, {
        newUsers: newTeamMembers,
      });
      getAllTeams();
      setOpen(false);
      setNewTeamMembers([]);
    } catch (error) {}
    // eslint-disable-next-line
  }, [isTeacher, newTeamMembers, teamNameForMember]);

  const handleClose = useCallback(() => {
    setOpen(false);
    setNewTeamMembers([]);
    // eslint-disable-next-line
  }, []);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">
          Add New Members To Team
          {teamNameForMember}
        </h2>
        <div id="simple-modal-description">
          <ChooseMembers
            isTeacher={isTeacher}
            teamId={teamNameForMember}
            chooseMembers={newTeamMembers}
            setChooseMembers={setNewTeamMembers}
            membersOptions={newTeamMembersOptions}
            setMembersOptions={setNewTeamMembersOptions}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitNewTeam}
        >
          Add
        </Button>
        <AddTeamMembers />
      </div>
    </Modal>
  );
}
