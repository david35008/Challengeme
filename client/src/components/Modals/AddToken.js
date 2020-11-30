import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import network from '../../services/network';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AddToken({ open, setOpen, getAllTokens }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [newToken, setNewToken] = useState();
  const [newTokenGitAccount, setNewTokeGgitAccount] = useState();
  const [newTokenActionslimit, setNewTokeActionslimit] = useState();

  const handleSubmitNewToken = async () => {
    const newTokenObj = {
      token: newToken,
      gitAccount: newTokenGitAccount,
      actionsLimit: newTokenActionslimit,
    };
    try {
      await network.post('/api/v1/git/', newTokenObj);
      getAllTokens();
      setOpen(false);
    } catch (error) {
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <div id="simple-modal-description">
        <Input onChange={(event) => setNewToken(event.target.value)} placeholder="Insert Token..." />
        <br />
        <br />
        <Input onChange={(event) => setNewTokeGgitAccount(event.target.value)} placeholder="Insert Github Account..." />
        <br />
        <br />
        <Input onChange={(event) => setNewTokeActionslimit(event.target.value)} placeholder="Insert Action Limit..." />
        <br />
        <br />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmitNewToken}
      >
        Add New Token
      </Button>
      <AddToken />
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
