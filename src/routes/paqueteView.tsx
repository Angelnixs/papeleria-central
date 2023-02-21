import { 
  Container,
  Row,
  Col,
  Image,
  Button,
} from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { paquetesState } from '../atoms';
import Paquete from '../components/paquete';
import PaqueteType from '../interfaces/paquete';
import { FC } from 'react';

const PaqueteView:FC = () => {
  const [paquetes, setPaquetes] = useRecoilState<any[]>(paquetesState);
  let { id } = useParams();

  // axios.get(`http://localhost:3001/paquetes/${id}`).then((res) => {
  //   console.log(res.data);
  // });

  return (
    <>
      <Container style={{ margin: '100px auto' }}>
        <Row style={{ marginBottom: '40px' }}>
          <Col sm={12} md={5} lg={4}>
            <Image src="https://via.placeholder.com/600x600.png?text=Paquete+1" fluid/>
          </Col>
          <Col sm={12} md={7} lg={5}>
            <div className="description">
              <h1>#{id} Product Name</h1>
              <p>$1,200 MXN</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque ornare purus at lacinia. Maecenas rutrum rhoncus euismod. Fusce condimentum posuere lobortis. </p>
              <Button variant="primary">
                Agregar al carrito
              </Button>
            </div>
          </Col>
          <Col sm={12} md={12} lg={3}>
            <h3>Incluye:</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2>Productos Similares</h2>
          </Col>
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

export default PaqueteView;