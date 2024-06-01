import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles(() => ({
  reason: {
    marginTop: '140px',
    marginBottom: '30px',
    width: '320px',
  },
  github: {
    width: '320px',
  },
}));
function Extras({ values, handleChange }) {
  const classes = useStyles();

  return (
    <div className="containerExtra">
      <FormControl className={classes.reason}>
        <InputLabel id="demo-mutiple-checkbox-label">
          Choose your sign-up reason...
        </InputLabel>
        <Select
          id="signUpReason"
          className={classes.reason}
          value={values.signUpReason}
          onChange={handleChange('signUpReason')}
        >
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Challenge Myself">Challenge Myself</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.github}>
        <InputLabel style={{ color: 'grey' }}>
          Enter your GitHub Account Username
        </InputLabel>
        <Input
          id="github"
          type="text"
          value={values.gitHub}
          required
          onChange={handleChange('gitHub')}
          endAdornment={(
            <InputAdornment style={{ opacity: '0.7' }} position="end">
              <GitHubIcon />
            </InputAdornment>
          )}
        />
      </FormControl>
    </div>
  );
}

export default Extras;
