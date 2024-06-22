import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/system';
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
import Loading from '../../../../components/Loading';
import network from '../../../../services/network';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const useRowStyles = styled({
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

  return (
    <React.Fragment>
      <StyledTableRow className={classes.root}>
        <>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell align="left">{row.Submissions.length}</StyledTableCell>
        <StyledTableCell align="left">
          {new Date(row.createdAt).toString().substring(0, 24)}
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
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Submission Id</StyledTableCell>
                    <StyledTableCell align="left">User Name</StyledTableCell>
                    <StyledTableCell align="left">
                      Solution Repository
                    </StyledTableCell>
                    <StyledTableCell align="left">Created At</StyledTableCell>
                    <StyledTableCell align="left">State</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Submissions &&
                    row.Submissions.map((userBySubmission) => (
                      <StyledTableRow key={userBySubmission.id}>
                        <StyledTableCell component="th" scope="row">
                          {userBySubmission.id}
                        </StyledTableCell>
                        <StyledTableCell>
                          {userBySubmission.User.userName}
                        </StyledTableCell>
                        <StyledTableCell>
                          {userBySubmission.solutionRepository}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {new Date(userBySubmission.createdAt)
                            .toString()
                            .substring(0, 24)}
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

const SubmissionsByChallenges = () => {
  const [dataPresent, setDataPresent] = useState([]);
  const [last, setLast] = useState(false);
  const { id } = useParams();

  const getChallengesSubmissions = useCallback(async () => {
    const { data: challengesSubmissionsFromServer } = await network.get(
      `/api/v1/insights/teacher/challenges-submissions/${id}?onlyLast=${last}`,
    );
    setDataPresent(challengesSubmissionsFromServer);
    // eslint-disable-next-line
  }, [id, last]);

  useEffect(() => {
    getChallengesSubmissions();
  }, [last]);

  const filteredLast = useCallback(() => {
    setLast((prev) => !prev);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="title-and-button">
        <h2>This is All The Submissions By Challenges Page</h2>
        <Button variant="outlined" onClick={filteredLast}>
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
              <Row key={challenge.name + challenge.createdAt} row={challenge} />
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
