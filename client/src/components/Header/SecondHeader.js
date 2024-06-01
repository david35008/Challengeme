import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'row',
    height: '50px',
    background:
      'linear-gradient(171.52deg, #1E3D5B 4.43%, rgba(30, 61, 91, 0) 149.79%)',
  },
  rootDark: {
    flexDirection: 'row',
    height: '50px',
    backgroundColor: '#686868 !important',
  },
  item: {
    fontWeight: 'bold',
    height: '50px',
  },
  text: {
    textAlign: 'center',
  },
  link: {
    width: '100%',
    textDecoration: 'none',
  },
}));

export default function SecondHeader({ paths, position }) {
  const classes = useStyles();
  const location = useLocation();

  const headerStyle = classes.root;

  const marginTop = position ? { marginTop: '0px' } : { marginTop: '60px' };

  return (
    <div style={marginTop}>
      <AppBar position="static" className={headerStyle}>
        {paths.map((path, i) => (
          <Link to={path.URL} key={path.URL} className={classes.link}>
            <ListItem
              button
              className={classes.item}
              style={{
                background: path.URL === location.pathname ? '#E6E6E6' : '',
                color: path.URL === location.pathname ? 'black' : 'white',
                borderRight: i !== paths.length - 1 ? ' 0.5px solid black' : '',
              }}
            >
              <ListItemText primary={path.name} className={classes.text} />
            </ListItem>
          </Link>
        ))}
      </AppBar>
    </div>
  );
}
