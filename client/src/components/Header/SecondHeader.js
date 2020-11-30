import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'row',
    height: '50px',
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

export default function SecondHeader({ paths, darkMode }) {
  const classes = useStyles();
  const location = useLocation();

  const headerStyle = {
    backgroundColor: darkMode ? '#686868' : 'rgba(44, 44, 119,0.9)',
  };

  return (
    <div style={{ marginTop: '60px' }}>
      <AppBar position="static" className={classes.root} style={headerStyle}>
        {/* <Toolbar> */}
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
        {/* </Toolbar> */}
      </AppBar>
    </div>
  );
}
