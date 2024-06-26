import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/system';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px',
  marginTop: '140px',
});

const StyledFormControl = styled(FormControl)({
  width: '320px',
});

function Extras({ values, handleChange }) {
  return (
    <Container className="containerExtra">
      <StyledFormControl>
        <InputLabel id="signUpReason-label">
          Choose your sign-up reason...
        </InputLabel>
        <Select
          id="signUpReason"
          value={values.signUpReason}
          onChange={handleChange('signUpReason')}
        >
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Challenge Myself">Challenge Myself</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </StyledFormControl>
      <StyledFormControl>
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
      </StyledFormControl>
    </Container>
  );
}

export default Extras;
