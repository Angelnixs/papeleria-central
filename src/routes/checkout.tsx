import { FC, useState } from 'react';
import { Tab, Container, Row, Col, Nav, Button } from 'react-bootstrap';
import FormAddress from '../components/checkout/formAddress'
import Payments from '../components/checkout/payments'
import Confirm from '../components/checkout/confirmOrder'
import '../assets/styles/checkout.css'

const Checkout:FC = () => {
  const [activePanel, setActivePanel] = useState({
    address:true,
    payment:false,
    order:false
  })

  const panelHandler = (panel: string) => {
    setActivePanel({
      address: panel === "address",
      payment: panel === "payment",
      order: panel === "order"
    })
  }

  return (
    <Container className="mt-5 mb-5 shadowBox">
      <Tab.Container id="left-tabs-example" >
        <Row className='tab-style'>
          <Col sm={12}>
            <Nav variant="pills" className="justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="address" active={activePanel.address}>Dirección de entrega</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="payment" active={activePanel.payment}>Método de pago</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="order" active={activePanel.order}>Confirmar pedido</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="address" className='m-3' active={activePanel.address}>
                <FormAddress />
                <Row className='mt-3'>
                  <Col className="justify-content-end d-flex">
                    <Button variant="primary" onClick={()=>panelHandler("payment")}>
                      Siguiente
                      <i className="bi bi-caret-right-fill"></i>
                    </Button>     				
                  </Col>	
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="payment" className='m-3' active={activePanel.payment}>
                <Payments />
                <Row className='mt-3'>
                  <Col className="justify-content-start d-flex">
                    <Button variant="primary" onClick={()=>panelHandler("address")}>
                      <i className="bi bi-caret-left-fill"></i>
                      Volver
                    </Button>     				
                  </Col>	
                  <Col className="justify-content-end d-flex">
                    <Button variant="primary" onClick={()=>panelHandler("order")}>
                      Siguiente
                      <i className="bi bi-caret-right-fill"></i>
                    </Button>     				
                  </Col>	
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="order" className='m-3' active={activePanel.order}>
                <Confirm />
                <Row className='mt-3'>
                  <Col className="justify-content-start d-flex">
                    <Button variant="primary" onClick={()=>panelHandler("payment")}>
                      <i className="bi bi-caret-left-fill"></i>
                      Volver
                    </Button>     				
                  </Col>	
                  <Col className="justify-content-end d-flex">
                    <Button variant="success" onClick={()=>panelHandler("order")}>
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

export default Checkout;

function tabContent (){
  
}
