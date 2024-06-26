import React, { useState, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import network from '../../services/network';
import ChooseChallenges from '../Choosers/ChooseChallenges';
import { getModalStyle, useModalStyles } from '../../utils';

export default function AddAssignment({
  open = false,
  setOpen,
  getAllAssignments,
  teamId,
}) {
  const classes = useModalStyles();

  const [modalStyle] = useState(getModalStyle);
  const [newAssignmentsChosen, setNewAssignmentsChosen] = useState([]);
  const [assignmentsOptions, setAssignmentsOptions] = useState([]);

  const addNewAssignment = useCallback(async () => {
    try {
      await network.post(`/api/v1/assignments/${teamId}`, {
        challenges: newAssignmentsChosen,
      });
      getAllAssignments();
      setOpen(false);
      setNewAssignmentsChosen([]);
    } catch (error) {}
    // eslint-disable-next-line
  }, [teamId, newAssignmentsChosen]);

  const handleClose = useCallback(() => {
    setOpen(false);
    setNewAssignmentsChosen([]);
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
          Add New Assignments To Team
          {teamId}
        </h2>
        <div id="simple-modal-description">
          <ChooseChallenges
            teamId={teamId}
            chooseChallenges={newAssignmentsChosen}
            setChooseChallenges={setNewAssignmentsChosen}
            challengesOptions={assignmentsOptions}
            setChallengesOptions={setAssignmentsOptions}
          />
        </div>
        <Button variant="contained" color="primary" onClick={addNewAssignment}>
          Add
        </Button>
        <AddAssignment />
      </div>
    </Modal>
  );
}
