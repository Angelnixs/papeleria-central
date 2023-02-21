import { FC } from 'react';
import { Nav, Navbar, Dropdown, Button } from 'react-bootstrap';
import "../assets/styles/header.css"

const Header:FC = () => {
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
          <Nav.Link href="/login" className='d-menu-show-mobile'>Iniciar Sesión</Nav.Link>
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
          <Dropdown.Item href="/login">Iniciar Sesión</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
}

export default Header;