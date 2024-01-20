import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
