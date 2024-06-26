import React, { useState, useCallback } from 'react';
import { styled } from '@mui/system';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import network from '../../services/network';
import ChooseEvents from '../Choosers/ChooseEvents';
import { getModalStyle } from '../../utils';

const Paper = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '40vw',
  height: '60vh',
  maxHeight: '400px',
  overflowY: 'auto',
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
}));

const InputStyled = styled(Input)({
  width: '100%',
});

export default function AddWebhookTeam({ open = false, setOpen, getAllTeams }) {
  const [modalStyle] = useState(getModalStyle);
  const [teamId, setTeamId] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [authorizationToken, setAuthorizationToken] = useState('');
  const [eventsOptions, setEventsOptions] = useState([]);
  const [events, setEvents] = useState([]);

  const handleSubmitNewWebhookTeam = useCallback(async () => {
    try {
      await network.post('/api/v1/webhooks/admin/teams', {
        teamId,
        webhookUrl,
        authorizationToken,
        events: events.map((event) => event.label),
      });
      getAllTeams();
      setOpen(false);
    } catch (error) {
      // Handle the error
    }
  }, [teamId, webhookUrl, authorizationToken, events, getAllTeams, setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Paper style={modalStyle}>
        <h2 id="simple-modal-title">Add New Webhook Team</h2>
        <div id="simple-modal-description">
          <InputStyled
            onChange={(event) => setTeamId(event.target.value)}
            placeholder="Insert Team ID Name..."
          />
          <br />
          <br />
          <InputStyled
            onChange={(event) => setWebhookUrl(event.target.value)}
            placeholder="Insert Webhook Url Name..."
          />
          <br />
          <br />
          <InputStyled
            onChange={(event) => setAuthorizationToken(event.target.value)}
            placeholder="Insert Authorization Token ..."
          />
        </div>
        <ChooseEvents
          chooseEvents={events}
          setChooseEvents={setEvents}
          eventsOptions={eventsOptions}
          setEventsOptions={setEventsOptions}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitNewWebhookTeam}
        >
          Add New Webhook Team
        </Button>
      </Paper>
    </Modal>
  );
}
