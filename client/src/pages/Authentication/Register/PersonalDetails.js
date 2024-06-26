import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/system';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px',
  marginTop: '70px',
});

const StyledFormControl = styled(FormControl)({
  width: '320px',
});

const BirthDateInput = styled('input')({
  width: '320px',
  marginBottom: '30px',
  appearance: 'none',
  fontFamily: 'Helvetica, Arial, sans-serif',
  border: 'transparent',
  borderBottom: '1.5px solid gray',
  '&:focus': {
    outline: 'none',
  },
});

function PersonalDetails({ values, handleChange }) {
  return (
    <Container className="containerPersonalDetails">
      <StyledFormControl>
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
      </StyledFormControl>
      <StyledFormControl>
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
      </StyledFormControl>
      <label
        style={{
          marginRight: '250px',
          marginBottom: '5px',
          color: 'gray',
        }}
      >
        Birth Date
      </label>
      <BirthDateInput
        id="birthDate"
        type="date"
        value={values.birthDate}
        onChange={handleChange('birthDate')}
      />
      <StyledFormControl>
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
      </StyledFormControl>
    </Container>
  );
}

export default PersonalDetails;
