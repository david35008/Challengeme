import React, { useEffect, useState, useCallback } from 'react';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import network from '../../../../services/network';
import AddWebhookEvent from '../../../../components/Modals/AddWebhookEvent';
import UpdateWebhookEvent from '../../../../components/Modals/UpdateWebhookEvent';

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

function Row({ row, getAllEvents }) {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const deleteAccessKey = useCallback(
    async (event) => {
      try {
        const isDeleteOk = prompt("What's your favorite cocktail drink?");
        if (isDeleteOk != null) {
          await network.delete(`/api/v1/webhooks/admin/events/${event}`);
          getAllEvents();
        }
      } catch (error) {}
    },
    [getAllEvents],
  );

  return (
    <>
      <StyledTableRow>
        <StyledTableCell component="th" scope="row">
          {row.id}
        </StyledTableCell>
        <StyledTableCell align="left">{row.name}</StyledTableCell>
        <StyledTableCell align="left">
          {new Date(row.createdAt).toString().substring(0, 24)}
        </StyledTableCell>
        <StyledTableCell align="left">
          {new Date(row.updatedAt).toString().substring(0, 24)}
        </StyledTableCell>
        <StyledTableCell align="left">
          <Button onClick={() => deleteAccessKey(row.id)}>Delete Event</Button>
        </StyledTableCell>
        <StyledTableCell align="left">
          <Button onClick={() => setOpenUpdateModal(true)}>Update Event</Button>
        </StyledTableCell>
      </StyledTableRow>
      <UpdateWebhookEvent
        open={openUpdateModal}
        setOpen={setOpenUpdateModal}
        data={{ name: row.name, id: row.id }}
        getAllEvents={getAllEvents}
      />
    </>
  );
}

function EventsControl() {
  const [allEvents, setAllEvents] = useState([]);
  const [openNewEventsModal, setOpenNewEventsModal] = useState(false);

  const getAllEvents = useCallback(async () => {
    try {
      const { data: allEventsFromServer } = await network.get(
        '/api/v1/webhooks/admin/events',
      );
      setAllEvents(allEventsFromServer);
    } catch (error) {}
  }, []);

  const addNewEvents = useCallback(() => {
    setOpenNewEventsModal(true);
  }, []);

  useEffect(() => {
    getAllEvents();
  }, [getAllEvents]);

  return (
    <div className="generic-page" style={{ textAlign: 'center' }}>
      <h1 className="team-control-title">Events Management Area</h1>
      <AddWebhookEvent
        open={openNewEventsModal}
        setOpen={setOpenNewEventsModal}
        getAllEvents={getAllEvents}
      />
      <Button
        variant="outlined"
        style={{ marginBottom: '20px' }}
        onClick={addNewEvents}
      >
        Add New Event
      </Button>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Created At</StyledTableCell>
              <StyledTableCell align="left">Updated At</StyledTableCell>
              <StyledTableCell align="left" />
              <StyledTableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {allEvents &&
              allEvents.map((accessKey) => (
                <Row
                  key={accessKey.id}
                  row={accessKey}
                  getAllEvents={getAllEvents}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EventsControl;
