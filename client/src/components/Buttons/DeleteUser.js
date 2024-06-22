import React, { useState, useRef, useEffect, useCallback } from 'react';
import { styled } from '@mui/system';
import { green, red } from '@mui/material/colors';
import { Fab, CircularProgress, Box } from '@mui/material';
import { Delete, Loop } from '@mui/icons-material';
import network from '../../services/network';
import DeleteUserDialog from '../Dialogs/DeleteUser';

const Root = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  transform: 'scale(0.8)',
  height: '60px',
});

const Wrapper = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
  position: 'relative',
}));

const DeleteButton = styled(Fab)({
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
});

const RestoreButton = styled(Fab)({
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
});

const FabProgress = styled(CircularProgress)({
  color: green[500],
  position: 'absolute',
  top: -6,
  left: -6,
  zIndex: 1,
});

export default function CircularIntegration({
  fetchUserInfo,
  handleClose,
  setSaveAlert,
  setAlertMessage,
  setAlertType,
  selectedUser,
  userInfo,
}) {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const timer = useRef();

  const deleteClick = useCallback(() => {
    setOpenDeleteDialog(true);
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
  }, [
    selectedUser,
    fetchUserInfo,
    setAlertMessage,
    setAlertType,
    setSaveAlert,
  ]);

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
  }, [userInfo.userName, loading, handleRestore, setSaveAlert]);

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    [],
  );

  return (
    <Root>
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
      <Wrapper>
        <DeleteButton
          aria-label="delete"
          color="secondary"
          onClick={deleteClick}
        >
          <Delete />
        </DeleteButton>
      </Wrapper>
      {userInfo.deletedAt && (
        <Wrapper>
          <RestoreButton
            aria-label="restore"
            color="primary"
            onClick={restoreClick}
          >
            <Loop />
          </RestoreButton>
          {loading && <FabProgress size={68} />}
        </Wrapper>
      )}
    </Root>
  );
}
