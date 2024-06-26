import React, { useState, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import network from '../../services/network';
import { getModalStyle, useModalStyles } from '../../utils';

export default function UpdateAccessKey({
  open = false,
  setOpen,
  getAllAccessKeys,
  data,
}) {
  const classes = useModalStyles();

  const [modalStyle] = useState(getModalStyle);
  const [newEntityName, setNewEntityName] = useState(data.entityName);
  const [newEmail, setNewEmail] = useState(data.email);
  const [updateKey, setUpdateKey] = useState('false');

  const handleSubmitNewAccessKey = useCallback(async () => {
    try {
      await network.patch(`/api/v1/webhooks/admin/access-key/${data.id}`, {
        email: newEmail,
        entityName: newEntityName,
        updateKey,
      });
      getAllAccessKeys();
      setOpen(false);
    } catch (error) {}
    // eslint-disable-next-line
  }, [data, newEmail, newEntityName, updateKey]);

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
            onChange={(event) => setNewEntityName(event.target.value)}
            placeholder="Insert Entity Name Name..."
            value={newEntityName}
          />
          <br />
          {' '}
          <br />
          <Input
            onChange={(event) => setNewEmail(event.target.value)}
            placeholder="Insert Email Name..."
            value={newEmail}
          />
          {' '}
        </div>
        {' '}
        <br />
        <label>Update Key:</label>
        <select onChange={(event) => setUpdateKey(event.target.value)}>
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitNewAccessKey}
        >
          Update Access Key
        </Button>
      </div>
    </Modal>
  );
}
