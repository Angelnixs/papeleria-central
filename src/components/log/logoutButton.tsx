import { Button } from 'react-bootstrap';

const LogoutButton = () => {

  return (
    <Button variant="dark" as="a" onClick={() => console.log("logout")}>
      Log Out
    </Button>
  );
};

export default LogoutButton;