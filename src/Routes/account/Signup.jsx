import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa'




const Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUserNameChange = (event) => {
      setUserName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios.post('http://localhost:5050/auth/register', {
        userName,
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
    <div id="signup">
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="userName">userName:</label>
          <input type="email" id="userName" value={userName} onChange={handleUserNameChange} />
          </div>
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
      <div className="dondoa">
        <h4>Already have an account? <Link to="/Login">Login now</Link></h4>
      </div>
    </div>
    */
    <div id="signup">
    <div className='register-form-con'>
    <h2><Link to={'/user/login'} className='link-from-register-login'>Register <FaArrowRight /></Link></h2>
    <form onSubmit={handleSubmit}>
      <div>
        <input placeholder='User Name' id="userName" value={userName} onChange={handleUserNameChange} />
      </div>
      <div>
        <input placeholder='Email' type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <input placeholder='Password' type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Register</button>
    </form>
    </div>
  </div>

  );
};

export default Signup;