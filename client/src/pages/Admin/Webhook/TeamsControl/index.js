import React, { useEffect, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import network from '../../../../services/network';
import AddWebhookTeam from '../../../../components/Modals/AddWebhookTeam';
import UpdateWebhookTeam from '../../../../components/Modals/UpdateWebhookTeam';

function Row({ row, getAllTeams }) {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  const deleteTeam = useCallback(async (teamId) => {
    const isDeleteOk = prompt("What's your favorite cocktail drink?");
    if (isDeleteOk !== null) {
      await network.delete(`/api/v1/webhooks/admin/teams/${teamId}`);
      getAllTeams();
    }
  }, [getAllTeams]);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.id}</TableCell>
        <TableCell align="left">{row.teamId}</TableCell>
        <TableCell align="left">{row.webhookUrl}</TableCell>
        <TableCell align="left">{row.authorizationToken}</TableCell>
        <TableCell align="left">{new Date(row.updatedAt).toLocaleString()}</TableCell>
        <TableCell align="left">{new Date(row.createdAt).toLocaleString()}</TableCell>
        <TableCell align="left">
          <Button onClick={() => deleteTeam(row.id)}>Delete Team</Button>
        </TableCell>
        <TableCell align="left">
          <Button onClick={() => setOpenUpdate(true)}>Update Team</Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Team Events
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Event Id</TableCell>
                    <TableCell align="left">Event Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.WebhookEvents?.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell component="th" scope="row">{event.id}</TableCell>
                      <TableCell>{event.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <UpdateWebhookTeam open={openUpdate} setOpen={setOpenUpdate} getAllTeams={getAllTeams} data={row} />
    </React.Fragment>
  );
}

function TeamsControl() {
  const [allWebhookTeams, setAllWebhookTeams] = useState([]);
  const [openNewWebhookTeamModal, setOpenNewWebhookTeamModal] = useState(false);

  const getAllWebhookTeams = useCallback(async () => {
    const { data } = await network.get('/api/v1/webhooks/admin/teams');
    setAllWebhookTeams(data);
  }, []);

  useEffect(() => {
    getAllWebhookTeams();
  }, [getAllWebhookTeams]);

  return (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>Teams Management Area</Typography>
      <AddWebhookTeam open={openNewWebhookTeamModal} setOpen={setOpenNewWebhookTeamModal} getAllTeams={getAllWebhookTeams} />
      <Button variant="outlined" sx={{ mb: 2 }} onClick={() => setOpenNewWebhookTeamModal(true)}>Add New Team</Button>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Id</TableCell>
              <TableCell align="left">Team Id</TableCell>
              <TableCell align="left">Webhook Url</TableCell>
              <TableCell align="left">Authorization Token</TableCell>
              <TableCell align="left">Created At</TableCell>
              <TableCell align="left">Updated At</TableCell>
              <TableCell align="left" />
              <TableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {allWebhookTeams.map((team) => (
              <Row key={team.id} row={team} getAllTeams={getAllWebhookTeams} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TeamsControl;
