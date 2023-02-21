import {
  Image,
  Card,
  Button,
} from 'react-bootstrap'

const Paquete = (props: any) => {
  const {
    id,
    name,
    img,
    price,
    desc,
    productos,
  } = props;

  return (
    <Card style={{ width: '18rem', marginBottom: '30px' }}>
      <Card.Img variant="top" src={ img } />
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
        <Card.Text> { desc }</Card.Text>
        <Button variant="primary">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default Paquete;