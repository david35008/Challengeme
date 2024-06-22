import React, { useContext, useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
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
import { styled } from '@mui/system';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ChallengeMeSmallTitle from '../../../images/reactSvg/ChallengeMeSmallTitle';
import Cube from '../../../images/reactSvg/Cube';
import network from '../../../services/network';
import { Logged } from '../../../context/LoggedInContext';
import Search from '../Search';
import './WideNav.css';

const StyledMenu = styled(Menu)(({ theme }) => ({
  paper: {
    border: '1px solid #d3d4d5',
  },
}));

export default function WideNav() {
  const navigate = useNavigate();
  const LoggedContext = useContext(Logged);
  const currentLocation = useLocation();

  const [openNavBar, setOpenNavBar] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    setOpenNavBar(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setOpenNavBar(false);
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
    } catch (error) {
      console.error(error);
    }
  }, [LoggedContext, navigate, handleDrawerClose]);

  return (
    <>
      <AppBar position="fixed" className={clsx('wide-nav-appBarRegular')}>
        <Toolbar className="wide-nav-flexContainer">
          <Typography variant="h6" className="wide-nav-startFlex">
            <NavLink to="/">
              <div className="wide-nav-iconFlex">
                <Cube className="wide-nav-letterColor" />
                <ChallengeMeSmallTitle />
              </div>
            </NavLink>
          </Typography>
          <div className="wide-nav-middleFlex">
            {currentLocation.pathname === '/' && (
              <>
                <Typography variant="h6" className="wide-nav-title">
                  <Link to="/challenges" className="wide-nav-linkRout">
                    <div className="wide-nav-iconFlex" style={{ marginRight: '10px', marginLeft: '40px' }}>
                      <AppsIcon className="wide-nav-letterColor" />
                      &nbsp;
                      <span className="wide-nav-headerLinkTitle">Challenges</span>
                    </div>
                  </Link>
                </Typography>
                <Typography variant="h6" className="wide-nav-title">
                  <Link to={LoggedContext.logged ? '/teams' : currentLocation.pathname} className="wide-nav-linkRout">
                    <div className="wide-nav-iconFlex" style={{ marginRight: '10px', marginLeft: '40px' }}>
                      <GroupIcon className="wide-nav-letterColor" />
                      &nbsp;
                      <span className="wide-nav-headerLinkTitle">Teams</span>
                    </div>
                  </Link>
                </Typography>
                <Typography variant="h6" className="wide-nav-title">
                  <a href="https://suvelocity.github.io/challengeme/" target="_blank" rel="noopener noreferrer" className="wide-nav-linkRout">
                    <div className="wide-nav-iconFlex" style={{ marginRight: '10px', marginLeft: '40px' }}>
                      <DescriptionIcon className="wide-nav-letterColor" />
                      &nbsp;
                      <span className="wide-nav-headerLinkTitle">Docs</span>
                    </div>
                  </a>
                </Typography>
                <Typography variant="h6" className="wide-nav-title">
                  <a href={`${window.location.protocol}//${window.location.hostname}/api-references/`} className="wide-nav-linkRout">
                    <div className="wide-nav-iconFlex" style={{ marginRight: '10px', marginLeft: '40px' }}>
                      <Code className="wide-nav-letterColor" />
                      &nbsp;
                      <span className="wide-nav-headerLinkTitle">Api</span>
                    </div>
                  </a>
                </Typography>
              </>
            )}
            {currentLocation.pathname.includes('challenges') && <Search />}
          </div>
          <div className="wide-nav-endFlex">
            {LoggedContext.logged && Cookies.get('userName') ? (
              <Tooltip title={Cookies.get('userName')}>
                <AccountCircleOutlinedIcon
                  onClick={handleDrawerOpen}
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  style={{ cursor: 'pointer' }}
                >
                  {Cookies.get('userName').slice(0, 2)}
                </AccountCircleOutlinedIcon>
              </Tooltip>
            ) : (
              <Link to="/login" className="wide-nav-linkRout under-line-hover">
                <div className="wide-nav-filterButton">Login</div>
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
        className="wide-nav-menu"
      >
        <div className="wide-nav-drawerHeader wide-nav-flexRow">
          <b>
            {LoggedContext.logged && Cookies.get('userName') ? `Hey ${Cookies.get('userName')}` : 'Welcome to ChallengeMe'}
          </b>
          <IconButton onClick={handleDrawerClose}>
            <ExpandLessIcon className="wide-nav-drawerColor" />
          </IconButton>
        </div>
        {currentLocation.pathname === '/challenges' ? (
          <>
            <Divider variant="middle" className="wide-nav-dividerColor" />
            <Link to="/" className="wide-nav-linkRout">
              <ListItem className="wide-nav-flexRow wide-nav-drawerColor" button onClick={handleDrawerClose}>
                <ListItemText primary="Home" />
                <ListItemIcon className="wide-nav-flexEnd">
                  <Cube className="wide-nav-drawerColor" color="#000" />
                </ListItemIcon>
              </ListItem>
            </Link>
          </>
        ) : (
          <>
            <Divider variant="middle" className="wide-nav-dividerColor" />
            <Link to="/challenges" className="wide-nav-linkRout">
              <ListItem className="wide-nav-flexRow wide-nav-drawerColor" button onClick={handleDrawerClose}>
                <ListItemText primary="Challenges" />
                <ListItemIcon className="wide-nav-flexEnd">
                  <AppsIcon className="wide-nav-drawerColor" />
                </ListItemIcon>
              </ListItem>
            </Link>
          </>
        )}
        <Divider variant="middle" className="wide-nav-dividerColor" />
        <List className="wide-nav-list">
          <Link to="/profile/info" className="wide-nav-linkRout">
            <ListItem className="wide-nav-flexRow wide-nav-drawerColor" button onClick={handleDrawerClose}>
              <ListItemText primary="Profile" />
              <ListItemIcon className="wide-nav-flexEnd">
                <AccountCircleIcon className="wide-nav-drawerColor" />
              </ListItemIcon>
            </ListItem>
          </Link>
          <Divider variant="middle" className="wide-nav-dividerColor" />
          <Link to="/Teams" className="wide-nav-linkRout">
            <ListItem className="wide-nav-flexRow" button onClick={handleDrawerClose}>
              <ListItemText primary="Teams Area" />
              <ListItemIcon className="wide-nav-flexEnd">
                <GroupIcon className="wide-nav-drawerColor" />
              </ListItemIcon>
            </ListItem>
          </Link>
          {LoggedContext.isAdmin && (
            <>
              <Divider variant="middle" className="wide-nav-dividerColor" />
              <Link to="/admin/DashBoard" className="wide-nav-linkRout">
                <ListItem className="wide-nav-flexRow wide-nav-drawerColor" button onClick={handleDrawerClose}>
                  <ListItemText primary="Admin Area" />
                  <ListItemIcon className="wide-nav-flexEnd">
                    <LockIcon className="wide-nav-drawerColor" />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </>
          )}
          <Divider variant="middle" className="wide-nav-dividerColor" />
          <Link to="/addnewchallenge" className="wide-nav-linkRout">
            <ListItem className="wide-nav-flexRow" button onClick={handleDrawerClose}>
              <ListItemText primary="Add New Challenge" />
              <ListItemIcon className="wide-nav-flexEnd">
                <AddIcon className="wide-nav-drawerColor" />
              </ListItemIcon>
            </ListItem>
          </Link>
          <Divider variant="middle" className="wide-nav-dividerColor" />
          <ListItem button className="wide-nav-flexRow" onClick={logOut}>
            <ListItemText style={{ color: '#C10000' }} primary="Logout" />
            <ListItemIcon className="wide-nav-flexEnd">
              <ExitToAppIcon style={{ color: '#C10000' }} />
            </ListItemIcon>
          </ListItem>
        </List>
      </StyledMenu>
    </>
  );
}
