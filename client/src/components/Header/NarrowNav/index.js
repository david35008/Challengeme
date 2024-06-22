import React, { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  AccountCircle as AccountCircleIcon,
  Add as AddIcon,
  Apps as AppsIcon,
  Brightness4 as Brightness4Icon,
  ChevronLeft as ChevronLeftIcon,
  Description as DescriptionIcon,
  Group as GroupIcon,
  Home as HomeIcon,
  Lock as LockIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useStyles } from './NarrowNavStyled';
import { Logged } from '../../../context/LoggedInContext';
import Search from '../Search';
import network from '../../../services/network';
import '../../../styles/Forgot.css';

const headerStyle = {
  backgroundColor: 'transparent',
};
const letterColor = {
  color: 'black',
};
const dividerColor = {};

export default function NarrowNav() {
  const classes = useStyles;
  const navigate = useNavigate();
  const LoggedContext = useContext(Logged);
  const [openNavBar, setOpenNavBar] = useState(false);
  const currentLocation = useLocation();

  const handleDrawerOpen = () => {
    setOpenNavBar(true);
  };

  const handleDrawerClose = () => {
    setOpenNavBar(false);
  };

  const logOut = async () => {
    try {
      await network.post('/api/v1/auth/logout', {
        token: Cookies.get('refreshToken'),
      });
      Cookies.remove('refreshToken');
      Cookies.remove('accessToken');
      Cookies.remove('userId');
      Cookies.remove('userName');
      LoggedContext.setLogged(false);
      LoggedContext.setIsAdmin(false);
      navigate('/login');
    } catch (error) {}
  };

  return (
    <>
      <classes.AppBarStyled position="fixed" style={headerStyle}>
        <Toolbar>
          <classes.MenuButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon style={letterColor} />
          </classes.MenuButton>
          <classes.NarrowFlex>
            {currentLocation.pathname.includes('/challenges') && <Search />}
            {currentLocation.pathname === '/' && (
              <>
                <classes.Title variant="h6">
                  <Link to="/challenges" className="link-rout">
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '10px',
                      }}
                    >
                      <AppsIcon style={letterColor} />
                      &nbsp;
                      <span style={letterColor} className="header-link-title">
                        Challenges
                      </span>
                    </div>
                  </Link>
                </classes.Title>
                <classes.Title variant="h6">
                  <Link
                    to={
                      LoggedContext.logged ? '/teams' : currentLocation.pathname
                    }
                    className="link-rout"
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '10px',
                      }}
                    >
                      <GroupIcon style={letterColor} />
                      &nbsp;
                      <span style={letterColor} className="header-link-title">
                        Teams
                      </span>
                    </div>
                  </Link>
                </classes.Title>
                <classes.Title variant="h6">
                  <a
                    href="https://suvelocity.github.io/challengeme/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-rout"
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '10px',
                      }}
                    >
                      <DescriptionIcon style={letterColor} />
                      &nbsp;
                      <span style={letterColor} className="header-link-title">
                        Docs
                      </span>
                    </div>
                  </a>
                </classes.Title>
              </>
            )}
          </classes.NarrowFlex>
        </Toolbar>
      </classes.AppBarStyled>
      <classes.DrawerPaper variant="persistent" anchor="left" open={openNavBar}>
        <div className={classes.GeneralDrawerHeader}>
          <div className={classes.AvatarUserInfo}>
            {LoggedContext.logged && Cookies.get('userName') ? (
              <Tooltip title={Cookies.get('userName')}>
                <Avatar
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  style={{
                    cursor: 'pointer',
                    backgroundColor: '#7BACB4',
                  }}
                >
                  {Cookies.get('userName').slice(0, 2)}
                </Avatar>
              </Tooltip>
            ) : null}
            <div className={classes.HeyName} style={letterColor}>
              <b>
                {Cookies.get('userName')
                  ? `Hey ${Cookies.get('userName')}`
                  : 'Welcome to ChallengeMe'}
              </b>
            </div>
          </div>
          <div className={classes.generalDrawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon style={letterColor} />
            </IconButton>
          </div>
        </div>
        <Divider style={dividerColor} />
        <classes.ListStyled>
          <Link to="/" className="link-rout">
            <ListItem button onClick={handleDrawerClose} style={letterColor}>
              <ListItemIcon>
                <HomeIcon style={letterColor} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Divider style={dividerColor} />
          <Link to="/profile/info" className="link-rout">
            <ListItem button onClick={handleDrawerClose} style={letterColor}>
              <ListItemIcon>
                <AccountCircleIcon style={letterColor} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </Link>
          <Divider style={dividerColor} />
          <Link to="/teams" className="link-rout">
            <ListItem button onClick={handleDrawerClose} style={letterColor}>
              <ListItemIcon>
                <GroupIcon style={letterColor} />
              </ListItemIcon>
              <ListItemText primary="Teams Area" />
            </ListItem>
          </Link>
          {LoggedContext.isAdmin && (
            <>
              <Divider style={dividerColor} />
              <Link to="/admin/DashBoard" className="link-rout">
                <ListItem
                  button
                  onClick={handleDrawerClose}
                  style={letterColor}
                >
                  <ListItemIcon>
                    <LockIcon style={letterColor} />
                  </ListItemIcon>
                  <ListItemText primary="Admin Area" />
                </ListItem>
              </Link>
            </>
          )}
          <Divider style={dividerColor} />
          <Link to="/addnewchallenge" className="link-rout">
            <ListItem button onClick={handleDrawerClose} style={letterColor}>
              <ListItemIcon>
                <AddIcon style={letterColor} />
              </ListItemIcon>
              <ListItemText primary="Add New Challenge" />
            </ListItem>
          </Link>
          <Divider style={dividerColor} />
          <ListItem className={classes.LogOut} onClick={handleDrawerClose}>
            <IconButton aria-label="delete">
              <Brightness4Icon style={letterColor} />
            </IconButton>
          </ListItem>
          <Divider style={dividerColor} />
          {LoggedContext.logged ? (
            <ListItem className={classes.LogOut} onClick={handleDrawerClose}>
              <Button
                className={classes.LogOutButton}
                onClick={logOut}
                variant="contained"
                color="secondary"
              >
                Log Out
              </Button>
            </ListItem>
          ) : (
            <>
              <Link
                to="/login"
                className="link-rout"
                onClick={handleDrawerClose}
              >
                <Button variant="contained" className={classes.AuthButton}>
                  Login
                </Button>
              </Link>
              <Link
                to="/register"
                className="link-rout"
                onClick={handleDrawerClose}
              >
                <Button variant="contained" className={classes.AuthButton}>
                  Register
                </Button>
              </Link>
            </>
          )}
          <Divider style={dividerColor} />
        </classes.ListStyled>
      </classes.DrawerPaper>
    </>
  );
}
