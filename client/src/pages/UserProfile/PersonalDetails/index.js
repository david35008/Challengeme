import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import mixpanel from 'mixpanel-browser';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import network from '../../../services/network';

import './UserInfo.css';

const useStyles = makeStyles(() => ({
  info: {
    width: '200px',
    margin: '10px 0px',
  },
  infoDark: {
    width: '200px',
    '&>label': {
      color: 'rgba(255,255,255,0.7)',
    },
    '&>div': {
      color: 'white',
    },
  },
  userProfileBackToMyProfile: {
    margin: '20px 0px -20px 0px',
  },
}));

function generateTime(date) {
  let today = new Date(date);
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;
  return `${today}`;
}

const generateName = (name) => {
  let changedName = '';
  for (let i = 0; i < name.length; i++) {
    i === 0 ? (changedName += name[i].toUpperCase()) : (changedName += name[i].toLowerCase());
  }
  return changedName;
};

const getUpdated = (date) => {
  const dateNow = Date.now();
  const userCreationDate = new Date(date);
  let diff = (dateNow - userCreationDate.getTime()) / 1000 / 60 / 60;
  if (diff < 24) {
    return `${Math.floor(diff)} Hours ago`;
  }
  diff /= 24;
  diff = Math.floor(diff);
  if (diff < 8) {
    return `${Math.floor(diff)} Days ago`;
  }
  diff = Math.floor(diff / 7);
  if (diff < 5) {
    return `${Math.floor(diff)} Weeks ago`;
  }
  diff = Math.floor(diff / 4);
  if (diff < 13) {
    return `${Math.floor(diff)} Months ago`;
  }
  diff = Math.floor(diff / 12);
  return `${Math.floor(diff)} Years ago`;
};

function UserInfo({ darkMode }) {
  const [userInfo, setUserInfo] = useState({});
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const username = Cookies.get('userName');
        mixpanel.track('User On Personal Details Page', { User: `${username}` });
        const { data: info } = await network.get('/api/v1/users/info');
        setUserInfo(info);
      } catch (error) {
      }
    })();
  }, []);
  return userInfo.firstName ? (
    <div className="generic-page">
      <div className="user-page">
        <div className="user-info-container">
          <h1>User Info</h1>
          <TextField
            className={darkMode ? classes.infoDark : classes.info}
            defaultValue={generateName(userInfo.firstName)}
            label="First name"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={darkMode ? classes.infoDark : classes.info}
            label="Last name"
            defaultValue={generateName(userInfo.lastName)}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={darkMode ? classes.infoDark : classes.info}
            style={{ color: 'white' }}
            label="Birth Day"
            defaultValue={generateTime(userInfo.birthDate)}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={darkMode ? classes.infoDark : classes.info}
            label="Country"
            defaultValue={userInfo.country}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={darkMode ? classes.infoDark : classes.info}
            label="City"
            defaultValue={userInfo.city}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={darkMode ? classes.infoDark : classes.info}
            label="Github"
            defaultValue={userInfo.githubAccount}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={darkMode ? classes.infoDark : classes.info}
            label="Account Created"
            defaultValue={getUpdated(userInfo.createdAt)}
            InputProps={{
              readOnly: true,
            }}
          />

        </div>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default UserInfo;
