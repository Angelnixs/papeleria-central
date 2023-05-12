import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { sessionState } from './atoms';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/home";
import Carrito from "./routes/carrito";
import Checkout from "./routes/checkout";
import ListaPaquetes from "./routes/listaPaquetes";
import PaqueteView from './routes/paqueteView';
import Pedido from './routes/admin/pedido';
import Pedidos from './routes/admin/pedidos';
import Paquetes from './routes/admin/paquetes';
import Productos from './routes/admin/productos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/header";
import Footer from "./components/footer";
import { ProtectedRoute } from './components/protectedRoute';

const App = () => {
  const [ session, setSession ] = useRecoilState(sessionState);
  const [ mount, setMount ] = useState(false);
  
  useEffect(() => {checkSession()}, []);

  const checkSession = () => {
    const cookie = getCookie('session');
    if(cookie && session.id === null){
      axios.get(`${import.meta.env.VITE_API_FRONT}/jwt?tkn=${cookie}`).then((res: any)=>{
        setSession(res.data);
        setMount(true);
      })
    }else{
      setMount(true);
    }
  };

  function getCookie(name: string) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      path: "/paquete/:id",
      element: <PaqueteView  />,
    }, {
      path: "/admin/pedido",
      element: <ProtectedRoute><Pedido /></ProtectedRoute>,
    }, {
      path: "/admin/pedidos",
      element: <ProtectedRoute><Pedidos /></ProtectedRoute>,
    }, {
      path: "/admin/paquetes",
      element: <ProtectedRoute><Paquetes /></ProtectedRoute>,
    }, {
      path: "/admin/productos",
      element: <ProtectedRoute><Productos /></ProtectedRoute>,
    }
  ])
  
  return (
    <>
      <Header />
      {mount && <RouterProvider router={router} />}
      <Footer />
    </>   
  )
}

export default App;