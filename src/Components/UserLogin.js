import React, { useState } from 'react';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './UserLogin.css';




function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios.post('http://localhost:5050/auth/login', {
        email,
        password
      })
      .then(response => {
        localStorage.setItem('myToken', response.data.token);
        console.log(response.data);
      })
      .catch(error => {
        // Handle login error
        console.error(error);
        setError('Invalid email or password');
      });
    };
  
    return (
      /*
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
      */
      <div id='signin'>
      <div className='login-form-con'>
        <h2><Link to={'/account/signup'} className='link-from-login-register'>Login <FaArrowRight /></Link></h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input placeholder='Email' type='email' id='email' value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <input placeholder='Password' type='password' id='password' value={password} onChange={handlePasswordChange} />
          </div>
          <button type='submit'>Login</button>
          <p className='forget-password-link'><Link to={'/forget/password'} className='link-from-login-forget-password'>forget password</Link></p>
        </form>
      </div>
    </div>

    );
  }


export default UserLogin;