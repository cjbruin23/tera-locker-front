import { useAuth0 } from '@auth0/auth0-react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';
import BurgerMenu from './components/menu';
import axios from 'axios';
import { useEffect } from 'react';
import UserLoginButton from './components/user-login-button';
import { Button } from '@mui/material';

function App() {
  const { logout, isLoading, getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      console.log('accessToken', accessToken);
      const response = await axios.get(
        `${import.meta.env.VITE_LOCAL_API_URL}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('responseData', response);
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <BurgerMenu></BurgerMenu>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TeraLocker
            </Typography>
            <UserLoginButton />
            <div className="logout-button">
              <Button variant="contained" onClick={() => logout()}>
                Logout
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default App;
