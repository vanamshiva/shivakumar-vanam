import { Outlet, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import CustomTypography from '../inputs/CustomTypograpgy';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles(() => ({
  appBar: {
    display: 'flex !important',
    justifyContent: 'space-between',
    flexDirection: 'row !important',
    alignItems: 'center',
    paddingLeft: '16px',
    paddingRight: '16px',
    backgroundColor: '#ffffff !important'
  },
  content: {
    padding: '32px',
    marginTop: '64px',
    height: 'calc(100vh - 64px)',
    width: '100vw',
    boxSizing: 'border-box',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(to bottom, #c7d2fe, #7dd3fc, #f0abfc) !important'
  },
  button: {
    color: '#2891e6 !important',
    border: '1px solid #2891e6 !important',
    textTransform: 'none !important',
    padding: '6px 16px !important',
    borderRadius: '6px !important',
    fontWeight: '500 !important',
    backgroundColor: '#e3f2fd !important',
    borderColor: '#1976d2 !important',
    '&:hover': {
      backgroundColor: '#e3f2fd !important',
      borderColor: '#1976d2 !important'
    }
  },
  toolbar: {
    width: '100% !important',
    display: 'flex !important',
    justifyContent: 'space-between !important',
    alignItems: 'center !important',
    paddingLeft: '8px !important',
    paddingRight: '8px !important',
    minHeight: '64px !important'
  }
}));

const navLinks = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'View Profile', to: '/view-profile' },
  { label: 'View Projects', to: '/view-projects' }
];

const CustomAppBar = () => {
  const { userName, logout } = useAuth();
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <Box>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <CustomTypography text={`Welcome, ${userName}`} />
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon sx={{fill: '#000'}} />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                  sx: {
                    marginTop: '64px',
                    maxHeight: 'calc(100vh - 64px)',
                  }
                }}
              >
                <Box sx={{ width: 220 }}>
                  <List>
                    {navLinks.map((link) => (
                      <ListItem key={link.label} disablePadding>
                        <ListItemButton
                          component={RouterLink}
                          to={link.to}
                          onClick={handleDrawerToggle}
                        >
                          <ListItemText primary={link.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => { handleDrawerToggle(); logout(); }}>
                        <ListItemText primary="Logout" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Stack direction="row" spacing={2}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  className={classes.button}
                  component={RouterLink}
                  to={link.to}
                >
                  {link.label}
                </Button>
              ))}
              <Button className={classes.button} onClick={logout}>Logout</Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
      <Box className={classes.content}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default CustomAppBar;
