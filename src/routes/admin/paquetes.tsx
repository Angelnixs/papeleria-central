import { FC, useEffect, useState } from "react";
import { Table, Container, Button } from 'react-bootstrap';
import axios from "axios";

const Paquetes:FC = () => {
  const [paquetes, setPaquetes] = useState<any[]>([]);

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
    <Container className="text-center" fluid style={{marginTop:'50px'}}>
      <h3 className="mb-4">Editar Paquetes</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Imagen</th>
            <th>Grado</th>
            <th>Precio</th>
            <th>Colegio</th>
            <th>Descripción</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {
            paquetes.map((p, i: number) => (
              <tr key={i}>
                <td>{p.id}</td>
                <td><img src={p.img} className="w-25" /></td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.school}</td>
                <td>{p.sch_description}</td>
                <td>{p.deleted}</td>
                <td><Button variant="primary">Editar</Button></td>
              </tr>
            ))
          }      
        </tbody>
      </Table>
    </Container>
  );
}

export default Paquetes;