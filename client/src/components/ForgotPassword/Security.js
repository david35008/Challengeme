import React from 'react';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const useStyles = makeStyles(() => ({
  securityQTitle: {
    marginTop: '120px',
    width: '320px',
  },
  answerForgotPass: {
    marginTop: '40px',
    marginBottom: '30px',
    width: '320px',
  },
}));
function Security({ data, handleChange }) {
  const classes = useStyles();

  return (
    <div className={classes.securityQTitle}>
      <span>{data.secQuestion}</span>
      <FormControl className={classes.answerForgotPass}>
        <InputLabel style={{ color: 'grey' }}>Enter your answer</InputLabel>
        <Input
          type="text"
          value={data.secAnswer}
          required
          onChange={handleChange('answer')}
          endAdornment={(
            <InputAdornment style={{ opacity: '0.7' }} position="end">
              <QuestionAnswerIcon />
            </InputAdornment>
          )}
        />
      </FormControl>
    </div>
  );
}

export default Security;
