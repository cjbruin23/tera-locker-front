import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import "./App.css";

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Button variant="contained" onClick={() => loginWithRedirect()}>
        Sign Up
      </Button>
      <Button variant="contained" onClick={() => logout()}>
        Logout
      </Button>
      {isAuthenticated ? <div>{user!.name}</div> : <div>Not Loaded</div>}
    </div>
  );
}

export default App;
