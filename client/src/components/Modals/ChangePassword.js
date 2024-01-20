import React, { useState, useCallback } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import network from '../../services/network';
import Change from '../ForgotPassword/Change';

function getModalStyle() {
  const top = '16vh';
  const left = '28vw';

  return {
    top: `${top}`,
    left: `${left}`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '30vw',
    height: '70vh',
    maxHeight: '400px',
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    width: '100%',
  },
}));

export default function ResetPassword({
  open = false,
  setOpen,
  path,
  notAdmin = true,
}) {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [oldPassword, setOldPassword] = useState();
  const [error, setError] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const resetPassword = useCallback(
    (passwordForReset, confirmPasswordForReset, oldPasswordForReset) => {
      if (oldPasswordForReset && oldPasswordForReset.length < 8 && notAdmin) {
        setError('old password should be at least 8 characters');
        return false;
      }
      if (passwordForReset.length < 8) {
        setError('password should be at least 8 characters');
        return false;
      }
      if (passwordForReset !== confirmPasswordForReset) {
        setError('passwords do not match');
        return false;
      }
      if (passwordForReset === oldPasswordForReset && notAdmin) {
        setError('You should choose new password');
        return false;
      }
      return true;
      // eslint-disable-next-line
    },
    [],
  );

  const handleSubmitNewWebhookTeam = useCallback(async () => {
    try {
      const passAllChecks = resetPassword(
        newPassword,
        confirmNewPassword,
        oldPassword,
      );
      if (passAllChecks) {
        const { data: response } = await network.patch(path, {
          oldPassword,
          newPassword,
        });
        Swal.fire({
          icon: 'success',
          text: response.message,
          timer: 3000,
        });
        setOpen(false);
      }
    } catch (error) {
      const response = error.response.data;
      const message = response.message ? response.message : response.error;
      Swal.fire({
        icon: 'error',
        text: message,
        timer: 3000,
      });
    }
    // eslint-disable-next-line
  }, [newPassword, confirmNewPassword, oldPassword]);

  const handleClose = useCallback(() => {
    setOpen(false);
    // eslint-disable-next-line
  }, []);

  const handleChange = useCallback(
    (field) => (e) => {
      switch (field) {
        case 'oldP':
          setOldPassword(e.target.value);
          break;
        case 'newP':
          setNewPassword(e.target.value);
          break;
        case 'confirmP':
          setConfirmNewPassword(e.target.value);
          break;
        default:
          break;
      }
      // eslint-disable-next-line
    },
    [],
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Change Your Password</h2>
        {error !== '' && (
          <motion.div
            style={{
              position: 'absolute',
              height: '40px',
              borderRadius: '5px',
              width: '400px',
              color: 'white',
              backgroundColor: 'rgba(255, 0, 0, 0.616)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ErrorIcon
              style={{
                color: 'white',
                marginLeft: '4px',
              }}
            />
            <div
              style={{
                height: 'auto',
                margin: 'auto',
                color: 'white',
              }}
            >
              {error}
            </div>
          </motion.div>
        )}
        <div id="simple-modal-description">
          <Change
            data={{
              oldPassword,
              password: newPassword,
              confirmPassword: confirmNewPassword,
            }}
            handleChange={handleChange}
            changePassword={notAdmin}
            notAdmin={notAdmin}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitNewWebhookTeam}
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
}
