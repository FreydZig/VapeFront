import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const RegistrationPage = (props) => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const user = localStorage.getItem('userItem');

  if(user) console.log(user.login);

  const dispatch = useDispatch();

  const submit = (e) =>{
    e.preventDefault();
    console.log(login, ' ', password)
    dispatch({type: 'REGISTRATE', payload:{login: login, password: password}});
  }

  return (
    <Form className='m-5' onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={e => setLogin(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
  );
};

export default RegistrationPage;