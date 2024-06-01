import React from 'react';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PhoneIcon from '@mui/icons-material/Phone';

const useStyles = makeStyles(() => ({
  country: {
    marginTop: '70px',
    marginBottom: '30px',
    width: '320px',
  },
  city: {
    marginBottom: '30px',
    width: '320px',
  },
  birthDate: {
    marginBottom: '30px',
    width: '320px',
    appearance: 'none',
    fontFamily: 'Helvetica, arial, sans-serif',
    border: 'transparent',
    borderBottom: '1.5px solid gray',
    '&:focus': {
      outline: 'none',
    },
  },
  phoneNumber: {
    width: '320px',
  },
}));
function PersonalDetails({ values, handleChange }) {
  const classes = useStyles();

  return (
    <div className="containerPersonalDetails">
      <FormControl className={classes.country}>
        <InputLabel style={{ color: 'grey' }}>Country</InputLabel>
        <Input
          id="country"
          type="text"
          value={values.country}
          required
          onChange={handleChange('country')}
          endAdornment={(
            <InputAdornment style={{ opacity: '0.7' }} position="end">
              <PublicIcon />
            </InputAdornment>
          )}
        />
      </FormControl>
      <FormControl className={classes.city}>
        <InputLabel style={{ color: 'grey' }}>City</InputLabel>
        <Input
          id="city"
          type="text"
          value={values.city}
          required
          onChange={handleChange('city')}
          endAdornment={(
            <InputAdornment style={{ opacity: '0.7' }} position="end">
              <LocationCityIcon />
            </InputAdornment>
          )}
        />
      </FormControl>
      <label
        style={{
          marginRight: '250px',
          marginBottom: '5px',
          color: 'gray',
        }}
      >
        Birth Date
      </label>
      <input
        className={classes.birthDate}
        id="birthDate"
        type="date"
        value={values.birthDate}
        onChange={handleChange('birthDate')}
      />

      <FormControl className={classes.phoneNumber}>
        <InputLabel style={{ color: 'grey' }}>Phone Number</InputLabel>
        <Input
          id="phoneNumber"
          type="text"
          value={values.phoneNumber}
          required
          onChange={handleChange('phoneNumber')}
          endAdornment={(
            <InputAdornment style={{ opacity: '0.7' }} position="end">
              <PhoneIcon />
            </InputAdornment>
          )}
        />
      </FormControl>
    </div>
  );
}
export default PersonalDetails;
