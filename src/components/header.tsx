import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Navbar.Brand href="/" className="mx-3">Papeleria Central</Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav>
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/listaPaquetes">Lista de Paquetes</Nav.Link>
          </Nav>
          <NavDropdown title="Carrito" id="cart-dropdown">
            <NavDropdown.Item href="/carrito">
              Producto 1
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/carrito">
              Producto 2
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}