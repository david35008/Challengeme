import React, { useState, useCallback } from 'react';
import Swal from 'sweetalert2';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import network from '../../services/network';
import { getModalStyle, useModalStyles } from '../../utils';

export default function AddAccessKey({
  open = false,
  setOpen,
  getAllAccessKeys,
}) {
  const classes = useModalStyles();
  const [modalStyle] = useState(getModalStyle);
  const [newEntityName, setNewEntityName] = useState();
  const [newEmail, setNewEmail] = useState();

  const handleSubmitNewAccessKey = useCallback(async () => {
    try {
      await network.post('/api/v1/webhooks/admin/access-key', {
        email: newEmail,
        entityName: newEntityName,
      });
      getAllAccessKeys();
      setOpen(false);
    } catch (error) {
      setOpen(false);
      Swal.fire({
        icon: 'error',
        title: error.response.data.message,
        showConfirmButton: true,
      });
    }
    // eslint-disable-next-line
  }, [newEmail, newEntityName]);

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
          />
          <br />
          {' '}
          <br />
          <Input
            onChange={(event) => setNewEmail(event.target.value)}
            placeholder="Insert Email Name..."
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
          Add New Access Key
        </Button>
      </div>
    </Modal>
  );
}
