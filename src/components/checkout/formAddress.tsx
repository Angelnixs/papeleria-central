import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FormAddress() {

	return (
		<Form>
			{/* <Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group> */}
			<Row>
				<Col>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Nombre</Form.Label>
						<Form.Control type="text" placeholder="Nombre" />
					</Form.Group>
				</Col>
				<Col>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Apellido</Form.Label>
						<Form.Control type="text" placeholder="Apellido" />
					</Form.Group>			
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Calle</Form.Label>
						<Form.Control type="text" placeholder="Calle/Numero/Colonia" />
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Codigo Postal</Form.Label>
						<Form.Control type="text" placeholder="Codigo postal" />
					</Form.Group>			
				</Col>
				<Col>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Estado</Form.Label>
						<Form.Control type="text" placeholder="Estado" />
					</Form.Group>
				</Col>
				<Col>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Ciudad</Form.Label>
						<Form.Control type="text" placeholder="Ciudad" />
					</Form.Group>			
				</Col>
			</Row>
			<Col className="justify-content-end d-flex">
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Usar esta Dirección para el pago" />
				</Form.Group>
			</Col>	
		</Form>
	)
}