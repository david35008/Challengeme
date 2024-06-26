import React from 'react';
import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const SecurityQTitle = styled('div')({
  marginTop: '120px',
  width: '320px',
});

const AnswerForgotPass = styled(FormControl)({
  marginTop: '40px',
  marginBottom: '30px',
  width: '320px',
});

function Security({ data, handleChange }) {
  return (
    <SecurityQTitle>
      <span>{data.secQuestion}</span>
      <AnswerForgotPass>
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
      </AnswerForgotPass>
    </SecurityQTitle>
  );
}

export default Security;
