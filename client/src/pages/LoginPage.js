import React, { useState } from 'react';

const LoginPage = ({ setUsername }) => {
  const [name, setName] = useState('');

  const handleLogin = () => {
    if (!name) return alert('Enter your name');
    setUsername(name);
  };

  return (
    <div>
      <h2>Enter Chat</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Username"
      />
      <button onClick={handleLogin}>Join</button>
    </div>
  );
};

export default LoginPage;
