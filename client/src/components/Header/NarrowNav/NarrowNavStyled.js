import { makeStyles } from '@mui/styles';

const drawerWidth = 240;
export default makeStyles((theme) => ({
  infoButton: {
    margin: '10px',
  },
  logOutButton: {
    margin: '10px',
  },
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'white',
    boxShadow: '10px 0px 35px 0px rgba(51,51,51,0.7)',
  },
  drawerPaperDark: {
    width: drawerWidth,
    backgroundColor: 'rgb(51,51,51)',
    boxShadow: '2px 0px 35px 0px black',
  },
  generalDrawerHeader: {
    display: 'flex',
  },
  drawerHeader: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  list: {
    padding: 0,
  },
  avatarUserInfo: {
    margin: '20px',
  },
  logOut: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heyName: {
    marginTop: '8px',
    marginLeft: '7px',
  },
  authButton: {
    backgroundColor: 'rgb(219,219,219)',
  },
  narrowFlex: {
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: '10px',
    width: '100%',
    marginLeft: '0px',
  },
  title: {
    fontSize: '10px',
  },
}));
