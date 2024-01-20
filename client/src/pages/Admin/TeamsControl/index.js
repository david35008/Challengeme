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
import network from '../../../services/network';
import AddTeam from '../../../components/Modals/AddTeam';
import AddTeamMembers from '../../../components/Modals/AddTeamMembers';
import './style.css';

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
  const { row, getAllTeams, handleAddMemberModal } = props;
  const [open, setOpen] = useState(false);

  const removeUserFromTeam = useCallback(
    async (user) => {
      try {
        const isDeleteOk = prompt("What's your favorite cocktail drink?");
        if (isDeleteOk != null) {
          await network.delete(
            `/api/v1/teams/remove-user/${row.id}?userId=${user}`,
          );
          getAllTeams();
        }
      } catch (error) {}
      // eslint-disable-next-line
    },
    [row],
  );

  const changeUserPermissionOnTeam = useCallback(
    async (user, permission) => {
      try {
        const isDeleteOk = prompt("What's your favorite cocktail drink?");
        if (isDeleteOk != null) {
          const newPermission = permission === 'student' ? 'teacher' : 'student';
          await network.patch(`/api/v1/teams/permission/${row.id}`, {
            userId: user,
            permission: newPermission,
          });
          getAllTeams();
        }
      } catch (error) {}
      // eslint-disable-next-line
    },
    [row],
  );

  const deleteTeam = useCallback(async (team) => {
    try {
      const isDeleteOk = prompt("What's your favorite cocktail drink?");
      if (isDeleteOk != null) {
        await network.delete(`/api/v1/teams/remove-team/${team}`);
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
        <StyledTableCell align="left">{row.name}</StyledTableCell>
        <StyledTableCell align="left">{row.externalId}</StyledTableCell>
        <StyledTableCell align="left">
          {new Date(row.createdAt).toString().substring(0, 24)}
        </StyledTableCell>
        <StyledTableCell align="left">
          <Button onClick={() => deleteTeam(row.id)}>Delete Team</Button>
        </StyledTableCell>
        <StyledTableCell align="left">
          <Button onClick={() => handleAddMemberModal(row.id)}>
            Add Team Members
          </Button>
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
                Team Members
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>User Id</StyledTableCell>
                    <StyledTableCell align="left">User Name</StyledTableCell>
                    <StyledTableCell align="left">Permission</StyledTableCell>
                    <StyledTableCell align="left" />
                    <StyledTableCell align="left" />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Users.map((user) => (
                    <StyledTableRow key={user.userName}>
                      <StyledTableCell component="th" scope="row">
                        {user.id}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {user.userName}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {user.UserTeam.permission}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        <Button
                          onClick={() => changeUserPermissionOnTeam(
                            user.id,
                            user.UserTeam.permission,
                          )}
                        >
                          Change User Permission On Team
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        <Button onClick={() => removeUserFromTeam(user.id)}>
                          Remove User From team
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}
function TeamsControl() {
  const [allTeams, setAllTeams] = useState([]);
  const [openNewTeamModal, setOpenNewTeamModal] = useState(false);
  const [teamNameForMember, setTeamNameForMember] = useState(false);
  const [openAddMemberModal, setOpenAddMemberModal] = useState(false);

  const getAllTeams = useCallback(async () => {
    try {
      const { data: allTeamsFromServer } = await network.get(
        '/api/v1/teams/all-teams',
      );
      setAllTeams(allTeamsFromServer);
    } catch (error) {}
    // eslint-disable-next-line
  }, []);

  const addNewTeam = useCallback(() => {
    setOpenNewTeamModal(true);
    // eslint-disable-next-line
  }, []);

  const handleAddMemberModal = useCallback((team) => {
    setTeamNameForMember(team);
    setOpenAddMemberModal(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <div className="generic-page" style={{ textAlign: 'center' }}>
      <h1 className="team-control-title">Teams Management Area</h1>
      <AddTeam
        open={openNewTeamModal}
        setOpen={setOpenNewTeamModal}
        getAllTeams={getAllTeams}
      />
      <AddTeamMembers
        open={openAddMemberModal}
        setOpen={setOpenAddMemberModal}
        getAllTeams={getAllTeams}
        teamNameForMember={teamNameForMember}
      />

      <Button
        variant="outlined"
        style={{ marginBottom: '20px' }}
        onClick={addNewTeam}
      >
        Add New Team
      </Button>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">External Id</StyledTableCell>
              <StyledTableCell align="left">Created At</StyledTableCell>
              <StyledTableCell align="left" />
              <StyledTableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {allTeams
              && allTeams.map((team) => (
                <Row
                  key={team.id + team.name}
                  row={team}
                  getAllTeams={getAllTeams}
                  handleAddMemberModal={handleAddMemberModal}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TeamsControl;
