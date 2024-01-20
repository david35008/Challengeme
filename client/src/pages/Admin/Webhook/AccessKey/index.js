import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import network from '../../../../services/network';
import AddAccessKey from '../../../../components/Modals/AddAccessKey';
import UpdateAccessKey from '../../../../components/Modals/UpdateAccessKey';
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

const StyledTableCellKey = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    maxWidth: '800px',
    overflowX: 'auto',
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
  const { row, getAllAccessKeys } = props;
  const [open, setOpen] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const deleteAccessKey = useCallback(async (accessKey) => {
    try {
      const isDeleteOk = prompt("What's your favorite cocktail drink?");
      if (isDeleteOk != null) {
        await network.delete(`/api/v1/webhooks/admin/access-key/${accessKey}`);
        getAllAccessKeys();
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
        <StyledTableCell align="left">{row.entityName}</StyledTableCell>
        <StyledTableCell align="left">{row.email}</StyledTableCell>
        <StyledTableCell align="left">
          {new Date(row.createdAt).toString().substring(0, 24)}
        </StyledTableCell>
        <StyledTableCell align="left">
          {new Date(row.updatedAt).toString().substring(0, 24)}
        </StyledTableCell>
        <StyledTableCell align="left">
          <Button onClick={() => deleteAccessKey(row.id)}>
            Delete Access Key
          </Button>
        </StyledTableCell>
        <StyledTableCell align="left">
          <Button onClick={() => setOpenUpdateModal(true)}>
            Update Access Key
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
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Key</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCellKey component="th" scope="row">
                      {row.key}
                    </StyledTableCellKey>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
      <UpdateAccessKey
        open={openUpdateModal}
        setOpen={setOpenUpdateModal}
        data={{ entityName: row.entityName, email: row.email, id: row.id }}
        getAllAccessKeys={getAllAccessKeys}
      />
    </React.Fragment>
  );
}
function AccessKeyControl() {
  const [allAccessKeys, setAllAccessKeys] = useState([]);
  const [openNewAccessKeyModal, setOpenNewAccessKeyModal] = useState(false);

  const getAllAccessKeys = useCallback(async () => {
    try {
      const { data: allAccessKeysFromServer } = await network.get(
        '/api/v1/webhooks/admin/access-key',
      );
      setAllAccessKeys(allAccessKeysFromServer);
    } catch (error) {}
    // eslint-disable-next-line
  }, []);

  const addNewAccessKey = useCallback(() => {
    setOpenNewAccessKeyModal(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getAllAccessKeys();
  }, []);

  return (
    <div className="generic-page" style={{ textAlign: 'center' }}>
      <h1 className="team-control-title">Access Keys Management Area</h1>
      <AddAccessKey
        open={openNewAccessKeyModal}
        setOpen={setOpenNewAccessKeyModal}
        getAllAccessKeys={getAllAccessKeys}
      />
      <Button
        variant="outlined"
        style={{ marginBottom: '20px' }}
        onClick={addNewAccessKey}
      >
        Add New Access Key
      </Button>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Entity Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Created At</StyledTableCell>
              <StyledTableCell align="left">Updated At</StyledTableCell>
              <StyledTableCell align="left" />
              <StyledTableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {allAccessKeys
              && allAccessKeys.map((accessKey) => (
                <Row
                  key={accessKey.id}
                  row={accessKey}
                  getAllAccessKeys={getAllAccessKeys}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AccessKeyControl;
