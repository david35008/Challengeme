import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles, withStyles } from '@mui/styles';
import Cookies from 'js-cookie';
import mixpanel from 'mixpanel-browser';
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
import { useParams } from 'react-router-dom';
import network from '../../../../services/network';
import AddTeamMembers from '../../../../components/Modals/AddTeamMembers';
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
  const {
    row, getAllTeams, teamId, teamName,
  } = props;
  const [open, setOpen] = useState(false);

  const removeUserFromTeam = useCallback(
    async (user) => {
      try {
        const isChangeOk = window.confirm(
          `Are you sure you want to remove ${row.userName} from ${teamName} team ?`,
        );
        if (isChangeOk) {
          await network.delete(
            `/api/v1/teams/remove-user/${teamId}?userId=${user}`,
          );
          getAllTeams();
        }
      } catch (error) {}
      // eslint-disable-next-line
    },
    [row, teamName, teamId],
  );

  const changeUserPermissionToBeTeacher = useCallback(
    async (user) => {
      try {
        const isChangeOk = window.confirm(
          `Are you sure you want to give ${row.userName}, teacher permissions on ${teamName} team?`,
        );
        if (isChangeOk) {
          await network.patch(`/api/v1/teams/teacher-permission/${teamId}`, {
            userId: user,
          });
          getAllTeams();
        }
      } catch (error) {}
      // eslint-disable-next-line
    },
    [row, teamId, teamName],
  );

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
        <StyledTableCell align="left">
          {row.firstName + row.lastName}
        </StyledTableCell>
        <StyledTableCell align="left">{row.userName}</StyledTableCell>
        <StyledTableCell align="left">
          {row.UserTeam.permission}
        </StyledTableCell>
        <StyledTableCell align="left">{row.phoneNumber}</StyledTableCell>
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
                    {row.UserTeam.permission === 'student' && (
                      <StyledTableCell>Give Teacher Permission</StyledTableCell>
                    )}
                    <StyledTableCell align="left">
                      Remove
                      {row.UserTeam.permission}
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow key={row.userName}>
                    {row.UserTeam.permission === 'student' && (
                      <StyledTableCell component="th" scope="row">
                        <Button
                          onClick={() => changeUserPermissionToBeTeacher(row.id)}
                        >
                          CLick
                        </Button>
                      </StyledTableCell>
                    )}
                    <StyledTableCell component="th" scope="row">
                      <Button onClick={() => removeUserFromTeam(row.id)}>
                        Click
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}
function TeamsControl({ teamName }) {
  const { id } = useParams();

  const [allMembers, setAllMembers] = useState([]);
  const [teamNameForMember, setTeamNameForMember] = useState(false);
  const [openAddMemberModal, setOpenAddMemberModal] = useState(false);

  const getAllTeamMembers = useCallback(async () => {
    try {
      const { data: allTeamsFromServer } = await network.get(
        `/api/v1/teams/teacher-area/${id}`,
      );
      setAllMembers(allTeamsFromServer.Users);
    } catch (error) {}
    // eslint-disable-next-line
  }, [id]);

  const handleAddMemberModal = useCallback((team) => {
    setTeamNameForMember(team);
    setOpenAddMemberModal(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getAllTeamMembers();
    const user = Cookies.get('userName');
    mixpanel.track('User On Team Control Teacher Area', {
      User: `${user}`,
      Team: id,
    });
  }, [id]);

  return (
    <div className="generic-page">
      <h1 className="team-control-title-page">
        Team
        {teamName}
        {' '}
        Management
      </h1>
      <AddTeamMembers
        open={openAddMemberModal}
        setOpen={setOpenAddMemberModal}
        getAllTeams={getAllTeamMembers}
        teamNameForMember={teamNameForMember}
        isTeacher
      />
      <div className="team-control-add-members">
        <Button variant="outlined" onClick={() => handleAddMemberModal(id)}>
          Add Team Members
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">userName</StyledTableCell>
              <StyledTableCell align="left">Permission</StyledTableCell>
              <StyledTableCell align="left">Phone Number</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allMembers
              && allMembers.map((user) => (
                <Row
                  key={user.id + user.userName}
                  row={user}
                  teamId={id}
                  teamName={teamName}
                  getAllTeams={getAllTeamMembers}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TeamsControl;
