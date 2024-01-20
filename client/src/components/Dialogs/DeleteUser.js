import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import {
  Input,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  CircularProgress,
  FormControl,
  FormControlLabel,
  InputLabel,
  Switch,
} from '@material-ui/core';
import network from '../../services/network';

const useStyles = makeStyles((theme) => ({
  fabProgress: {
    color: red[500],
    position: 'absolute',
    top: '114px',
    left: '180px',
    zIndex: 1,
  },
  formControl: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
}));

export default function ResponsiveDialog({
  fetchUserInfo,
  openDialog,
  setOpenDeleteDialog,
  handleClose,
  selectedUser,
  userInfo,
  setSaveAlert,
  setAlertMessage,
  setAlertType,
}) {
  const theme = useTheme();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hardDelete, setHardDelete] = useState(!!userInfo.deletedAt);
  const [userNameToDelete, setUSerNameToDelete] = useState();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const timer = useRef();

  const handleDelete = useCallback(async () => {
    try {
      const { data: response } = await network.delete(
        `/api/v1/users/${selectedUser}?hardDelete=${hardDelete}`,
      );
      setAlertType('success');
      setAlertMessage(response.message);
      setSaveAlert(true);
      setSuccess(true);
      setHardDelete(false);
      setOpenDeleteDialog(false);
      if (hardDelete) {
        handleClose();
      } else {
        fetchUserInfo();
      }
    } catch (error) {
      setSuccess(false);
      const response = error.response.data;
      const message = response.message ? response.message : response.error;
      setAlertType('error');
      setAlertMessage(message);
      setSaveAlert(true);
      setHardDelete(false);
    }
    // eslint-disable-next-line
  }, [selectedUser, hardDelete]);

  const finishEdit = () => {
    if (success) {
      handleClose();
    }
  };

  const deleteUser = async () => {
    if (hardDelete && userNameToDelete !== userInfo.userName) return;
    if (!loading) {
      setLoading(true);
      timer.current = setTimeout(() => {
        handleDelete();
        setLoading(false);
        setTimeout(() => {
          setSaveAlert(false);
          finishEdit();
        }, 3000);
      }, 2000);
    }
  };

  const closeModal = () => {
    setOpenDeleteDialog(false);
  };

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    [],
  );

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openDialog}
      onClose={closeModal}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        Are you sure you want to delete
        {userInfo.userName}
        ?
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <InputLabel>
            {hardDelete ? 'Hard' : 'Soft'}
            {' '}
            Delete
          </InputLabel>
          {!userInfo.deletedAt && (
            <FormControlLabel
              control={(
                <Switch
                  checked={hardDelete}
                  onChange={() => setHardDelete((state) => !state)}
                />
              )}
            />
          )}
          {hardDelete && (
            <FormControl className={classes.formControl}>
              <label className={classes.marginTop}>
                type username for confirmation.
              </label>
              <Input
                onChange={(user) => setUSerNameToDelete(user.target.value)}
              />
            </FormControl>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={closeModal} color="primary">
          Cancel
        </Button>
        <Button
          disabled={hardDelete ? userNameToDelete !== userInfo.userName : false}
          onClick={deleteUser}
          color="Secondary"
          autoFocus
        >
          Yes, I'm Sure
        </Button>
      </DialogActions>
      {loading && (
        <CircularProgress size={68} className={classes.fabProgress} />
      )}
    </Dialog>
  );
}
