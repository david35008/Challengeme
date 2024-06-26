import React from 'react';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  flexDirection: 'row',
  height: '50px',
  background:
    'linear-gradient(171.52deg, #1E3D5B 4.43%, rgba(30, 61, 91, 0) 149.79%)',
}));

const StyledAppBarDark = styled(AppBar)({
  flexDirection: 'row',
  height: '50px',
  backgroundColor: '#686868 !important',
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
  fontWeight: 'bold',
  height: '50px',
}));

const StyledListItemText = styled(ListItemText)({
  textAlign: 'center',
});

const StyledLink = styled(Link)({
  width: '100%',
  textDecoration: 'none',
});

export default function SecondHeader({ paths, position }) {
  const location = useLocation();

  const headerStyle = StyledAppBar;

  const marginTop = position ? { marginTop: '0px' } : { marginTop: '60px' };

  return (
    <div style={marginTop}>
      <headerStyle position="static">
        {paths.map((path, i) => (
          <StyledLink to={path.URL} key={path.URL}>
            <StyledListItem
              button
              style={{
                background: path.URL === location.pathname ? '#E6E6E6' : '',
                color: path.URL === location.pathname ? 'black' : 'white',
                borderRight: i !== paths.length - 1 ? ' 0.5px solid black' : '',
              }}
            >
              <StyledListItemText primary={path.name} />
            </StyledListItem>
          </StyledLink>
        ))}
      </headerStyle>
    </div>
  );
}
