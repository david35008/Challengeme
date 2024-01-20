import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import network from '../../../../services/network';
import AddWebhookTeam from '../../../../components/Modals/AddWebhookTeam';
import UpdateWebhookTeam from '../../../../components/Modals/UpdateWebhookTeam';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row, getAllTeams } = props;
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  const deleteTeam = useCallback(async (team) => {
    try {
      const isDeleteOk = prompt("What's your favorite cocktail drink?");
      if (isDeleteOk != null) {
        await network.delete(`/api/v1/webhooks/admin/teams/${team}`);
        getAllTeams();
      }
    } catch (error) {}
    // eslint-disable-next-line
  }, []);

  const classes = useRowStyles();
  return (
    <React.Fragment>
      <StyledTableRow className={classes.root}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.id}
        </StyledTableCell>
        <StyledTableCell align="left">{row.teamId}</StyledTableCell>
        <StyledTableCell align="left">{row.webhookUrl}</StyledTableCell>
        <StyledTableCell align="left">{row.authorizationToken}</StyledTableCell>
        <StyledTableCell align="left">
          {new Date(row.updatedAt).toString().substring(0, 24)}
        </StyledTableCell>
        <StyledTableCell align="left">
          {new Date(row.createdAt).toString().substring(0, 24)}
        </StyledTableCell>
        <StyledTableCell align="left">
          <Button onClick={() => deleteTeam(row.id)}>Delete Team</Button>
        </StyledTableCell>
        <StyledTableCell align="left">
          <Button onClick={() => setOpenUpdate(true)}>Update Team</Button>
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Team Events
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Event Id</StyledTableCell>
                    <StyledTableCell align="left">Event Name</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.WebhookEvents
                    && row.WebhookEvents.map((event) => (
                      <StyledTableRow key={event.id}>
                        <StyledTableCell component="th" scope="row">
                          {event.id}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {event.name}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
      <UpdateWebhookTeam
        open={openUpdate}
        setOpen={setOpenUpdate}
        getAllTeams={getAllTeams}
        data={{
          webhookUrl: row.webhookUrl,
          authorizationToken: row.authorizationToken,
          id: row.id,
        }}
      />
    </React.Fragment>
  );
}
function TeamsControl() {
  const [allWebhookTeams, setAllWebhookTeams] = useState([]);
  const [openNewWebhookTeamModal, setOpenNewWebhookTeamModal] = useState(false);

  const getAllWebhookTeams = useCallback(async () => {
    try {
      const { data: allTeamsFromServer } = await network.get(
        '/api/v1/webhooks/admin/teams',
      );
      setAllWebhookTeams(allTeamsFromServer);
    } catch (error) {}
    // eslint-disable-next-line
  }, []);

  const addNewWebhookTeam = useCallback(() => {
    setOpenNewWebhookTeamModal(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getAllWebhookTeams();
  }, []);

  return (
    <div className="generic-page" style={{ textAlign: 'center' }}>
      <h1 className="team-control-title">Teams Management Area</h1>
      <AddWebhookTeam
        open={openNewWebhookTeamModal}
        setOpen={setOpenNewWebhookTeamModal}
        getAllTeams={getAllWebhookTeams}
      />
      <Button
        variant="outlined"
        style={{ marginBottom: '20px' }}
        onClick={addNewWebhookTeam}
      >
        Add New Team
      </Button>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Team Id</StyledTableCell>
              <StyledTableCell align="left">Webhook Url</StyledTableCell>
              <StyledTableCell align="left">
                Authorization Token
              </StyledTableCell>
              <StyledTableCell align="left">Created At</StyledTableCell>
              <StyledTableCell align="left">Updated At</StyledTableCell>
              <StyledTableCell align="left" />
              <StyledTableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {allWebhookTeams
              && allWebhookTeams.map((team) => (
                <Row
                  key={team.id}
                  row={team}
                  getAllTeams={getAllWebhookTeams}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TeamsControl;
