import React, { useEffect, useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import mixpanel from 'mixpanel-browser';
import moment from 'moment';
import Swal from 'sweetalert2';
import { styled } from '@mui/system';
import { TextField, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import network from '../../../services/network';
import { generateTime } from '../../../utils';
import ResetPassword from '../../../components/Modals/ChangePassword';
import '../../../styles/UserInfo.css';

const InfoTextField = styled(TextField)(({ theme }) => ({
  width: '200px',
  margin: '10px 0px',
}));

const InfoTextFieldDark = styled(TextField)(({ theme }) => ({
  width: '200px',
  '& > label': {
    color: 'rgba(255,255,255,0.7)',
  },
  '& > div': {
    color: 'white',
  },
}));

const UserProfileBackToMyProfileButton = styled(Button)(({ theme }) => ({
  margin: '20px 0px -20px 0px',
}));

const generateName = (name) => {
  let changedName = '';
  if (name) {
    for (let i = 0; i < name.length; i++) {
      i === 0
        ? (changedName += name[i].toUpperCase())
        : (changedName += name[i].toLowerCase());
    }
    return changedName;
  }
  return '';
};

const getUpdated = (date) => moment(date).fromNow();

function UserInfo() {
  const [userInfo, setUserInfo] = useState({});
  const [editedUserInfo, setEditedUserInfo] = useState({});
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [resetPasswordModal, setResetPasswordModal] = useState(false);

  const fetchUserInfo = useCallback(async () => {
    try {
      const username = Cookies.get('userName');
      mixpanel.track('User On Personal Details Page', { User: `${username}` });
      const { data: info } = await network.get('/api/v1/users/info');
      setUserInfo(info);
      setEditedUserInfo(info);
    } catch (error) {}
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const startEditInfo = useCallback(() => {
    setIsReadOnly(false);
    // eslint-disable-next-line
  }, []);

  const editing = useCallback(
    (event) => {
      const key = event.target.name;
      const { value } = event.target;
      const edited = { ...editedUserInfo };
      edited[key] = value;
      setEditedUserInfo(edited);
    },
    [editedUserInfo],
  );

  const onSave = useCallback(async () => {
    try {
      await network.patch('/api/v1/users/info', editedUserInfo);
      fetchUserInfo();
      setIsReadOnly(true);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: error.response.data.message,
        showConfirmButton: true,
      });
    }
    // eslint-disable-next-line
  }, [editedUserInfo]);

  const onCancel = useCallback(() => {
    setEditedUserInfo(userInfo);
    setIsReadOnly(true);
    // eslint-disable-next-line
  }, [userInfo]);

  const changePassword = useCallback(() => {
    setResetPasswordModal(true);
    // eslint-disable-next-line
  }, []);

  return userInfo.userName ? (
    <div className="generic-page">
      <div className="user-page">
        <div className="user-info-container">
          <h1>User Info</h1>
          {resetPasswordModal && (
            <ResetPassword
              open={resetPasswordModal}
              setOpen={setResetPasswordModal}
              path="/api/v1/users/change-password"
            />
          )}
          <IconButton onClick={startEditInfo}>
            <EditIcon />
          </IconButton>
          {!isReadOnly && (
            <Button onClick={changePassword}>Change Password</Button>
          )}
          <InfoTextField
            name="firstName"
            onChange={editing}
            value={generateName(editedUserInfo.firstName)}
            label="First name"
            InputProps={{ readOnly: isReadOnly }}
          />
          <InfoTextField
            name="lastName"
            onChange={editing}
            label="Last name"
            value={generateName(editedUserInfo.lastName)}
            InputProps={{ readOnly: isReadOnly }}
          />
          {isReadOnly ? (
            <InfoTextField
              name="birthDate"
              style={{ color: 'white' }}
              label="Birth Date"
              value={generateTime(editedUserInfo.birthDate)}
              InputProps={{ readOnly: isReadOnly }}
            />
          ) : (
            <>
              <label
                style={{
                  marginRight: '130px',
                  marginBottom: '5px',
                  color: 'gray',
                }}
              >
                Birth Date
              </label>
              <input
                name="birthDate"
                type="date"
                value={generateTime(editedUserInfo.birthDate)}
                onChange={editing}
              />
            </>
          )}
          <InfoTextField
            onChange={editing}
            name="country"
            label="Country"
            value={editedUserInfo.country ? editedUserInfo.country : ''}
            InputProps={{ readOnly: isReadOnly }}
          />
          <InfoTextField
            onChange={editing}
            name="city"
            label="City"
            value={editedUserInfo.city ? editedUserInfo.city : ''}
            InputProps={{ readOnly: isReadOnly }}
          />
          <InfoTextField
            onChange={editing}
            name="githubAccount"
            label="Github"
            value={
              editedUserInfo.githubAccount ? editedUserInfo.githubAccount : ''
            }
            InputProps={{ readOnly: isReadOnly }}
          />
          <InfoTextField
            label="Account Created"
            value={getUpdated(editedUserInfo.createdAt)}
            InputProps={{ readOnly: true }}
          />
          {!isReadOnly && (
            <div style={{ display: 'flex' }}>
              <Button onClick={onSave}>Save</Button>
              <Button onClick={onCancel}>Cancel</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default UserInfo;
