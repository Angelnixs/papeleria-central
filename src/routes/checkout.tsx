import { FC, useState } from 'react';
import { Tab, Container, Row, Col, Nav, Button } from 'react-bootstrap';
import FormAddress from '../components/checkout/formAddress'
import Payments from '../components/checkout/payments'
import Confirm from '../components/checkout/confirmOrder'
import '../assets/styles/checkout.css'

const Checkout:FC = () => {
  const [panel1, setPanel1] = useState(true)
  const [panel2, setPanel2] = useState(false)
  const [panel3, setPanel3] = useState(false)

  const activePanel = (panel: string) => {
    setPanel1(false)
    setPanel2(false)
    setPanel3(false)
    if(panel === "1") setPanel1(true)
    if(panel === "2") setPanel2(true)
    if(panel === "3") setPanel3(true)
  }

  return (
    <Container className="mt-5 mb-5 shadowBox">
      <Tab.Container id="left-tabs-example" >
        <Row className='tab-style'>
          <Col sm={12}>
            <Nav variant="pills" className="justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="address" active={panel1}>Dirección de entrega</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="payment" active={panel2}>Método de pago</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="order" active={panel3}>Confirmar pedido</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="address" className='m-3' active={panel1}>
                <FormAddress />
                <Row className='mt-3'>
                  <Col className="justify-content-end d-flex">
                    <Button variant="primary" onClick={()=>activePanel("2")}>
                      Siguiente
                      <i className="bi bi-caret-right-fill"></i>
                    </Button>     				
                  </Col>	
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="payment" className='m-3' active={panel2}>
                <Payments />
                <Row className='mt-3'>
                  <Col className="justify-content-start d-flex">
                    <Button variant="primary" onClick={()=>activePanel("1")}>
                      <i className="bi bi-caret-left-fill"></i>
                      Volver
                    </Button>     				
                  </Col>	
                  <Col className="justify-content-end d-flex">
                    <Button variant="primary" onClick={()=>activePanel("3")}>
                      Siguiente
                      <i className="bi bi-caret-right-fill"></i>
                    </Button>     				
                  </Col>	
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="order" className='m-3' active={panel3}>
                <Confirm />
                <Row className='mt-3'>
                  <Col className="justify-content-start d-flex">
                    <Button variant="primary" onClick={()=>activePanel("2")}>
                      <i className="bi bi-caret-left-fill"></i>
                      Volver
                    </Button>     				
                  </Col>	
                  <Col className="justify-content-end d-flex">
                    <Button variant="success" onClick={()=>activePanel("3")}>
                      Realizar Pedido                      
                    </Button>     				
                  </Col>	
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>   
    </Container>
  );
}

function tabContent (){
  
}

export default Checkout;