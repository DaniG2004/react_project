import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Na";
import History from "./History";
import Animals from "./Animals";
import Humans from "./Humans";
import Home from "./Home";
import Plants from "./Plants";
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3005/users');
    const users = await response.json();

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    const response = await fetch('http://localhost:3005/users');
    const users = await response.json();

    const userExists = users.find(user => user.username === username);

    if (userExists) {
      setError('Username already exists!');
    } else {
      const newUser = { username, password };
      await fetch('http://localhost:3005/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      setIsLoggedIn(true);
      setError('');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Router>
      <div className="container">
        {isLoggedIn && <Navbar onLogout={handleLogout} />}
        
        <h1>Welcome to the Facts Site!</h1>

        {isLoggedIn ? (
          <div>
            <h2>Welcome, {username}!</h2>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/animals" element={<Animals />} />
              <Route path="/humans" element={<Humans />} />
              <Route path="/plants" element={<Plants />} />
            </Routes>
          </div>
        ) : (
          <div className="login-wrapper">
            <h3>{isSignUp ? 'Create an account' : 'Sign In to your account'}</h3>
            <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
              <div>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {isSignUp && (
                <div>
                  <label htmlFor="confirmPassword">Confirm Password: </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="button-row">
                <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
                </button>
              </div>
            </form>

            {error && <p className="error">{error}</p>}
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;