import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Box, Paper } from '@mui/material';

const Login = () => {
  const { login, userName, setUserName } = useAuth();
  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    setUserName(event.target.value);
  };

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width='100vw'
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
        <Typography variant="h5" mb={2}>
          Login Page
        </Typography>
        <TextField
          fullWidth
          label="Enter your name"
          variant="outlined"
          value={userName}
          onChange={handleChangeInput}
          sx={{ mb: 2 }}
        />
        <Button
          fullWidth
          variant="contained"
          disabled={!userName.length}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
