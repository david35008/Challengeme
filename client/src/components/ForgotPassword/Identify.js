import React from 'react';
import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TitleUserNameForgotPass = styled('div')({
  marginTop: '130px',
  width: '320px',
});

const UserNameForgotPass = styled(FormControl)({
  marginTop: '20px',
  marginBottom: '10px',
  width: '320px',
});

export default function Identify(props) {
  const { data, handleChange } = props;

  return (
    <TitleUserNameForgotPass>
      Enter your User Name:
      <UserNameForgotPass>
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
      </UserNameForgotPass>
    </TitleUserNameForgotPass>
  );
}
