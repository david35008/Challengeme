import { makeStyles } from '@mui/styles';

const drawerWidth = 240;
export default makeStyles((theme) => ({
  appBarRegular: {
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
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  generalDrawerHeader: {
    display: 'flex',
  },
  drawerHeader: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1, 0, 2),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
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
  flexRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: 0,
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  avatarUserInfo: {
    margin: '20px',
  },
  filterButton: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '19px',
    lineHeight: '46px',
    color: '#ffffff',
    textAlign: 'right',
    marginLeft: '10px',
  },
  filterButtonDark: {
    backgroundColor: 'rgb(81,81,81)',
    color: 'white',
    marginLeft: '10px',
  },
  drawerPaperDark: {
    width: drawerWidth,
    backgroundColor: 'rgb(51,51,51)',
    boxShadow: '2px 0px 35px 0px black',
  },
  menu: {
    marginTop: '49px',
  },
  iconFlex: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
  },
  title: {
    fontSize: '15px',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  startFlex: {
    width: '175px',
  },
  middleFlex: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
  },
  ebdFlex: {
    width: '240px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
