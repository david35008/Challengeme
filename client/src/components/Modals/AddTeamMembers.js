import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import network from '../../services/network';
import ChooseMembers from '../Choosers/ChooseMembers';

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

export default function AddTeamMembers({
  open, setOpen, getAllTeams, teamNameForMember, isTeacher,
}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [newTeamMembers, setNewTeamMembers] = useState([]);
  const [newTeamMembersOptions, setNewTeamMembersOptions] = useState([]);

  const handleSubmitNewTeam = async () => {
    try {
      await network.post(`/api/v1/teams/add-users/${teamNameForMember}`, { newUsers: newTeamMembers });
      getAllTeams();
      setOpen(false);
      setNewTeamMembers([]);
    } catch (error) {
    }
  };

  const handleClose = () => {
    setOpen(false);
    setNewTeamMembers([]);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">
        Add New Members To Team
        {teamNameForMember}
      </h2>
      <div id="simple-modal-description">
        <ChooseMembers
          isTeacher={isTeacher}
          teamId={teamNameForMember}
          chooseMembers={newTeamMembers}
          setChooseMembers={setNewTeamMembers}
          membersOptions={newTeamMembersOptions}
          setMembersOptions={setNewTeamMembersOptions}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmitNewTeam}

      >
        Add
      </Button>
      <AddTeamMembers />
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
