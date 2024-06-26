import React, { useState, useCallback } from 'react';
import moment from 'moment';
import { styled } from '@mui/system';
import { TextField, Button, Chip } from '@mui/material';
import { Edit } from '@mui/icons-material';
import network from '../../../services/network';
import { generateTime } from '../../../utils';
import Alert from '../../../components/Buttons/Alert';
import ResetPassword from '../../../components/Modals/ChangePassword';
import '../../../styles/AdminUserInfo.css';

const InfoTextField = styled(TextField)(({ theme }) => ({
  width: '200px',
  margin: '10px 0px',
  '& .MuiInputBase-input': {
    color: theme.palette.text.primary,
  },
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

const UserProfileBackButton = styled(Button)(({ theme }) => ({
  margin: '20px 0px -20px 0px',
}));

const toCapitalCase = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getUpdated = (date) => moment(date).fromNow();

export default function UserInfo({
  userInfo,
  fetchUserInfo,
  setUserInfo,
  editMode,
  id,
  editedUserInfo,
  setEditedUserInfo,
  getAllUsers,
}) {
  const [resetPasswordModal, setResetPasswordModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('Saved Changes Success!');

  const changePermission = useCallback(async () => {
    try {
      const isUpdateOk = window.confirm(
        `Are you sure you want to change permission for ${userInfo.userName}?`,
      );
      if (isUpdateOk != null) {
        const newPermission = userInfo.permission === 'user' ? 'admin' : 'user';
        const { data: response } = await network.patch(
          `/api/v1/users/permission/${id}`,
          {
            permission: newPermission,
          },
        );
        setAlertType('success');
        setAlertMessage(response.message);
        setShowAlert(true);
        fetchUserInfo();
      }
    } catch (error) {
      const response = error.response.data;
      const message = response.message ? response.message : response.error;
      setAlertType('error');
      setAlertMessage(message);
      setShowAlert(true);
    }
  }, [id, userInfo, fetchUserInfo]);

  const editing = useCallback(
    async (event) => {
      const key = event.target.name;
      const { value } = event.target;
      const edited = { ...editedUserInfo };
      edited[key] = value;
      setEditedUserInfo(edited);
    },
    [editedUserInfo, setEditedUserInfo],
  );

  const changePassword = useCallback(async () => {
    setResetPasswordModal(true);
  }, []);

  return userInfo.userName ? (
    <div className="generic-page-admin">
      <div className="user-data-header">
        <h1>User Info</h1>
        {userInfo.deletedAt && (
          <Chip label="Deleted User" color="secondary" variant="outlined" />
        )}
        <div className="user-data-permission">
          <h2>
            Permission:
            {' '}
            {userInfo.permission}
          </h2>
          <Button onClick={changePermission}>Change</Button>
        </div>
      </div>
      <div className="change-password-admin">
        {resetPasswordModal && (
          <ResetPassword
            open={resetPasswordModal}
            setOpen={setResetPasswordModal}
            notAdmin={false}
            path={`/api/v1/users/admin-password/${id}`}
          />
        )}
        <Button onClick={changePassword}>Change Password</Button>
      </div>
      <div className="user-page-admin">
        <div className="user-info-container-admin">
          <InfoTextField
            name="id"
            onChange={editing}
            value={editedUserInfo.id}
            label="Id"
            InputProps={{ readOnly: true }}
          />
          <InfoTextField
            name="userName"
            value={editedUserInfo.userName}
            label="User Name"
            InputProps={{ readOnly: true }}
          />
          <div className={editMode ? 'edit-mode-container' : ''}>
            <InfoTextField
              name="firstName"
              onChange={editing}
              value={toCapitalCase(editedUserInfo.firstName)}
              label="First name"
              InputProps={{ readOnly: !editMode }}
            />
            {editMode && <Edit className="edit-icon" />}
          </div>
          <div className={editMode ? 'edit-mode-container' : ''}>
            <InfoTextField
              name="lastName"
              onChange={editing}
              label="Last name"
              value={toCapitalCase(editedUserInfo.lastName)}
              InputProps={{ readOnly: !editMode }}
            />
            {editMode && <Edit className="edit-icon" />}
          </div>
          <div className={editMode ? 'edit-mode-container' : ''}>
            <InfoTextField
              onChange={editing}
              name="email"
              label="Email"
              value={editedUserInfo.email ? editedUserInfo.email : ''}
              InputProps={{ readOnly: !editMode }}
            />
            {editMode && <Edit className="edit-icon" />}
          </div>
          <div className={editMode ? 'edit-mode-container' : ''}>
            <InfoTextField
              onChange={editing}
              name="phoneNumber"
              label="Phone Number"
              value={
                editedUserInfo.phoneNumber ? editedUserInfo.phoneNumber : ''
              }
              InputProps={{ readOnly: !editMode }}
            />
            {editMode && <Edit className="edit-icon" />}
          </div>
          <InfoTextField
            name="reasonOfRegistration"
            label="Reason Of Registration"
            value={
              editedUserInfo.reasonOfRegistration
                ? editedUserInfo.reasonOfRegistration
                : ''
            }
            InputProps={{ readOnly: true }}
          />
          <InfoTextField
            name="securityQuestion"
            label="Security Question"
            value={
              editedUserInfo.securityQuestion
                ? editedUserInfo.securityQuestion
                : ''
            }
            InputProps={{ readOnly: true }}
          />
          {!editMode ? (
            <InfoTextField
              name="birthDate"
              style={{ color: 'white' }}
              label="Birth Date"
              value={generateTime(editedUserInfo.birthDate)}
              InputProps={{ readOnly: !editMode }}
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
              <div className={editMode ? 'edit-mode-container' : ''}>
                <input
                  className="birthDate"
                  name="birthDate"
                  type="date"
                  value={generateTime(editedUserInfo.birthDate)}
                  onChange={editing}
                />
                {editMode && <Edit className="edit-icon" />}
              </div>
            </>
          )}
          <div className={editMode ? 'edit-mode-container' : ''}>
            <InfoTextField
              onChange={editing}
              name="country"
              label="Country"
              value={editedUserInfo.country ? editedUserInfo.country : ''}
              InputProps={{ readOnly: !editMode }}
            />
            {editMode && <Edit className="edit-icon" />}
          </div>
          <div className={editMode ? 'edit-mode-container' : ''}>
            <InfoTextField
              onChange={editing}
              name="city"
              label="City"
              value={editedUserInfo.city ? editedUserInfo.city : ''}
              InputProps={{ readOnly: !editMode }}
            />
            {editMode && <Edit className="edit-icon" />}
          </div>
          <div className={editMode ? 'edit-mode-container' : ''}>
            <InfoTextField
              onChange={editing}
              name="githubAccount"
              label="Github"
              value={
                editedUserInfo.githubAccount ? editedUserInfo.githubAccount : ''
              }
              InputProps={{ readOnly: !editMode }}
            />
            {editMode && <Edit className="edit-icon" />}
          </div>
          <InfoTextField
            label="Account Created"
            value={getUpdated(editedUserInfo.createdAt)}
            InputProps={{ readOnly: true }}
          />
          <InfoTextField
            label="Account Updated"
            value={getUpdated(editedUserInfo.updatedAt)}
            InputProps={{ readOnly: true }}
          />
          {editedUserInfo.deletedAt && (
            <InfoTextField
              label="Account Deleted"
              value={getUpdated(editedUserInfo.deletedAt)}
              InputProps={{ readOnly: true }}
            />
          )}
        </div>
      </div>
      {showAlert && (
        <Alert
          type={alertType}
          open={showAlert}
          setOpen={setShowAlert}
          text={alertMessage}
        />
      )}
    </div>
  ) : (
    <div />
  );
}
