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
import { useLoaderData } from 'react-router-dom';
import PaqueteType from '../interfaces/paquete';
import { useEffect } from 'react';


const Home:FC = () => {
  const [paquetes, setPaquetes] = useRecoilState<any[]>(paquetesState);
  const cosas:any = useLoaderData()
  
  useEffect(() => {
    setPaquetes(cosas.data)    
  }, [cosas]);

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
                  img={p.img || '/default.png'} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
}

export default Home;