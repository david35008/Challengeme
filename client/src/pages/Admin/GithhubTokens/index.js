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
import network from '../../../services/network';
import AddToken from '../../../components/Modals/AddToken';
import './style.css';

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

const useRowStyles = styled('div')({
  '& > *': {
    borderBottom: 'unset',
  },
});

function Row({ row, getAllTokens }) {
  const [open, setOpen] = useState(false);

  const deleteToken = useCallback(
    async (token) => {
      try {
        const isDeleteOk = prompt("What's your favorite cocktail drink?");
        if (isDeleteOk != null) {
          await network.delete(`/api/v1/git/${token}`);
          getAllTokens();
        }
      } catch (error) {}
    },
    [getAllTokens],
  );

  const updateToken = useCallback(
    async (token, status) => {
      try {
        const isUpdateOk = prompt("Who's your favorite student?");
        if (isUpdateOk != null) {
          const newStatus = status === 'blocked' ? 'available' : 'blocked';
          await network.patch('/api/v1/git/', { token, status: newStatus });
          getAllTokens();
        }
      } catch (error) {}
    },
    [getAllTokens],
  );

  const classes = useRowStyles();
  return (
    <React.Fragment>
      <StyledTableRow className={classes}>
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
        <StyledTableCell align="left">{row.token}</StyledTableCell>
        <StyledTableCell align="left">{row.status}</StyledTableCell>
        <StyledTableCell align="left">
          <div style={row.active ? { color: 'green' } : { color: 'red' }}>
            {`${row.active}`}
          </div>
        </StyledTableCell>
        <StyledTableCell align="left">{row.gitAccount}</StyledTableCell>
        <StyledTableCell align="left">{row.actionsLimit}</StyledTableCell>
        <StyledTableCell align="left">
          {new Date(row.updatedAt).toString().substring(0, 24)}
        </StyledTableCell>
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
                Edit Area
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <StyledTableRow key={row.userName}>
                    <StyledTableCell component="th" scope="row">
                      <Button
                        onClick={() => updateToken(row.token, row.status)}
                      >
                        Change Status
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <Button onClick={() => deleteToken(row.token)}>
                        Delete Token
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      Remaining:
                      {' '}
                      {row.remaining ? row.remaining : 'Not Active'}
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

const GithubTokens = () => {
  const [allTokens, setAllTokens] = useState([]);
  const [open, setOpen] = useState(false);

  const getAllTokens = useCallback(async () => {
    try {
      const { data: allTokensFromServer } = await network.get('/api/v1/git/');
      setAllTokens(allTokensFromServer);
    } catch (error) {}
  }, []);

  const addNewToken = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    getAllTokens();
  }, [getAllTokens]);

  return (
    <div className="generic-page" style={{ textAlign: 'center' }}>
      <h1 className="github-token-title">Github Tokens Management Area</h1>
      <AddToken open={open} setOpen={setOpen} getAllTokens={getAllTokens} />
      <Button
        variant="outlined"
        style={{ marginBottom: '20px' }}
        onClick={addNewToken}
      >
        Add New Token
      </Button>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Token</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Active</StyledTableCell>
              <StyledTableCell align="left">Github Account</StyledTableCell>
              <StyledTableCell align="left">Actions Limit</StyledTableCell>
              <StyledTableCell align="left">Created At</StyledTableCell>
              <StyledTableCell align="left">Updated At</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allTokens &&
              allTokens.map((token) => (
                <Row
                  key={token.token}
                  row={token}
                  getAllTokens={getAllTokens}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default GithubTokens;
