import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import PeopleIcon from '@mui/icons-material/People';
import Email from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
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

function UserDetails({ handleChange, values }) {
  return (
    <Container className="containerUserDetails">
      <StyledFormControl>
        <InputLabel style={{ color: 'grey' }}>First Name</InputLabel>
        <Input
          id="firstName"
          type="text"
          value={values.firstName}
          required
          onChange={handleChange('firstName')}
          endAdornment={(
            <InputAdornment style={{ opacity: '0.7' }} position="end">
              <PersonIcon />
            </InputAdornment>
          )}
        />
      </StyledFormControl>
      <StyledFormControl>
        <InputLabel style={{ color: 'grey' }}>Last Name</InputLabel>
        <Input
          id="lastName"
          type="text"
          value={values.lastName}
          required
          onChange={handleChange('lastName')}
          endAdornment={(
            <InputAdornment style={{ opacity: '0.7' }} position="end">
              <PeopleIcon />
            </InputAdornment>
          )}
        />
      </StyledFormControl>
      <StyledFormControl>
        <InputLabel style={{ color: 'grey' }}>Username</InputLabel>
        <Input
          id="userName"
          type="text"
          value={values.userName}
          required
          onChange={handleChange('userName')}
          endAdornment={(
            <InputAdornment style={{ opacity: '0.7' }} position="end">
              <AccountCircleIcon />
            </InputAdornment>
          )}
        />
      </StyledFormControl>
      <StyledFormControl>
        <InputLabel style={{ color: 'grey' }}>Email</InputLabel>
        <Input
          id="email"
          type="email"
          value={values.email}
          required
          onChange={handleChange('email')}
          endAdornment={(
            <InputAdornment style={{ opacity: '0.7' }} position="end">
              <Email />
            </InputAdornment>
          )}
        />
      </StyledFormControl>
    </Container>
  );
}

export default UserDetails;
