import React, { useEffect, useState, useCallback } from 'react';
import { styled } from '@mui/system';
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
import AddAccessKey from '../../../../components/Modals/AddAccessKey';
import UpdateAccessKey from '../../../../components/Modals/UpdateAccessKey';
import './style.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableCellKey = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    maxWidth: '800px',
    overflowX: 'auto',
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

function Row({ row, getAllAccessKeys }) {
  const [open, setOpen] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const deleteAccessKey = useCallback(
    async (accessKey) => {
      try {
        const isDeleteOk = prompt("What's your favorite cocktail drink?");
        if (isDeleteOk != null) {
          await network.delete(
            `/api/v1/webhooks/admin/access-key/${accessKey}`,
          );
          getAllAccessKeys();
        }
      } catch (error) {}
    },
    [getAllAccessKeys],
  );

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
    </>
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
  }, []);

  const addNewAccessKey = useCallback(() => {
    setOpenNewAccessKeyModal(true);
  }, []);

  useEffect(() => {
    getAllAccessKeys();
  }, [getAllAccessKeys]);

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
            {allAccessKeys &&
              allAccessKeys.map((accessKey) => (
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
