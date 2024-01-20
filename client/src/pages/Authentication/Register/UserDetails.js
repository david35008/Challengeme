import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import PeopleIcon from '@material-ui/icons/People';
import Email from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';

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
