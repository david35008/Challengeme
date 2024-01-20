import React, { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import AppsIcon from '@material-ui/icons/Apps';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import GroupIcon from '@material-ui/icons/Group';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './NarrowNavStyled';
import { Logged } from '../../../context/LoggedInContext';
import Search from '../Search';
import network from '../../../services/network';

export default function NarrowNav() {
  const classes = useStyles();
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
  const headerStyle = {
    backgroundColor: 'transfer',
  };
  const letterColor = {
    color: 'black',
  };
  const dividerColor = {};
  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {})}
        style={headerStyle}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton)}
          >
            <MenuIcon style={letterColor} />
          </IconButton>
          <div className={classes.narrowFlex}>
            {currentLocation.pathname.includes('/challenges') ? (
              <Search />
            ) : null}
            {currentLocation.pathname === '/' && (
              <>
                <Typography variant="h6" className={classes.title}>
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
                </Typography>
                <Typography variant="h6" className={classes.title}>
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
                </Typography>
                <Typography variant="h6" className={classes.title}>
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
                </Typography>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={openNavBar}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.generalDrawerHeader}>
          <div className={classes.avatarUserInfo}>
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
            <div className={classes.heyName} style={letterColor}>
              <b>
                {Cookies.get('userName')
                  ? `Hey ${Cookies.get('userName')}`
                  : 'Welcome to ChallengeMe'}
              </b>
            </div>
          </div>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon style={letterColor} />
            </IconButton>
          </div>
        </div>
        <Divider style={dividerColor} />
        <List className={classes.list}>
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
          <ListItem className={classes.logOut} onClick={handleDrawerClose}>
            <IconButton aria-label="delete">
              <Brightness4Icon style={letterColor} />
            </IconButton>
          </ListItem>
          <Divider style={dividerColor} />
          {LoggedContext.logged ? (
            <ListItem className={classes.logOut} onClick={handleDrawerClose}>
              <Button
                className={classes.logOutButton}
                onClick={logOut}
                style={{ minWidth: 150 }}
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
                <Button variant="contained" className={classes.authButton}>
                  Login
                </Button>
              </Link>
              <Link
                to="/register"
                className="link-rout"
                onClick={handleDrawerClose}
              >
                <Button variant="contained" className={classes.authButton}>
                  Register
                </Button>
              </Link>
            </>
          )}
          <Divider style={dividerColor} />
        </List>
      </Drawer>
    </>
  );
}
