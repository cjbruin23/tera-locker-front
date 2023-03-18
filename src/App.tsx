import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BurgerMenu from './components/menu';
import axios from 'axios';
import UserLoginButton from './components/user-login-button';
import './App.css';
import FileUploadForm from './components/file-upload-form';

function App() {
  const { logout, isLoading, getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      await axios.get(`${import.meta.env.VITE_LOCAL_API_URL}/files`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
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
      <FileUploadForm></FileUploadForm>
    </div>
  );
}

export default App;
