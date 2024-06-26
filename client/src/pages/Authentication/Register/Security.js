import React, { useState, useCallback } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import LockIcon from '@mui/icons-material/Lock';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { styled } from '@mui/system';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px',
  marginTop: '70px',
});

const StyledFormControl = styled(FormControl)({
  width: '320px',
});

function Security({ values, handleChange }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleClickShowConfirmPassword = useCallback(() => {
    setShowConfirmPassword((prev) => !prev);
  }, []);

  return (
    <Container className="containerSecurity">
      <StyledFormControl>
        <InputLabel style={{ color: 'grey' }} htmlFor="password">
          Password
        </InputLabel>
        <Input
          id="password"
          value={values.password}
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange('password')}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                style={{ opacity: '0.7' }}
                aria-label="toggle password visibility"
                onMouseDown={handleClickShowPassword}
                onMouseUp={handleClickShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
              <LockIcon style={{ opacity: '0.7' }} />
            </InputAdornment>
          )}
        />
      </StyledFormControl>
      <StyledFormControl>
        <InputLabel style={{ color: 'grey' }} htmlFor="confirmPassword">
          Confirm Password
        </InputLabel>
        <Input
          id="confirmPassword"
          value={values.confirmPassword}
          type={showConfirmPassword ? 'text' : 'password'}
          onChange={handleChange('confirmPassword')}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                style={{ opacity: '0.7' }}
                aria-label="toggle password visibility"
                onMouseDown={handleClickShowConfirmPassword}
                onMouseUp={handleClickShowConfirmPassword}
              >
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
              <LockIcon style={{ opacity: '0.7' }} />
            </InputAdornment>
          )}
        />
      </StyledFormControl>
      <StyledFormControl>
        <InputLabel id="security-question-label">Security Question</InputLabel>
        <Select
          id="securityQuestion"
          autoWidth
          value={values.securityQuestion}
          onChange={handleChange('securityQuestion')}
        >
          <MenuItem value="When you were young, what did you want to be when you grew up?">
            When you were young, what did you want to be when you grew up?
          </MenuItem>
          <MenuItem value="Who was your childhood hero?">
            Who was your childhood hero?
          </MenuItem>
          <MenuItem value="Where was your best family vacation as a kid?">
            Where was your best family vacation as a kid?
          </MenuItem>
          <MenuItem value="What is the name, breed, and color of your favorite pet?">
            What is the name, breed, and color of your favorite pet?
          </MenuItem>
          <MenuItem value="What was the first concert you attended?">
            What was the first concert you attended?
          </MenuItem>
        </Select>
      </StyledFormControl>
      <StyledFormControl>
        <InputLabel style={{ color: 'grey' }}>Enter your answer</InputLabel>
        <Input
          id="securityAnswer"
          type="text"
          value={values.securityAnswer}
          required
          onChange={handleChange('securityAnswer')}
          endAdornment={(
            <InputAdornment style={{ opacity: '0.7' }} position="end">
              <QuestionAnswerIcon />
            </InputAdornment>
          )}
        />
      </StyledFormControl>
    </Container>
  );
}

export default Security;
