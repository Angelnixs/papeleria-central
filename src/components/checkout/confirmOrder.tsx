import {Button, Card, Container, Row, Col} from 'react-bootstrap';

export default function ConfirmOrder(){
    return (
			<Card className="text-center">
				<Card.Header>Confirma tus Datos</Card.Header>
				<Card.Body>
					<Container>
						<Row>
							<Col>
								<Card.Title>Dirección</Card.Title>
								<Card.Text>
									Juan Gonzalez
								</Card.Text>
								<Card.Text>
									Valle del tinto 136,Valle del Contry, <br/> C.P. 6712, NL, Mty
								</Card.Text>
							</Col>
							<Col>
								<Card.Title>Paquetes</Card.Title>
								<Card.Text>
									Paquete #1  $ 200.
								</Card.Text>
								<Card.Text>
									Paquete #2  $ 200.
								</Card.Text>
								<Card.Text>
									<b>Total  $ 400.</b>
								</Card.Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<Card.Title>Metodo de Pago</Card.Title>
								<Card.Text>
									Tarjeta
								</Card.Text>
								<Card.Text>
									*************2345
								</Card.Text>
							</Col>
						</Row>
					</Container>
				</Card.Body>
				<Card.Footer className="text-muted">We'll never share your information with anyone else</Card.Footer>
			</Card>
    )
}