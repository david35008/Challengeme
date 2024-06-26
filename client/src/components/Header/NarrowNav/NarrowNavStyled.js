import { styled } from '@mui/system';
import {
  AppBar,
  Drawer,
  Button,
  Avatar,
  Typography,
  IconButton,
  List,
} from '@mui/material';

const drawerWidth = 240;

export const useStyles = {
  AppBarStyled: styled(AppBar)(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  })),
  MenuButton: styled(IconButton)(({ theme }) => ({
    marginRight: theme.spacing(2),
  })),
  DrawerPaper: styled(Drawer)({
    width: drawerWidth,
  }),
  GeneralDrawerHeader: styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  })),
  AvatarUserInfo: styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
  })),
  HeyName: styled(Typography)(({ theme }) => ({
    marginLeft: theme.spacing(1),
  })),
  LogOut: styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
  })),
  LogOutButton: styled(Button)({
    minWidth: 150,
  }),
  AuthButton: styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
  })),
  NarrowFlex: styled('div')({
    display: 'flex',
    alignItems: 'center',
  }),
  Title: styled(Typography)({
    flexGrow: 1,
  }),
  ListStyled: styled(List)({
    padding: 0,
  }),
};
