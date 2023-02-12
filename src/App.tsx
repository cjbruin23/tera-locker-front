import { useAuth0 } from '@auth0/auth0-react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import './App.css'
import BurgerMenu from './components/menu'

function App() {
  const { loginWithRedirect, logout, isLoading } = useAuth0()
  if (isLoading) {
    return <div>Loading...</div>
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
            <Button variant="contained" onClick={() => loginWithRedirect()}>
              Sign Up
            </Button>
            <div className="logout-button">
              <Button variant="contained" onClick={() => logout()}>
                Logout
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default App
