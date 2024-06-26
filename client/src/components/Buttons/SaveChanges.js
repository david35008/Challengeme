import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { green, red } from '@mui/material/colors';
import { CircularProgress, Fab, Box } from '@mui/material';
import { HighlightOff, Check, Edit } from '@mui/icons-material';

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

const ButtonSuccess = styled(Fab)({
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
});

const ButtonFail = styled(Fab)({
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
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
  handleSave,
  onCancel,
  editMode,
  setEditMode,
  success,
  setSaveAlert,
}) {
  const [loading, setLoading] = useState(false);
  const [finish, setFinish] = useState(false);
  const timer = useRef();

  const finishEdit = useCallback(() => {
    if (success) {
      setEditMode(false);
    }
  }, [success, setEditMode]);

  const handleButtonClick = useCallback(() => {
    if (editMode) {
      if (!loading) {
        setLoading(true);
        timer.current = setTimeout(() => {
          handleSave();
          setLoading(false);
          setFinish(true);
          setTimeout(() => {
            setSaveAlert(false);
            setFinish(false);
            finishEdit();
          }, 3000);
        }, 2000);
      }
    } else {
      setEditMode(true);
    }
  }, [editMode, loading, handleSave, setSaveAlert, finishEdit, setEditMode]);

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    [],
  );

  return (
    <Root>
      <Wrapper>
        <Fab
          aria-label="save"
          color="primary"
          className={clsx({
            [ButtonSuccess]: success && finish,
            [ButtonFail]: !success && finish,
          })}
          onClick={handleButtonClick}
        >
          {editMode ? (
            finish ? (
              success ? (
                <Check />
              ) : (
                <HighlightOff />
              )
            ) : (
              <span>Save</span>
            )
          ) : (
            <Edit />
          )}
        </Fab>
        {editMode && !finish && (
          <Fab onClick={onCancel}>
            <span>cancel</span>
          </Fab>
        )}
        {loading && <FabProgress size={68} />}
      </Wrapper>
    </Root>
  );
}
