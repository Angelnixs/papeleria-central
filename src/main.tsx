import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import './index.css'
import Home from "./routes/home";
import Carrito from "./routes/carrito";
import Checkout from "./routes/checkout";
import ListaPaquetes from "./routes/listaPaquetes";
import Login from './routes/login';
import Paquete from './routes/paquete';
import Pedido from './routes/admin/pedido';
import Pedidos from './routes/admin/pedidos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/header";
import Footer from "./components/footer";
import { RecoilRoot } from 'recoil';

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
    <RecoilRoot>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </RecoilRoot>
  </React.StrictMode>
)
