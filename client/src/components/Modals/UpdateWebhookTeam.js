import React, { useState, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import network from '../../services/network';
import { getModalStyle, useModalStyles } from '../../utils';

export default function UpdateWebhookTeam({
  open = false,
  setOpen,
  getAllTeams,
  data,
}) {
  const classes = useModalStyles();

  const [modalStyle] = useState(getModalStyle);
  const [webhookUrl, setWebhookUrl] = useState(data.webhookUrl);
  const [authorizationToken, setAuthorizationToken] = useState(
    data.authorizationToken,
  );

  const handleSubmitNewAccessKey = useCallback(async () => {
    try {
      await network.patch(`/api/v1/webhooks/admin/teams/${data.id}`, {
        webhookUrl,
        authorizationToken,
      });
      getAllTeams();
      setOpen(false);
    } catch (error) {}
    // eslint-disable-next-line
  }, [data, webhookUrl, authorizationToken]);

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
            onChange={(event) => setWebhookUrl(event.target.value)}
            placeholder="Insert Webhook Url..."
            value={webhookUrl}
          />
          <br />
          {' '}
          <br />
          <Input
            onChange={(event) => setAuthorizationToken(event.target.value)}
            placeholder="Insert Authorization Token Name..."
            value={authorizationToken}
          />
          {' '}
        </div>
        {' '}
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitNewAccessKey}
        >
          Update Team
        </Button>
      </div>
    </Modal>
  );
}
