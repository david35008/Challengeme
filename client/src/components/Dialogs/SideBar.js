import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  useTheme,
  Box,
} from '@mui/material';

const drawerWidth = 240;

const Root = styled(Box)({
  display: 'flex',
  zIndex: 0,
});

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

const ToolbarStyled = styled('div')({
  minHeight: '60px',
});

const DrawerPaper = styled('div')({
  width: drawerWidth,
});

const Content = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

function ResponsiveDrawer({ window, items = ['None'], setDrawerNum }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((state) => !state);
  }, []);

  const ItemClicked = useCallback(
    (text, index) => {
      setDrawerNum(index);
    },
    [setDrawerNum],
  );

  const drawer = (
    <div>
      <ToolbarStyled />
      <Divider />
      <List>
        {items.map((text, index) => (
          <React.Fragment key={text}>
            <ListItem button onClick={() => ItemClicked(text, index)}>
              <ListItemText primary={text} />
            </ListItem>
            <hr />
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <AppBarStyled position="fixed" />
      <nav>
        <Hidden smUp implementation="css">
          <DrawerStyled
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
          >
            <DrawerPaper>{drawer}</DrawerPaper>
          </DrawerStyled>
        </Hidden>
        <Hidden xsDown implementation="css">
          <DrawerStyled variant="permanent" open>
            <DrawerPaper>{drawer}</DrawerPaper>
          </DrawerStyled>
        </Hidden>
      </nav>
      <Content />
    </Root>
  );
}

ResponsiveDrawer.propTypes = { window: PropTypes.func };

export default ResponsiveDrawer;
