import { useRecoilState } from 'recoil';
import { carritoState } from '../atoms';
import  {
  Container,
  Row,
  Col,
  Button,
  Card,
  Image,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import '../assets/styles/carrito.css'

export default function Carrito() {
  const [productos, setProductos] = useRecoilState(carritoState);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    console.log(productos)
    productos.forEach((p: any) => {
      total += p.price;
    });

    setTotal(total);
  }, [productos]);

  const removeProduct = (index: number) => {
    console.log(index)
  }

  return (
    <>
      <Container style={{ margin: '100px auto '}}>
        <Row>
          <Col xs={12} sm={7}>
            <Card>
              <Card.Body>
                <h1>Carrito</h1>
                {
                  productos.map((p: any, i: number) => (
                    <Row key={i}>
                      <hr />
                      <Col sm={4}>
                        <Image src={p.img} fluid />
                      </Col>
                      <Col sm={7}>
                        <h4>{ p.name }</h4>
                        <p>${ p.price }.00 MXN</p>
                        <p>{ p.desc }</p>
                      </Col>
                      <Col sm={1}>
                        <div className="remove-item" onClick={() => removeProduct(p.id)}>
                          <FontAwesomeIcon icon={faClose} />
                        </div>
                      </Col>
                    </Row>
                  ))
                }
                <h5>Subtotal: ${ total }.00 MXN</h5>
              </Card.Body> 
            </Card>
          </Col>
          <Col xs={12} sm={5}>
            <Card>
              <Card.Body>
                <h2>Total</h2>
                <hr />
                <div className="subtotal">
                  <h4>Subtotal</h4>
                  <h4>${ total }.00 MXN</h4>
                </div>
                <div className="subtotal">
                  <h4>Entrega</h4>
                  <h4>$99.00 MXN</h4>
                </div>
                <hr />
                <Button variant="success">Checkout</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}