import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

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
