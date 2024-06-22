import { styled } from '@mui/system';
import { red } from '@mui/material/colors';

const drawerWidth = 240;

export const useStyles = {
  Root: styled('div')({
    marginBottom: 20,
  }),
  Media: styled('div')({
    height: 0,
    paddingTop: '37.25%',
  }),
  Expand: styled('div')(({ theme }) => ({
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  })),
  ExpandOpen: styled('div')({
    transform: 'rotate(180deg)',
  }),
  Avatar: styled('div')({
    backgroundColor: red[500],
  }),
  Search: styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  })),
  SearchLight: styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgb(219, 219, 219)',
    '&:hover': {
      backgroundColor: 'rgb(175, 175, 175)',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  })),
  SearchIcon: styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })),
  InputRoot: styled('div')({
    color: 'inherit',
  }),
  InputInput: styled('input')(({ theme }) => ({
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '200px',
    height: '13px',
    paddingTop: '8px',
  })),
};
