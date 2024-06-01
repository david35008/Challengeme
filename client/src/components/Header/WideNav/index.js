import React, { useContext, useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import {
  Link, NavLink, useNavigate, useLocation,
} from 'react-router-dom';
import clsx from 'clsx';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Divider from '@mui/material/Divider';
import GroupIcon from '@mui/icons-material/Group';
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Menu from '@mui/material/Menu';
import AddIcon from '@mui/icons-material/Add';
import Code from '@mui/icons-material/Code';
import { withStyles } from '@mui/styles';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ChallengeMeSmallTitle from '../../../images/reactSvg/ChallengeMeSmallTitle';
import Cube from '../../../images/reactSvg/Cube';
import network from '../../../services/network';
import { Logged } from '../../../context/LoggedInContext';
import Search from '../Search';
import useStyles from './WideNavStyle';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

const letterColor = {
  color: 'white',
};
const drawerColor = {
  color: 'black',
};
const dividerColor = {};

export default function WideNav() {
  const classes = useStyles();
  const navigate = useNavigate();
  const LoggedContext = useContext(Logged);
  const currentLocation = useLocation();

  const [openNavBar, setOpenNavBar] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    setOpenNavBar(true);
    // eslint-disable-next-line
  }, []);

  const handleDrawerClose = useCallback(() => {
    setOpenNavBar(false);
    // eslint-disable-next-line
  }, []);

  const logOut = useCallback(async () => {
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
      navigate('/');
      handleDrawerClose();
    } catch (error) {}
    // eslint-disable-next-line
  }, [LoggedContext]);

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBarRegular)}
        style={{ backgroundColor: 'transport' }}
      >
        <Toolbar className={classes.flexContainer}>
          <Typography variant="h6" className={classes.startFlex}>
            <NavLink to="/">
              <div className={classes.iconFlex}>
                <Cube style={letterColor} />
                <ChallengeMeSmallTitle />
              </div>
            </NavLink>
          </Typography>
          <div className={classes.middleFlex}>
            {currentLocation.pathname === '/' && (
              <>
                <Typography variant="h6" className={classes.title}>
                  <Link to="/challenges" className="link-rout">
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '10px',
                        marginLeft: '40px',
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
                        marginLeft: '40px',
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
                        marginLeft: '40px',
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
                <Typography variant="h6" className={classes.title}>
                  <a
                    href={`${window.location.protocol}//${window.location.hostname}/api-references/`}
                    className="link-rout"
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '10px',
                        marginLeft: '40px',
                      }}
                    >
                      <Code style={letterColor} />
                      &nbsp;
                      <span style={letterColor} className="header-link-title">
                        Api
                      </span>
                    </div>
                  </a>
                </Typography>
              </>
            )}
            {currentLocation.pathname.includes('challenges') && <Search />}
          </div>
          {/* <div style={{ flex: 1 }} /> */}
          <div className={classes.ebdFlex}>
            {LoggedContext.logged && Cookies.get('userName') ? (
              <Tooltip title={Cookies.get('userName')}>
                <AccountCircleOutlinedIcon
                  onClick={handleDrawerOpen}
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  {Cookies.get('userName').slice(0, 2)}
                </AccountCircleOutlinedIcon>
              </Tooltip>
            ) : (
              <Link to="/login" className="link-rout under-line-hover">
                <div className={classes.filterButton}>Login</div>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <StyledMenu
        id="customized-menu"
        anchorEl={openNavBar}
        keepMounted
        open={Boolean(openNavBar)}
        onClose={handleDrawerClose}
        className={classes.menu}
      >
        <div className={`${classes.drawerHeader} ${classes.flexRow}`}>
          <b>
            {LoggedContext.logged && Cookies.get('userName')
              ? `Hey ${Cookies.get('userName')}`
              : 'Welcome to ChallengeMe'}
          </b>
          <IconButton onClick={handleDrawerClose}>
            <ExpandLessIcon style={drawerColor} />
          </IconButton>
        </div>
        {currentLocation.pathname === '/challenges' ? (
          <>
            <Divider variant="middle" style={dividerColor} />
            <Link to="/" className="link-rout">
              <ListItem
                className={classes.flexRow}
                button
                onClick={handleDrawerClose}
                style={drawerColor}
              >
                <ListItemText primary="Home" />
                <ListItemIcon className={classes.flexEnd}>
                  <Cube style={drawerColor} color="#000" />
                </ListItemIcon>
              </ListItem>
            </Link>
          </>
        ) : (
          <>
            <Divider variant="middle" style={dividerColor} />
            <Link to="/challenges" className="link-rout">
              <ListItem
                className={classes.flexRow}
                button
                onClick={handleDrawerClose}
                style={drawerColor}
              >
                <ListItemText primary="Challenges" />
                <ListItemIcon className={classes.flexEnd}>
                  <AppsIcon style={drawerColor} />
                </ListItemIcon>
              </ListItem>
            </Link>
          </>
        )}
        <Divider variant="middle" style={dividerColor} />
        <List className={classes.list}>
          <Link to="/profile/info" className="link-rout">
            <ListItem
              className={classes.flexRow}
              button
              onClick={handleDrawerClose}
              style={drawerColor}
            >
              <ListItemText primary="Profile" />
              <ListItemIcon className={classes.flexEnd}>
                <AccountCircleIcon style={drawerColor} />
              </ListItemIcon>
            </ListItem>
          </Link>
          <Divider variant="middle" style={dividerColor} />
          <Link to="/Teams" className="link-rout">
            <ListItem
              className={classes.flexRow}
              button
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Teams Area" />
              <ListItemIcon className={classes.flexEnd}>
                <GroupIcon style={drawerColor} />
              </ListItemIcon>
            </ListItem>
          </Link>
          {LoggedContext.isAdmin && (
            <>
              <Divider variant="middle" style={dividerColor} />
              <Link to="/admin/DashBoard" className="link-rout">
                <ListItem
                  className={classes.flexRow}
                  button
                  onClick={handleDrawerClose}
                  style={drawerColor}
                >
                  <ListItemText primary="Admin Area" />
                  <ListItemIcon className={classes.flexEnd}>
                    <LockIcon style={drawerColor} />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </>
          )}
          <Divider variant="middle" style={dividerColor} />
          <Link to="/addnewchallenge" className="link-rout">
            <ListItem
              className={classes.flexRow}
              button
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Add New Challenge" />
              <ListItemIcon className={classes.flexEnd}>
                <AddIcon style={drawerColor} />
              </ListItemIcon>
            </ListItem>
          </Link>
          <Divider variant="middle" style={dividerColor} />
          <ListItem button className={classes.flexRow} onClick={logOut}>
            <ListItemText style={{ color: '#C10000' }} primary="Logout" />
            <ListItemIcon className={classes.flexEnd}>
              <ExitToAppIcon style={{ color: '#C10000' }} />
            </ListItemIcon>
          </ListItem>
        </List>
      </StyledMenu>
    </>
  );
}
