import { FC, useState } from 'react';
import { useRecoilState } from 'recoil';
import { sessionState } from '../atoms';
import { Nav, Navbar, Dropdown, Button, Row, Col } from 'react-bootstrap';
import LogoutButton from "../components/log/logoutButton";
import GenericModal from '../components/genericModal'
import Login from '../routes/login';
import "../assets/styles/header.css"

const Header:FC = () => {  
  const [session] = useRecoilState(sessionState);
  const [login, setLogin] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  const logHandler = (e: string) => {
    if(e === "login") setLogin(true);
    else setLogin(false);
    setModalShow(true);
  }
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="nav-min-height" style={{ marginBottom: '0px' }}>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-3" /> 

      <Navbar.Brand href="/" className="ms-5 d-menu-hide-mobile">
        <img alt="" src="/pylc.png" width="40" height="40" className="d-inline-block align-top"/>
      </Navbar.Brand> 

      {/* // only mobile*/}
        <Row>
          <Col>
            <Dropdown className="pointer d-menu-show-mobile" autoClose="outside">
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
          </Col>
          <Col>
            <Dropdown className="mx-2 me-4 pointer d-menu-show-mobile" autoClose="outside">
              <Dropdown.Toggle id="user-menu" className="icon" as="div">
                <i className="bi bi-person-fill"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                {session.id !== null ? 
                  <div style={{textAlign: 'center'}}>
                    <Dropdown.ItemText >
                      <h5>{session.name}</h5>
                      <p>{""}</p>
                    </Dropdown.ItemText >
                    <Dropdown.ItemText ><LogoutButton/></Dropdown.ItemText>
                  </div>
                : 
                  <div style={{textAlign: 'center'}}>
                    <Dropdown.ItemText >
                      <Button variant="dark" onClick={() => logHandler('login')}>
                        Iniciar Sesión
                      </Button>
                    </Dropdown.ItemText>
                    <Dropdown.ItemText >
                      <Button variant="dark" onClick={() => logHandler('register')}>
                        Registrarse
                      </Button>
                    </Dropdown.ItemText>
                  </div>
                }          
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>          
      {/* // only mobile*/} 

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between mx-3">
        <Nav>
          <Nav.Link href="/"><Button variant="outline-light" size="sm" style={{width: 'max-content', border: 'none'}}>Listas Escolares</Button></Nav.Link>
          <Nav.Link href="/"><Button variant="outline-light" size="sm" style={{width: 'max-content', border: 'none'}}>Productos</Button> </Nav.Link>
          {session.type === 1 &&
            <>
              <Nav.Link href="/admin/paquetes"><Button variant="outline-light" size="sm" style={{width: 'max-content', border: 'none'}}>Administrar Paquetes</Button></Nav.Link>
              <Nav.Link href="/admin/productos"><Button variant="outline-light" size="sm" style={{width: 'max-content', border: 'none'}}>Administrar Productos</Button></Nav.Link>
              <Nav.Link href="/admin/pedidos"><Button variant="outline-light" size="sm" style={{width: 'max-content', border: 'none'}}>Administrar Pedidos</Button></Nav.Link>
            </>
          }
        </Nav>
      </Navbar.Collapse> 
      
      {/* // only desktop*/}
        <Dropdown className="mx-2 me-3 d-menu-hide-mobile pointer" autoClose="outside">
          <Dropdown.Toggle id="cart-menu" className="icon" as="div">
          <Button variant="outline-light" size="sm" style={{width: 'max-content', border: 'none'}}><i className="bi bi-cart4"></i></Button>
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item href="/paquete">Item 1</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/paquete">Item 2</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.ItemText><Button variant="dark" as="a" href="/carrito">Ir A Carrito</Button></Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>

        {session.id !== null ?  
          <Dropdown className="mx-3 d-menu-hide-mobile me-5 pointer" autoClose="outside">
            <Dropdown.Toggle id="user-menu" className="icon" as="div">
            <Button variant="outline-light" size="sm" style={{width: 'max-content', border: 'none'}}><i className="bi bi-person-fill"></i></Button>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.ItemText style={{textAlign: 'center'}} >
                <h5>{session.name}</h5>
                <p>{""}</p>
              </Dropdown.ItemText >
              <Dropdown.ItemText style={{textAlign: 'center'}} ><LogoutButton/></Dropdown.ItemText>
            </Dropdown.Menu>
          </Dropdown>                
        : 
          <Row className="d-menu-hide-mobile">
            <Col style={{padding: '0px 10px 0px 15px'}}>
              <Button variant="outline-light" size="sm" style={{width: 'max-content', borderColor: 'rgba(255, 255, 255, 0.55)'}} onClick={() => logHandler('login')}>Iniciar Sesión</Button>
            </Col>
            <Col style={{padding: '0px 30px 0px 0px'}}>
              <Button variant="outline-light" size="sm" style={{width: 'max-content', borderColor: 'rgba(255, 255, 255, 0.55)'}} onClick={() => logHandler('register')}>Registrarse</Button>
            </Col>
          </Row>  
        }
      {/* // only desktop*/}

      <GenericModal show={modalShow} onHide={() => setModalShow(false)} ><Login login={login} /></GenericModal>
    </Navbar>
  );
}

export default Header;