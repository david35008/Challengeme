import React, { useState, useCallback } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
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
