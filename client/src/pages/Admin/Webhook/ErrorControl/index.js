import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles, withStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import network from '../../../../services/network';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableCellKey = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    maxWidth: '800px',
    overflowX: 'auto',
    fontSize: 14,
    whiteSpace: 'pre',
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
  const { row, getAllErrors } = props;
  const [open, setOpen] = useState(false);

  const deleteError = useCallback(async (error) => {
    try {
      const isDeleteOk = prompt("What's your favorite cocktail drink?");
      if (isDeleteOk != null) {
        await network.delete(`/api/v1/webhooks/admin/errors/${error}`);
        getAllErrors();
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
        <StyledTableCell align="left">{row.webhookId}</StyledTableCell>
        <StyledTableCell align="left">
          {row.WebhookTeam ? row.WebhookTeam.Team.name : 'admin'}
        </StyledTableCell>
        <StyledTableCell align="left">
          {row.WebhookTeam
            ? row.WebhookTeam.Team.WebhookAccessKey.entityName
            : 'admin'}
        </StyledTableCell>
        <StyledTableCell align="left">{row.statusCode}</StyledTableCell>
        <StyledTableCell align="left">{row.message}</StyledTableCell>
        <StyledTableCell align="left">
          {new Date(row.createdAt).toDateString()}
        </StyledTableCell>
        <StyledTableCell align="left">
          {new Date(row.updatedAt).toDateString()}
        </StyledTableCell>
        <StyledTableCell align="left">
          <Button onClick={() => deleteError(row.id)}>Delete error</Button>
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Data</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCellKey component="th" scope="row">
                      {process.env.NODE_ENV === 'development'
                        ? JSON.stringify(row.data, null, 2)
                        : JSON.stringify(JSON.parse(row.data), null, 2)}
                    </StyledTableCellKey>
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
function ErrorControl() {
  const [allErrors, setAllErrors] = useState([]);

  const getAllErrors = useCallback(async () => {
    try {
      const { data: allErrorsFromServer } = await network.get(
        '/api/v1/webhooks/admin/errors',
      );
      setAllErrors(allErrorsFromServer);
    } catch (error) {}
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getAllErrors();
  }, []);

  return (
    <div className="generic-page" style={{ textAlign: 'center' }}>
      <h1 className="team-control-title">Errors Management Area</h1>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Webhook Id</StyledTableCell>
              <StyledTableCell align="left">Team</StyledTableCell>
              <StyledTableCell align="left">Entity</StyledTableCell>
              <StyledTableCell align="left">Status Code</StyledTableCell>
              <StyledTableCell align="left">Message</StyledTableCell>
              <StyledTableCell align="left">Created At</StyledTableCell>
              <StyledTableCell align="left">Updated At</StyledTableCell>
              <StyledTableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {allErrors
              && allErrors.map((error) => (
                <Row key={error.id} row={error} getAllErrors={getAllErrors} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ErrorControl;
