import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); 

  const handleLogin = (e) => {
    e.preventDefault(); 

    // Here, you would typically send a request to your backend for authentication
    
    if (username === 'demo' && password === 'password') {
      // Successful login
      // Redirect to the home page
      history.push('/');
    } else {
      // Failed login
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

