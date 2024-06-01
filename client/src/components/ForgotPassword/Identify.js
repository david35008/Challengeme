import React from 'react';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles(() => ({
  titleUserNameForgotPass: {
    marginTop: '130px',
    width: '320px',
  },
  userNameForgotPass: {
    marginTop: '20px',
    marginBottom: '10px',
    width: '320px',
  },
}));
export default function Identify(props) {
  const classes = useStyles();

  const { data, handleChange } = props;

  return (
    <div className={classes.titleUserNameForgotPass}>
      Enter your User Name :
      <FormControl className={classes.userNameForgotPass}>
        <InputLabel style={{ color: 'grey' }}>User Name</InputLabel>
        <Input
          id="userName"
          type="text"
          value={data.userName}
          required
          onChange={handleChange('userName')}
          endAdornment={(
            <InputAdornment style={{ opacity: '0.7' }} position="end">
              <AccountCircleIcon />
            </InputAdornment>
          )}
        />
      </FormControl>
    </div>
  );
}
