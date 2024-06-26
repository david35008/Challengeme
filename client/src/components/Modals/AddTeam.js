import React, { useState, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import network from '../../services/network';
import { getModalStyle, useModalStyles } from '../../utils';

export default function AddTeam({ open = false, setOpen, getAllTeams }) {
  const classes = useModalStyles();
  const [modalStyle] = useState(getModalStyle);
  const [newTeamName, setNewTeamName] = useState();

  const handleSubmitNewTeam = useCallback(async () => {
    try {
      await network.post('/api/v1/teams/create-team', { name: newTeamName });
      getAllTeams();
      setOpen(false);
    } catch (error) {}
    // eslint-disable-next-line
  }, [newTeamName]);

  const handleClose = useCallback(() => {
    setOpen(false);
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
        <h2 id="simple-modal-title">Text in a modal</h2>
        <div id="simple-modal-description">
          <Input
            onChange={(event) => setNewTeamName(event.target.value)}
            placeholder="Insert Team Name..."
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitNewTeam}
        >
          Add New Team
        </Button>
      </div>
    </Modal>
  );
}
