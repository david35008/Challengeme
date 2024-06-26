import React, { useState, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import network from '../../services/network';
import { getModalStyle, useModalStyles } from '../../utils';

export default function UpdateWebhookEvent({
  open = false,
  setOpen,
  getAllEvents,
  data,
}) {
  const classes = useModalStyles();

  const [modalStyle] = useState(getModalStyle);
  const [newName, setNewName] = useState(data.name);

  const handleSubmitNewEvent = useCallback(async () => {
    try {
      await network.patch(`/api/v1/webhooks/admin/events/${data.id}`, {
        name: newName,
      });
      getAllEvents();
      setOpen(false);
    } catch (error) {}
    // eslint-disable-next-line
  }, [data, newName]);

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
            value={newName}
          />
          {' '}
        </div>
        {' '}
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitNewEvent}
        >
          Update Event
        </Button>
      </div>
    </Modal>
  );
}
