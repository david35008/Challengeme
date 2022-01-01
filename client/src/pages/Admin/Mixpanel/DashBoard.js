import React, { useState, useCallback } from 'react';
import { XGrid } from '@material-ui/x-grid';
import {
  Button, Input, InputLabel, TextField, MenuItem, Grid, CircularProgress,
} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import network from '../../../services/network';
import { events } from '../../../config/Events';
import Alert from '../../../components/Buttons/Alert';
import '../../../styles/MixpanelDashBoard.css';

function isObject(element) {
  return Object.getPrototypeOf(element) === Object.getPrototypeOf(new Object());
}

export default function MixPanelDashBoard() {
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState('User On Forgot Password Page 2');
  const [startDate, setStartDate] = useState(Date.now() - 1000 * 60 * 60 * 24 * 7);
  const [endDate, setEndDate] = useState(Date.now());
  const [limit, setLimit] = useState(5);
  const [eventsData, setEventsData] = useState([]);
  const [alertType, setAlertType] = useState('error');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Error Occurred');

  const editData = useCallback((data) => {
    data.forEach(event => {
      const object = event
      for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
          const element = object[key];
          if (element && isObject(element)) {
            event[key] = JSON.stringify(element, null, 2)
          }
        }
      }
    })
    return data
    // eslint-disable-next-line
  }, [])

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await network.get(`/api/v1/insights/mixpanel?from=${startDate}&to=${endDate}&event=${event}&limit=${limit}`);
      const editedData = editData(data)
      setEventsData(editedData);
      setLoading(false);
      setAlertType('success');
      setAlertMessage(`Fond ${data.length} Events`);
      setShowAlert(true);
    } catch (error) {
      setLoading(false);
      setAlertMessage(error.response ? error.response.data.message : error);
      setShowAlert(true);
    }
    // eslint-disable-next-line
  }, [event, startDate, endDate, limit])

  const getAllKeys = useCallback((events) => {
    const keysSet = new Set()
    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      const eventKeys = Object.keys(event)
      for (let j = 0; j < eventKeys.length; j++) {
        keysSet.add(eventKeys[j])
      }
    }
    const arrayKeys = [...keysSet].sort().reverse()
    return arrayKeys.map((event) => ({
        field: event,
        headerName: event,
        width: 150,
      }))
    // eslint-disable-next-line
  }, [])

  const data = eventsData.length ? {
    columns: getAllKeys(eventsData),
    rows: [...eventsData],
  } : [];

  return (
    <div className="Mixpanel-DashBoard-container">
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <TextField
          id="standard-select-currency"
          select
          label="Select Event"
          value={event}
          onChange={(event) => setEvent(event.target.value)}
        >
          {events.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="from-picker-dialog"
            label="From Date"
            format="MM/dd/yyyy"
            value={parseInt(startDate)}
            minDate={946677600000}
            maxDate={endDate}
            onChange={((event) => setStartDate(event.getTime()))}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="to-picker-dialog"
            label="To Date"
            format="MM/dd/yyyy"
            minDate={startDate}
            maxDate={Date.now()}
            value={parseInt(endDate)}
            onChange={((event) => setEndDate(event.getTime()))}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <div>
          <InputLabel htmlFor="limit">Limit</InputLabel>
          <Input id="limit" placeholder="limit of events" value={limit} onChange={(event) => setLimit(event.target.value)} />
        </div>
        <Button onClick={fetchEvents}>Search</Button>
      </Grid>
      {!loading
        ? eventsData.length
          ? (
            <XGrid
              {...data}
              loading={!data.rows.length}
              rowsPerPageOptions={[5, 10, 25, 50, 100]}
            />
          )
          : <h1 className="not-found">There Is No Events On The Requested Parameters</h1>

        : (
          <div className="circle-process-container">
            <CircularProgress className="circle-process" />
          </div>
        )}
      {showAlert && (
        <Alert
          type={alertType}
          open={showAlert}
          setOpen={setShowAlert}
          text={alertMessage}
        />
      )}
    </div>
  );
}
