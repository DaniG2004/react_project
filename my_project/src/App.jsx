import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  
  const handleLogin = (e) => {
    e.preventDefault();
    
    const validUsername = 'user123';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password.');
      setIsLoggedIn(false);
    }
  };

  
  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Password and confirm password do not match.');
      return;
    } else {
      setPasswordError('');
    }

    
    setIsLoggedIn(true);
    setError('');
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <h1>Welcome to the Facts Site!</h1>

    
   

      
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (

        <div>
          <h3>{isSignUp ? 'Create an account' : 'Sign In to your account'}</h3>
          <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
            <div>
              <label htmlFor="username">Username: </label>
              <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={handleUsernameChange} 
                required 
              />
            </div>

            <div>
              <label htmlFor="password">Password: </label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={handlePasswordChange} 
                required 
              />
            </div>
            
            <div>
          <br></br>
          <button onClick={() => setIsSignUp(false)}>Sign In</button>
          <button onClick={() => setIsSignUp(true)}>Sign Up</button>
        </div>

            {isSignUp && (
              <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  value={confirmPassword} 
                  onChange={handleConfirmPasswordChange} 
                  required 
                />
              </div>
            )}
<br></br>
          
          </form>

         
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
      )}
    </div>
  );

  
}

export default App
