import { useState, useEffect, useRef } from 'react';
import {Button, Form, Container, Card, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import '../assets/styles/login.css'
interface RegisterObj {
  email: string;
  password: string;
  name: string;
  number: string;
  address: any | {
    street: string;
    number: string;
    city: string;
    state: string;
    district: string;
    zip: string;
  };
}

export default function Login(props: any) {
  const firstUpdate = useRef(false);
  const axiosToken = axios.create({
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(props.login);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [register, setRegister] = useState<RegisterObj>({
    email: '',
    password: '',
    name: '',
    number: '',
    address: {
      street: '',
      number: '',
      city: '',
      state: 'NL',
      district: '',
      zip: '',      
    }
  });
  const [error, setError] = useState<RegisterObj>({
    email: '',
    password: '',
    name: '',
    number: '',
    address: {
      street: '',
      number: '',
      city: '',
      state: '',
      district: '',
      zip: '',      
    }
  });

  useEffect(() => {
    if (firstUpdate.current) handleValidate()    
  }, [register])
  
  const handleLogin = (e:any) => {
    e.preventDefault();    
    axiosToken.post(`${import.meta.env.VITE_API}/login`, {
      email: email,
      password: password
    }).then((res: any)=>{
      document.cookie = "session" + "=" + (res.data.token || "") + "; path=/";      
      location.reload()
    }).catch((err: any)=>{
      alert(err.response.data.message)
    })
  }

  const handleRegister = (e:any) => {
    e.preventDefault();    
    firstUpdate.current = true;
    let validError = handleValidate();

    if(confirmPassword !== register.password){
      alert('Las contraseñas no coinciden')
      return;
    }else{
      if(validError){
        return;
      } else {
        axiosToken.post(`${import.meta.env.VITE_API}/register`, register)
        .then((res: any)=>{
          document.cookie = "session" + "=" + (res.data.token || "") + "; path=/";
          location.reload()
        }).catch((err: any)=>{
          alert(err.response.data.message)
        })
      }
    }
      
  }

  const handleValidate = () => {
    let validError = false;
    let newError = {...error};
    for (const key in register) {
      if(key == 'address'){
        for (const key2 in register.address) {
          if(register.address[key2 as keyof typeof register.address] == ''){
            newError.address[key2 as keyof typeof newError.address] = 'fieldError';
            validError = true;
          }else newError.address[key2 as keyof typeof newError.address] = '';
        }
      }else{
        if(register[key as keyof typeof register] == ''){
          newError[key as keyof typeof error] = 'fieldError';
          validError = true;
        }else newError[key as keyof typeof error] = '';
      }
      if(key == 'email'){
        const emailVal = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(register[key as keyof typeof register]);
        if(emailVal){
          newError[key as keyof typeof error] = '';
        }else{
          newError[key as keyof typeof error] = 'fieldError';
          validError = true;
        }
      }
    }
    setError(newError)
    return validError;
  }

  return (
    <Container >
      <Card style={{ width: 'auto', border: 'none' }}>
        <h5 style={{textAlign: 'center'}}>{login ? 'Iniciar Sesión' : 'Registrarse'}</h5>
        <Card.Body> 
          {login ? 
            <Form onSubmit={(e)=>handleLogin(e)}>
              <Form.Text className="text-muted" style={{textAlign: 'center', display: 'block', margin:'0px 0px 10px 0px'}}>
                No tienes una cuenta? <a href='#' onClick={()=>setLogin(false)}>Regístrate</a>
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
              <Button variant="primary" type='submit' style={{margin: 'auto', display: 'block'}}>
                Entrar
              </Button>
            </Form>
          : 
            <Form onSubmit={(e)=>handleRegister(e)}>
              <Form.Text className="text-muted" style={{textAlign: 'center', display: 'block', margin:'0px 0px 10px 0px'}}>
                Ya tienes una cuenta? <a href='#' onClick={()=>setLogin(true)}>Inicia Sesión</a>
              </Form.Text>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control className={error.name} type="text" placeholder="" value={register.name} onChange={(e)=>setRegister({...register, name: e.target.value})} />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control className={error.email} type="email" placeholder="Ej. micorreo@gmail.com" value={register.email} onChange={(e)=>setRegister({...register, email: e.target.value})} />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicStreet">
                  <Form.Label>Calle</Form.Label>
                  <Form.Control className={error.address.street} type="text" placeholder="Ej. 5 de Mayo" value={register.address.street} onChange={(e)=>setRegister({...register, address: {...register.address, street: e.target.value}})} />
                </Form.Group>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Numero</Form.Label>
                    <Form.Control className={error.address.number} type="text" placeholder="Ej. 311" value={register.address.number} onChange={(e)=>setRegister({...register, address: {...register.address, number: e.target.value}})} />
                  </Form.Group>
                </Col>                
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicZip">
                    <Form.Label>Código Postal</Form.Label>
                    <Form.Control className={error.address.zip} type="text" placeholder="Ej. 64000" value={register.address.zip} onChange={(e)=>setRegister({...register, address: {...register.address, zip: e.target.value}})} />
                  </Form.Group>
                </Col>
              </Row>              
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicDistrict">
                    <Form.Label>Colonia</Form.Label>
                    <Form.Control className={error.address.district} type="text" placeholder="Ej. Centro" value={register.address.district} onChange={(e)=>setRegister({...register, address: {...register.address, district: e.target.value}})} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control className={error.address.city} type="text" placeholder="Ej. Monterrey" value={register.address.city} onChange={(e)=>setRegister({...register, address: {...register.address, city: e.target.value}})} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control className={error.number} type="tel" placeholder="" value={register.number} onChange={(e)=>setRegister({...register, number: e.target.value})} />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control className={error.password} type="password" placeholder="" value={register.password} onChange={(e)=>setRegister({...register, password: e.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                </Form.Group>
              </Row>

              <Button variant="primary" type='submit' style={{margin: 'auto', display: 'block'}}>
                Crear Cuenta
              </Button>
            </Form>
          }          
        </Card.Body>
      </Card>      
    </Container>
  );
}