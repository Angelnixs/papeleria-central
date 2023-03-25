import { useState } from 'react';
import '../../assets/styles/pedidos.css'

const Pedidos = () => {
  const [data, setData] = useState([{
    id: 1,
    fecha: 'xx/xx/xx',
    direccion: 'Rubi 5440',
    productos: '1, 2, 3',
    estatusPago: 'Pagado',
    estatusEnvio: 'Entregado',
  }, {
    id: 2,
    fecha: 'xx/xx/xx',
    direccion: 'Rubi 5440',
    productos: '1, 2, 3',
    estatusPago: 'Pagado',
    estatusEnvio: 'Entregado',
  }, {
    id: 3,
    fecha: 'xx/xx/xx',
    direccion: 'Rubi 5440',
    productos: '1, 2, 3',
    estatusPago: 'Pagado',
    estatusEnvio: 'Entregado',
  }]);

  const verPedido = (id: number) => {
    console.log('Ver Pedido', id);
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Pedidos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Dirección de Entrega</th>
            <th>Productos</th>
            <th>Estatus Pago</th>
            <th>Estatus Envío</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.fecha}</td>
              <td>{item.direccion}</td>
              <td>{item.productos}</td>
              <td>{item.estatusPago}</td>
              <td>{item.estatusEnvio}</td>
              <td><button onClick={() => verPedido(item.id)}>Ver</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pedidos;
