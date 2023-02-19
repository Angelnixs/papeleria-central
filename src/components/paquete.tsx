import {
  Image,
  Card,
  Button,
} from 'react-bootstrap'

export default function Paquete(props: any) {
  const {
    name,
    img,
    price,
    desc,
    items,
  } = props;

  return (
    <Card style={{ width: '18rem', marginBottom: '30px' }}>
      <Card.Img variant="top" src={ img } />
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
        <Card.Text> { desc }</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}