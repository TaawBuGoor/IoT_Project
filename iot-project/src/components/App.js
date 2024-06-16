import React, { useState } from 'react';
import '../styles/App.module.css';
import './Login'
import Login from './Login';
import Main from './Main';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? <Main /> : <Login onLogin={handleLogin}/>}
    </div>
  );
}

export default App;