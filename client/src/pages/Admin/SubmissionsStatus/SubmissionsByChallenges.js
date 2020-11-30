import React, { useEffect, useState } from 'react';
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
import Loading from '../../../components/Loading';
import network from '../../../services/network';
import '../Admin.css';

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
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <StyledTableRow className={classes.root}>
        <>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell align="left">
          {row.Submissions.length}
        </StyledTableCell>
        <StyledTableCell align="left">
          {new Date(row.createdAt).toString().substring(0, 24)}
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                More Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Submission Id</StyledTableCell>
                    <StyledTableCell align="left">User Name</StyledTableCell>
                    <StyledTableCell align="left">Solution Repository</StyledTableCell>
                    <StyledTableCell align="left">Created At</StyledTableCell>
                    <StyledTableCell align="left">State</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Submissions
                    && row.Submissions.map((userBySubmission) => (
                      <StyledTableRow key={userBySubmission.id}>
                        <StyledTableCell component="th" scope="row">
                          {userBySubmission.id}
                        </StyledTableCell>
                        <StyledTableCell>
                          {' '}
                          {userBySubmission.User.userName}
                          {' '}
                        </StyledTableCell>
                        <StyledTableCell>
                          {' '}
                          {userBySubmission.solutionRepository}
                          {' '}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {new Date(userBySubmission.createdAt).toString().substring(0, 24)}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <div
                            style={
                              userBySubmission.state === 'SUCCESS'
                                ? { color: 'green' }
                                : userBySubmission.state === 'FAIL'
                                  ? { color: 'red' }
                                  : { color: 'black' }
                            }
                          >
                            {userBySubmission.state}
                          </div>
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

const SubmissionsByChallenges = ({ darkMode }) => {
  const [dataPresent, setDataPresent] = useState([]);
  const [last, setLast] = useState(false);

  const getChallengesSubmissions = async () => {
    const { data: challengesSubmissionsFromServer } = await network.get(
      `/api/v1/insights/admin/challenges-submissions?onlyLast=${last}`,
    );
    setDataPresent(challengesSubmissionsFromServer);
  };

  useEffect(() => {
    getChallengesSubmissions();
    // eslint-disable-next-line
  }, [last]);

  const filteredLast = () => {
    setLast((prev) => !prev);
  };

  return (
    <div>
      <div className="title-and-button">
        <h2>This is All The Submissions By Challenges Page</h2>
        <Button variant={darkMode ? 'contained' : 'outlined'} onClick={filteredLast}>
          {last ? 'Show All' : 'Show Only Last'}
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Challenge Name</StyledTableCell>
              <StyledTableCell align="left">Submissions Count</StyledTableCell>
              <StyledTableCell align="left">Created At</StyledTableCell>
            </TableRow>
          </TableHead>
          {dataPresent.length > 0 ? (
            dataPresent.map((challenge) => (
              <Row
                key={challenge.name + challenge.createdAt}
                row={challenge}
                last={last}
              />
            ))
          ) : (
            <Loading />
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default SubmissionsByChallenges;
