import { useState } from 'react';
import {Button, Form, Container, Card, Nav} from 'react-bootstrap';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState({
    email: '',
    password: '',
    name: '',
    number: '',
    address: '',
  });
  
  const handleLogin = (e:any) => {
    e.preventDefault();
    const axiosToken = axios.create({
      headers: {
        'Content-Type': 'application/json',
      }
    });
    axiosToken.post(`${import.meta.env.VITE_API}/login`, {
      email: email,
      password: password
    }).then((res: any)=>{
      document.cookie = "session" + "=" + (res.data.token || "") + "; path=/";
      window.location.href = '/';
    }).catch((err: any)=>{
      alert(err.response.data.message)
      console.log(err.response.data.message);
    })
  }

  const handleRegister = (e:any) => {
    e.preventDefault();
    const axiosToken = axios.create({
      headers: {
        'Content-Type': 'application/json',
      }
    });
    axiosToken.post(`${import.meta.env.VITE_API}/register`, register)
    .then((res: any)=>{
      document.cookie = "session" + "=" + (res.data.token || "") + "; path=/";
      window.location.href = '/';
    }).catch((err: any)=>{
      alert(err.response.data.message)
      console.log(err.response.data.message);
    })
  }

  return (
    <Container >
      <Card style={{ width: 'auto', border: 'none' }}>
        <h5 style={{textAlign: 'center'}}>{login ? 'Iniciar Sesión' : 'Registrarse'}</h5>
        <Card.Body> 
          {login ? 
            <Form>
              <Form.Text className="text-muted" style={{textAlign: 'center', display: 'block', margin:'0px 0px 10px 0px'}}>
                No tienes una cuenta? <a href='#register' onClick={()=>setLogin(false)}>Regístrate</a>
              </Form.Text>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa Correo" value={email} onChange={(e)=>setEmail( e.target.value ) } />                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresa Contraseña" value={password} onChange={(e)=>setPassword( e.target.value ) } />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                {/* <Form.Check type="checkbox" label="Check me out" /> */}
              </Form.Group>
              <Button variant="primary" onClick={(e)=>{handleLogin(e)}} style={{margin: 'auto', display: 'block'}}>
                Entrar
              </Button>
            </Form>
          : 
            <Form>
              <Form.Text className="text-muted" style={{textAlign: 'center', display: 'block', margin:'0px 0px 10px 0px'}}>
                Ya tienes una cuenta? <a href='#register' onClick={()=>setLogin(true)}>Inicia Sesión</a>
              </Form.Text>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="" value={register.name} onChange={(e)=>setRegister({...register, name: e.target.value})} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ej. micorreo@gmail.com" value={register.email} onChange={(e)=>setRegister({...register, email: e.target.value})} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Ej. 5 de Mayo 311, Centro, 64000 Monterrey, N.L." value={register.address} onChange={(e)=>setRegister({...register, address: e.target.value})} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="tel" placeholder="" value={register.number} onChange={(e)=>setRegister({...register, number: e.target.value})} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="" value={register.password} onChange={(e)=>setRegister({...register, password: e.target.value})} />
              </Form.Group>

              <Button variant="primary" onClick={(e)=>{handleRegister(e)}} style={{margin: 'auto', display: 'block'}}>
                Crear Cuenta
              </Button>
            </Form>
          }          
        </Card.Body>
      </Card>      
    </Container>
  );
}