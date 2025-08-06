import { Outlet, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Stack
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomTypography from '../inputs/CustomTypograpgy';

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
  }
}));

const CustomAppBar = () => {
  const { userName, logout } = useAuth();
  const classes = useStyles();

  return (
    <Box>
      <AppBar position="fixed" className={classes.appBar}>
        <CustomTypography text={`Welcome, ${userName}`} />
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Button className={classes.button} component={RouterLink} to="/dashboard">Dashboard</Button>
            <Button className={classes.button} component={RouterLink} to="/view-profile">View Profile</Button>
            <Button className={classes.button} component={RouterLink} to="/view-projects">View Projects</Button>
            <Button className={classes.button} onClick={logout}>Logout</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box className={classes.content}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default CustomAppBar;
