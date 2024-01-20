import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import { CircularProgress, Fab } from '@material-ui/core';
import { HighlightOff, Check, Edit } from '@material-ui/icons';

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
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonFail: {
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
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
  handleSave,
  onCancel,
  editMode,
  setEditMode,
  success,
  setSaveAlert,
}) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [finish, setFinish] = useState(false);
  const timer = useRef();

  const buttonSuccess = clsx({ [classes.buttonSuccess]: finish });
  const buttonFail = clsx({ [classes.buttonFail]: finish });

  const finishEdit = useCallback(() => {
    if (success) {
      setEditMode(false);
    }
    // eslint-disable-next-line
  }, [success]);

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
    // eslint-disable-next-line
  }, [editMode, loading]);

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    [],
  );

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Fab
          aria-label="save"
          color="primary"
          className={success ? buttonSuccess : buttonFail}
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
        {loading && (
          <CircularProgress size={68} className={classes.fabProgress} />
        )}
      </div>
    </div>
  );
}
