import React, { useEffect, useState, useCallback } from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Loading from '../../../components/Loading';
import network from '../../../services/network';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  '&.MuiTableCell-body': {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const RowRoot = styled(TableRow)({
  '& > *': {
    borderBottom: 'unset',
  },
});

function Row({ row }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledTableRow>
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
        <StyledTableCell align="left">{row.firstName}</StyledTableCell>
        <StyledTableCell align="left">{row.lastName}</StyledTableCell>
        <StyledTableCell align="left">{row.phoneNumber}</StyledTableCell>
        <StyledTableCell align="left">{row.email}</StyledTableCell>
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
                    <StyledTableCell>Challenge Name</StyledTableCell>
                    <StyledTableCell align="left">
                      Solution Repository
                    </StyledTableCell>
                    <StyledTableCell align="left">Status</StyledTableCell>
                    <StyledTableCell align="left">Created At</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Submissions &&
                    row.Submissions.map((submission) => (
                      <StyledTableRow key={submission.id}>
                        <StyledTableCell component="th" scope="row">
                          {submission.Challenge.name}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {submission.solutionRepository}
                        </StyledTableCell>
                        <StyledTableCell>
                          <div
                            style={{
                              color:
                                submission.state === 'SUCCESS'
                                  ? 'green'
                                  : submission.state === 'FAIL'
                                    ? 'red'
                                    : 'black',
                            }}
                          >
                            {submission.state}
                          </div>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {new Date(submission.createdAt)
                            .toString()
                            .substring(0, 24)}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}

const SubmissionsByUsers = () => {
  const [data, setData] = useState([]);
  const [last, setLast] = useState(false);

  const fetchData = useCallback(async () => {
    const { data } = await network.get(
      `/api/v1/insights/admin/users-submissions?onlyLast=${last}`,
    );
    setData(data);
  }, [last]);

  const filteredLast = useCallback(() => {
    setLast((prev) => !prev);
  }, []);

  useEffect(() => {
    fetchData();
  }, [last, fetchData]);

  return (
    <div className="generic-page">
      <div className="title-and-button">
        <h1>This is All The Submissions By Users Page</h1>
        <Button variant="outlined" onClick={filteredLast}>
          {last ? 'Show All' : 'Show Only Last'}
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>User Name</StyledTableCell>
              <StyledTableCell align="left">First Name</StyledTableCell>
              <StyledTableCell align="left">Last Name</StyledTableCell>
              <StyledTableCell align="left">Phone Number</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data.map((user) => <Row key={user.userName} row={user} />)
            ) : (
              <Loading />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SubmissionsByUsers;
