import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { sessionState } from '../atoms';
import { Nav, Navbar, Dropdown, Button } from 'react-bootstrap';
import LogoutButton from "../components/log/logoutButton";
import GenericModal from '../components/genericModal'
import Login from '../routes/login';
import "../assets/styles/header.css"

const Header:FC = () => {  
  const [session, setSession] = useRecoilState(sessionState);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {checkSession()}, []);
  const checkSession = () => {
    const cookie = getCookie('session');
    if(cookie && session.id === null){
      axios.get(`${import.meta.env.VITE_API_FRONT}/jwt?tkn=${cookie}`).then((res: any)=>{
        setSession(res.data);
      })
    }
  };

  function getCookie(name: string) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="nav-min-height" style={{ marginBottom: '40px' }}>
      <Navbar.Brand href="/" className="ms-4">
        <img alt="" src="/pylc.png" width="40" height="40" className="d-inline-block align-top"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-3" />        
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between mx-3">
        <Nav>
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/listaPaquetes">Lista de Paquetes</Nav.Link>
          <Nav.Link className='d-menu-show-mobile'>
            <Button variant="secondary" onClick={() => setModalShow(true)}>
              Iniciar Sesión
            </Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Dropdown className="mx-2 d-menu-hide-mobile me-3 pointer" autoClose="outside">
        <Dropdown.Toggle id="cart-menu" className="icon" as="div">
          <i className="bi bi-cart4"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <Dropdown.Item href="/paquete">Item 1</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/paquete">Item 2</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.ItemText><Button variant="dark" as="a" href="/carrito">Ir A Carrito</Button></Dropdown.ItemText>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="mx-2 d-menu-hide-mobile me-5 pointer" autoClose="outside">
        <Dropdown.Toggle id="user-menu" className="icon" as="div">
          <i className="bi bi-person-fill"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          {session.id !== null ? 
            <div>
              <Dropdown.ItemText >
                <h2>{session.name}</h2>
                <p>{""}</p>
              </Dropdown.ItemText >
              <Dropdown.ItemText ><LogoutButton/></Dropdown.ItemText>
            </div>
          : 
            <Dropdown.ItemText >
              <Button variant="dark" onClick={() => setModalShow(true)}>
                Iniciar Sesión
              </Button>
            </Dropdown.ItemText>
          }          
        </Dropdown.Menu>
      </Dropdown>
      <GenericModal show={modalShow} onHide={() => setModalShow(false)} ><Login/></GenericModal>
    </Navbar>
  );
}

export default Header;