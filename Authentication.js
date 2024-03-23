import React, { useState } from 'react';

const Authentication = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  // Check if the username is not empty
  if (username.trim() !== '') {
    // If the username is valid, call the onLogin function
    onLogin(username);
  } else {
    // If the username is empty, display an error message or handle the error accordingly
    
    console.error('Please enter a username');
    
  }
};


  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Authentication;

