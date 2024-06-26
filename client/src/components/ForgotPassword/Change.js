import React, { useEffect, useState, useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { styled } from '@mui/system';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff, Lock } from '@mui/icons-material';
import Swal from 'sweetalert2';
import Timer from './Timer';

const Container = styled('div')({
  marginTop: '90px',
  marginBottom: '10px',
  width: '320px',
});

const PasswordField = styled(FormControl)({
  marginBottom: '10px',
  width: '320px',
});

const ConfirmPasswordField = styled(FormControl)({
  marginBottom: '30px',
  width: '320px',
});

const limit = 5;

export default function Change({
  data,
  handleChange,
  changePassword = false,
  notAdmin = true,
}) {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const hideBoth = useCallback(() => {
    setShowOldPassword(false);
    setShowPassword(false);
    setShowConfirmPassword(false);
  }, []);

  useEffect(() => {
    // Prevent special password eye bugs
    document.addEventListener('mouseup', hideBoth);
    document.addEventListener('dragend', hideBoth);
  }, [hideBoth]);

  useEffect(() => {
    if (!changePassword && notAdmin) {
      const timer = setTimeout(
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sorry, time is up !',
          }).then(() => {
            setRedirect(true);
          });
        },
        limit * 60 * 1000,
      );

      return () => {
        clearTimeout(timer);
      };
    }
  }, [changePassword, notAdmin]);

  return redirect ? (
    <Navigate to="/" replace />
  ) : (
    <Container>
      {!changePassword && notAdmin && (
        <>
          <b> Attention!</b>
          {' '}
          You have
          <Timer limit={limit} unit="minutes" />
          {' '}
          to
          change your password.
          <br />
          Enter new password:
        </>
      )}
      {changePassword && (
        <PasswordField>
          <InputLabel style={{ color: 'grey' }} htmlFor="oldPassword">
            Old Password
          </InputLabel>
          <Input
            name="oldP"
            id="oldPassword"
            value={data.oldPassword}
            type={showOldPassword ? 'text' : 'password'}
            onChange={handleChange('oldP')}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  style={{ opacity: '0.7' }}
                  aria-label="toggle password visibility"
                  onMouseDown={() => setShowOldPassword(true)}
                >
                  {showOldPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                <Lock style={{ opacity: '0.7' }} />
              </InputAdornment>
            )}
          />
        </PasswordField>
      )}
      <PasswordField>
        <InputLabel style={{ color: 'grey' }} htmlFor="newPassword">
          Password
        </InputLabel>
        <Input
          name="newP"
          id="newPassword"
          value={data.password}
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange('newP')}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                style={{ opacity: '0.7' }}
                aria-label="toggle password visibility"
                onMouseDown={() => setShowPassword(true)}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
              <Lock style={{ opacity: '0.7' }} />
            </InputAdornment>
          )}
        />
      </PasswordField>
      <ConfirmPasswordField>
        <InputLabel style={{ color: 'grey' }} htmlFor="confirmNewPassword">
          Confirm Password
        </InputLabel>
        <Input
          id="confirmNewPassword"
          name="confirmP"
          value={data.confirmPassword}
          type={showConfirmPassword ? 'text' : 'password'}
          onChange={handleChange('confirmP')}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                style={{ opacity: '0.7' }}
                aria-label="toggle password visibility"
                onMouseDown={() => setShowConfirmPassword(true)}
              >
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
              <Lock style={{ opacity: '0.7' }} />
            </InputAdornment>
          )}
        />
      </ConfirmPasswordField>
    </Container>
  );
}
