import React from 'react';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import PeopleIcon from '@mui/icons-material/People';
import Email from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';

const useStyles = makeStyles(() => ({
  firstName: {
    marginTop: '70px',
    marginBottom: '30px',
    width: '320px',
  },
  lastName: {
    marginBottom: '30px',
    width: '320px',
  },
  userName: {
    marginBottom: '30px',
    width: '320px',
  },
  email: {
    width: '320px',
  },
}));
function UserDetails({ handleChange, values }) {
  const classes = useStyles();

  return (
    <div className="containerUserDetails">
      <FormControl className={classes.firstName}>
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
      </FormControl>
      <FormControl className={classes.lastName}>
        <InputLabel style={{ color: 'grey' }}>last Name</InputLabel>
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
      </FormControl>
      <FormControl className={classes.userName}>
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
      </FormControl>
      <FormControl className={classes.email}>
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
      </FormControl>
    </div>
  );
}

export default UserDetails;
