import { useState } from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e:any) => {
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
      console.log(res.data.token);
      document.cookie = "session" + "=" + (res.data.token || "") + "; path=/";
      window.location.href = '/';
    })
  }

  return (
    <Container >
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail( e.target.value ) } />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword( e.target.value ) } />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={(e)=>{handleSubmit(e)}} >
          Submit
        </Button>
      </Form>
    </Container>
  );
}