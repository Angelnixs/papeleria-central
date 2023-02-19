import  {
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import HomeCarousel from '../components/home/homeCarousel'
import { useState } from 'react';
import Paquete from '../components/paquete';
import { useRecoilState } from 'recoil';
import { paquetesState } from '../atoms';

export default function Home() {
  const [paquetes, setPaquetes] = useRecoilState(paquetesState);

  return (
    <>
      <HomeCarousel />
      <Container className="mt-3">
        <Row>
          <Col xs={12}>
            <h1 style={{ textAlign: "center" }}>Paquetes</h1>
          </Col>
        </Row>
        <Row>
          { 
            paquetes.map((p) => (
              <Col xs={12} md={6} lg={3}>
                <Paquete
                  name={p.name}
                  desc={p.desc}
                  price={p.price}
                  img={p.img} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
}