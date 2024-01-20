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
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  const changePermissions = useCallback(async () => {
    try {
      const isUpdateOk = prompt("Who's your favorite student?");
      if (isUpdateOk != null) {
        const newPermission = row.permission === 'user' ? 'admin' : 'user';
        await network.patch('/api/v1/users/permission', {
          permission: newPermission,
          userName: row.userName,
        });
        props.getAllUsers();
      }
    } catch (error) {}
    // eslint-disable-next-line
  }, [row, props]);

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
          {row.userName}
        </StyledTableCell>
        <StyledTableCell align="left">
          {row.firstName}
          {' '}
          {row.lastName}
        </StyledTableCell>
        <StyledTableCell align="left">{row.email}</StyledTableCell>
        <StyledTableCell align="left">{row.githubAccount}</StyledTableCell>
        <StyledTableCell align="left">
          <div
            style={
              row.permission === 'user'
                ? { color: 'green' }
                : { color: 'red', fontSize: '20px', fontWeight: 'bold' }
            }
          >
            {row.permission}
          </div>
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
                More Details
              </Typography>
              <Button onClick={changePermissions}>Change Permissions </Button>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>User Id</StyledTableCell>
                    <StyledTableCell align="left">Phone Number</StyledTableCell>
                    <StyledTableCell align="left">Country</StyledTableCell>
                    <StyledTableCell align="left">City</StyledTableCell>
                    <StyledTableCell align="left">Birth Date</StyledTableCell>
                    <StyledTableCell align="left">
                      Security Question
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Reason Of Registration
                    </StyledTableCell>
                    <StyledTableCell align="left">Created At</StyledTableCell>
                    <StyledTableCell align="left">Updated At</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow key={row.userName}>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell>
                      {' '}
                      {row.phoneNumber}
                      {' '}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.country}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.city}</StyledTableCell>
                    <StyledTableCell align="left">
                      {new Date(row.birthDate).toDateString()}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.securityQuestion}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {' '}
                      {row.reasonOfRegistration}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {new Date(row.createdAt).toString().substring(0, 24)}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {new Date(row.updatedAt).toString().substring(0, 24)}
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

function UsersControl() {
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = useCallback(async () => {
    const { data: allUsersFromServer } = await network.get(
      '/api/v1/users/admin',
    );
    setAllUsers(allUsersFromServer);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="generic-page">
      <div className="align">
        <h1 className="user-control-title">This is Users Management Page</h1>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell>User Name</StyledTableCell>
                <StyledTableCell align="left">Full Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Github Account</StyledTableCell>
                <StyledTableCell align="left">Permission</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers
                && allUsers.map((user) => (
                  <Row
                    key={user.userName + user.id}
                    row={user}
                    getAllUsers={getAllUsers}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default UsersControl;
