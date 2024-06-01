import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
import { makeStyles } from '@mui/styles';
import { green, red } from '@mui/material/colors';
import { Fab, CircularProgress } from '@mui/material';
import { Delete, Loop } from '@mui/icons-material';
import network from '../../services/network';
import DeleteUserDialog from '../Dialogs/DeleteUser';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    transform: 'scale(0.8)',
    height: '60px',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  deleteButton: {
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  restoreButton: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
}));

export default function CircularIntegration({
  fetchUserInfo,
  handleClose,
  setSaveAlert,
  setAlertMessage,
  setAlertType,
  selectedUser,
  userInfo,
}) {
  const classes = useStyles();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const timer = useRef();

  const deleteClick = useCallback(() => {
    setOpenDeleteDialog(true);
    // eslint-disable-next-line
  }, []);

  const handleRestore = useCallback(async () => {
    try {
      const { data: response } = await network.put(
        `/api/v1/users/restore/${selectedUser}`,
      );
      setAlertType('success');
      setAlertMessage(response.message);
      setSaveAlert(true);
      fetchUserInfo();
    } catch (error) {
      const response = error.response.data;
      const message = response.message ? response.message : response.error;
      setAlertType('error');
      setAlertMessage(message);
      setSaveAlert(true);
    }
    // eslint-disable-next-line
  }, [selectedUser]);

  const restoreClick = useCallback(async () => {
    const restoreOk = window.confirm(
      `Are you sure you want to restore ${userInfo.userName}?`,
    );
    if (restoreOk) {
      if (!loading) {
        setLoading(true);
        timer.current = setTimeout(() => {
          handleRestore();
          setLoading(false);
          setTimeout(() => {
            setSaveAlert(false);
          }, 3000);
        }, 2000);
      }
    }
    // eslint-disable-next-line
  }, [userInfo, loading]);

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    [],
  );

  return (
    <div className={classes.root}>
      {openDeleteDialog && (
        <DeleteUserDialog
          openDialog={openDeleteDialog}
          setOpenDeleteDialog={setOpenDeleteDialog}
          handleClose={handleClose}
          selectedUser={selectedUser}
          setSaveAlert={setSaveAlert}
          setAlertMessage={setAlertMessage}
          setAlertType={setAlertType}
          userInfo={userInfo}
          fetchUserInfo={fetchUserInfo}
        />
      )}
      <div className={classes.wrapper}>
        <Fab
          aria-label="delete"
          color="secondary"
          className={classes.deleteButton}
          onClick={deleteClick}
        >
          <Delete />
        </Fab>
      </div>
      {userInfo.deletedAt && (
        <div className={classes.wrapper}>
          <Fab
            aria-label="restore"
            color="primary"
            className={classes.restoreButton}
            onClick={restoreClick}
          >
            <Loop />
          </Fab>
          {loading && (
            <CircularProgress size={68} className={classes.fabProgress} />
          )}
        </div>
      )}
    </div>
  );
}
