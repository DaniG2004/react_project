import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3005/users');
    const users = await res.json();

    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setUser(found);
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const res = await fetch('http://localhost:3005/users');
    const users = await res.json();
    const exists = users.find(u => u.username === username);
    if (exists) {
      setError('Username already exists');
      return;
    }

    const newUser = { username, password };
    await fetch('http://localhost:3005/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    });

    setUser(newUser);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>{isSignUp ? 'Register' : 'Login'}</h2>
      <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <br />
        {isSignUp && (
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
        )}
        <br />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        <button type="button" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Have an account? Login' : 'No account? Register'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;