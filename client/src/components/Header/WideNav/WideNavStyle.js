import { styled } from '@mui/system';
import { AppBar, Drawer } from '@mui/material';

const drawerWidth = 240;

export const StyledAppBarRegular = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export const StyledAppBarShift = styled(AppBar)(({ theme }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: drawerWidth,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

export const Root = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const MenuButton = styled('button')(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export const Hide = styled('div')({
  display: 'none',
});

export const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
});

export const DrawerPaper = styled(Drawer)({
  width: drawerWidth,
});

export const GeneralDrawerHeader = styled('div')({
  display: 'flex',
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1, 0, 2),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export const Content = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: -drawerWidth,
}));

export const ContentShift = styled('main')(({ theme }) => ({
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: 0,
}));

export const List = styled('ul')({
  padding: 0,
});

export const FlexRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginRight: 0,
});

export const FlexEnd = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const AvatarUserInfo = styled('div')({
  margin: '20px',
});

export const FilterButton = styled('button')({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '19px',
  lineHeight: '46px',
  color: '#ffffff',
  textAlign: 'right',
  marginLeft: '10px',
});

export const FilterButtonDark = styled('button')({
  backgroundColor: 'rgb(81,81,81)',
  color: 'white',
  marginLeft: '10px',
});

export const DrawerPaperDark = styled(Drawer)({
  width: drawerWidth,
  backgroundColor: 'rgb(51,51,51)',
  boxShadow: '2px 0px 35px 0px black',
});

export const Menu = styled('div')({
  marginTop: '49px',
});

export const IconFlex = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginRight: '10px',
});

export const Title = styled('div')({
  fontSize: '15px',
});

export const FlexContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const StartFlex = styled('div')({
  width: '175px',
});

export const MiddleFlex = styled('div')({
  width: '80%',
  display: 'flex',
  justifyContent: 'center',
});

export const EbdFlex = styled('div')({
  width: '240px',
  display: 'flex',
  justifyContent: 'flex-end',
});
