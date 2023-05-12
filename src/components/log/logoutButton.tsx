import { Button } from 'react-bootstrap';

const LogoutButton = () => {

  const handleLogout = () => {
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload()
  }
  return (
    <Button variant="dark" as="a" onClick={() => handleLogout()}>
      Log Out
    </Button>
  );
};

export default LogoutButton;