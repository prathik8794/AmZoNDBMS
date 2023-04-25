import React, { useState } from 'react';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('email', email);
    console.log('password', password);
    if(email === '' || password === ''){
      alert('Please enter email and password');
      return;
    }
    axios.post('http://10.21.211.213:8080/login', {
      email: email,
      password: password
    }).then((response) => {
        if(response.data.message==='Login successful'){
          alert('Login successful');
        }else{
          alert('Login failed');
        }
    }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

