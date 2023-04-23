import  {
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import HomeCarousel from '../components/home/homeCarousel';
import Paquete from '../components/paquete';
import { useRecoilState } from 'recoil';
import { paquetesState } from '../atoms';
import { FC } from 'react';
import PaqueteType from '../interfaces/paquete';
import axios from 'axios'
import React, { useEffect, useState } from 'react';


const Home:FC = () => {
  const [paquetes, setPaquetes] = useRecoilState<any[]>(paquetesState);

  useEffect(() => {
    axios.get('https://healthy-vestments-tuna.cyclic.app/get-packages')
    .then(({ data }) => {
      setPaquetes(data.data)
    })
    .catch(error => {
      console.error(error);
    });
  }, []);


  return (
    <>
      <HomeCarousel />
      <Container className="mt-3">
        <Row>
          <Col xs={12}>
            <h1 style={{ textAlign: "center", fontSize: '3em', margin: '40px', fontWeight: '100' }}>Paquetes</h1>
          </Col>
        </Row>
        <Row>
          { 
            paquetes.map((p: PaqueteType, i: number) => (
              <Col xs={12} md={6} lg={3} key={i}>
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

export default Home;