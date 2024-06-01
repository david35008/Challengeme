import React, { useState, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import network from '../../services/network';
import { getModalStyle, useModalStyles } from '../../utils';

export default function AddWebhookEvent({
  open = false,
  setOpen,
  getAllEvents,
}) {
  const classes = useModalStyles();

  const [modalStyle] = useState(getModalStyle);
  const [newName, setNewName] = useState();

  const handleSubmitNewAccessKey = useCallback(async () => {
    try {
      await network.post('/api/v1/webhooks/admin/events', {
        name: newName,
      });
      getAllEvents();
      setOpen(false);
    } catch (error) {}
    // eslint-disable-next-line
  }, [newName]);

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
            onChange={(event) => setNewName(event.target.value)}
            placeholder="Insert New Name..."
          />
          {' '}
        </div>
        <br />
        <br />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitNewAccessKey}
        >
          Add New Event
        </Button>
      </div>
    </Modal>
  );
}
