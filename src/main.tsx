import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from "./routes/home";
import Carrito from "./routes/carrito";
import Checkout from "./routes/checkout";
import ListaPaquetes from "./routes/listaPaquetes";
import Login from './routes/login';
import Paquete from './routes/paquete';
import Pedido from './routes/admin/pedido';
import Pedidos from './routes/admin/pedidos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, {
    path: "/login",
    element: <Login  />,
  }, {
    path: "/carrito",
    element: <Carrito  />,
  }, {
    path: "/checkout",
    element: <Checkout  />,
  }, {
    path: "/listaPaquetes",
    element: <ListaPaquetes  />,
  }, {
    path: "/paquete",
    element: <Paquete  />,
  }, {
    path: "/pedido",
    element: <Pedido  />,
  }, {
    path: "/pedidos",
    element: <Pedidos  />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
