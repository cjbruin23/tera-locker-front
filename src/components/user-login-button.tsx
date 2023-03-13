import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

const UserLoginButton = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  if (isAuthenticated && !!user) {
    console.log('user', user);
    return <div>{user.name}</div>;
  }

  return (
    <Button variant="contained" onClick={() => loginWithRedirect()}>
      Sign Up
    </Button>
  );
};

export default UserLoginButton;
