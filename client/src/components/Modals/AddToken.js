import React, { useState, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import network from '../../services/network';
import { getModalStyle, useModalStyles } from '../../utils';

export default function AddToken({ open = false, setOpen, getAllTokens }) {
  const classes = useModalStyles();

  const [modalStyle] = useState(getModalStyle);
  const [newToken, setNewToken] = useState();
  const [newTokenGitAccount, setNewTokeGitAccount] = useState();
  const [newTokenActionsLimit, setNewTokeActionsLimit] = useState();

  const handleSubmitNewToken = useCallback(async () => {
    const newTokenObj = {
      token: newToken,
      gitAccount: newTokenGitAccount,
      actionsLimit: newTokenActionsLimit,
    };
    try {
      await network.post('/api/v1/git/', newTokenObj);
      getAllTokens();
      setOpen(false);
    } catch (error) {}
    // eslint-disable-next-line
  }, [newToken, newTokenGitAccount, newTokenActionsLimit]);

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
            onChange={(event) => setNewToken(event.target.value)}
            placeholder="Insert Token..."
          />
          <br />
          <br />
          <Input
            onChange={(event) => setNewTokeGitAccount(event.target.value)}
            placeholder="Insert Github Account..."
          />
          <br />
          <br />
          <Input
            onChange={(event) => setNewTokeActionsLimit(event.target.value)}
            placeholder="Insert Action Limit..."
          />
          <br />
          <br />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitNewToken}
        >
          Add New Token
        </Button>
        <AddToken />
      </div>
    </Modal>
  );
}
