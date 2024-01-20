import React, {
  useEffect, useState, useCallback, forwardRef,
} from 'react';
import mixpanel from 'mixpanel-browser';
import Cookies from 'js-cookie';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import network from '../../services/network';
import SaveChanges from '../Buttons/SaveChanges';
import DeleteUser from '../Buttons/DeleteUser';
import Alert from '../Buttons/Alert';
import SideBar from './SideBar';
import UserInfo from '../../pages/Admin/UsersControl/UserInfo';
import MixpanelDashBoard from '../../pages/Admin/Mixpanel/DashBoard';
import '../../styles/EditUserModal.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'sticky',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));
const activityHeaders = [
  'event_name',
  'time',
  '$os',
  '$current_url',
  '$city',
  '$browser',
  'Team',
  'Solution Repository',
  'Remember Me',
  'Rating',
  'ChallengeId',
  'mp_lib',
  'mp_country_code',
];

export default function FullScreenDialog({
  openDialog,
  setOpenDialog,
  selectedUser,
  getAllUsers,
}) {
  const classes = useStyles();
  const [saveAlert, setSaveAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('Saved Changes Success!');
  const [editMode, setEditMode] = useState(false);
  const [successSaved, setSuccessSaved] = useState(false);
  const [drawerNum, setDrawerNum] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [editedUserInfo, setEditedUserInfo] = useState({});

  const handleClose = useCallback(() => {
    setOpenDialog(false);
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  const fetchUserInfo = useCallback(async () => {
    try {
      const username = Cookies.get('userName');
      mixpanel.track('User On Personal Details Page', { User: `${username}` });
      const { data: info } = await network.get(
        `/api/v1/users/admin?id=${selectedUser}`,
      );
      setUserInfo(info[0]);
      setEditedUserInfo(info[0]);
    } catch (error) {}
    // eslint-disable-next-line
  }, [selectedUser]);

  const onSave = useCallback(async () => {
    try {
      setSuccessSaved(false);
      await network.patch(
        `/api/v1/users/admin/${selectedUser}`,
        editedUserInfo,
      );
      setUserInfo(editedUserInfo);
      setSuccessSaved(true);
      setTimeout(() => {
        setEditMode(false);
      }, 3000);
      setAlertType('success');
      setAlertMessage('saved changes');
      setSaveAlert(true);
    } catch (error) {
      setAlertType('error');
      setAlertMessage(error.response.data.message);
      setSaveAlert(true);
    }
    // eslint-disable-next-line
  }, [editedUserInfo, selectedUser]);

  const onCancel = useCallback(() => {
    setEditedUserInfo(userInfo);
    setEditMode(false);
  }, [userInfo]);

  useEffect(() => {
    fetchUserInfo();
  }, [selectedUser]);

  return (
    <Dialog
      fullScreen
      open={openDialog}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <Close />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            User Dashboard
          </Typography>
          <DeleteUser
            handleClose={handleClose}
            setSaveAlert={setSaveAlert}
            setAlertMessage={setAlertMessage}
            setAlertType={setAlertType}
            editMode={editMode}
            onCancel={onCancel}
            selectedUser={selectedUser}
            userInfo={userInfo}
            fetchUserInfo={fetchUserInfo}
          />
          <SaveChanges
            success={successSaved}
            fetchUserInfo={fetchUserInfo}
            setSaveAlert={setSaveAlert}
            handleSave={onSave}
            editMode={editMode}
            setEditMode={setEditMode}
            onCancel={onCancel}
          />
        </Toolbar>
      </AppBar>
      <SideBar items={['User Info', 'Activity']} setDrawerNum={setDrawerNum} />
      <div className="edit-user-container">
        {drawerNum === 0 && (
          <UserInfo
            id={selectedUser}
            editMode={editMode}
            editedUserInfo={editedUserInfo}
            setEditedUserInfo={setEditedUserInfo}
            userInfo={userInfo}
            fetchUserInfo={fetchUserInfo}
            setUserInfo={setUserInfo}
            getAllUsers={getAllUsers}
          />
        )}
        {drawerNum === 1 && (
          <span>
            <h1>User Activity</h1>
            <MixpanelDashBoard
              userName={userInfo.userName}
              headers={activityHeaders}
            />
          </span>
        )}
      </div>
      {saveAlert && (
        <Alert
          type={alertType}
          open={saveAlert}
          setOpen={setSaveAlert}
          text={alertMessage}
        />
      )}
    </Dialog>
  );
}
