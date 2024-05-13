import React, { useState } from 'react';
import './LoginForm.css'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const navigate = useNavigate();
  // State variables for email and password fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call, validation)
    console.log('Login submitted:', email, password);
  };

  const handleSignup = () =>{
    navigate('/Signup')
  }

  const hanldeLogin = () =>{
    navigate('/Home')
  }

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit" onClick={hanldeLogin}>Login</button>
      </form>
      <div className="signup-link" onClick={handleSignup}>
        <p>Don't have an account?</p>
        <button onClick={() => console.log('Signup clicked')}>Signup</button>
      </div>
    </div>
  );
};

export default LoginForm;
