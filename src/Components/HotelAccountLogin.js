import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function HotelAccountLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios.post('http://localhost:5050/hotel/auth/login', {
        email,
        password
      })
      .then(response => {
        localStorage.setItem('hotelToken', response.data.token);
        navigate('/post/hotel');
      })
      .catch(error => {
        // Handle login error
        console.error(error);
        setError('Invalid email or password');
      });
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          {error && <div>{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

export default HotelAccountLogin;