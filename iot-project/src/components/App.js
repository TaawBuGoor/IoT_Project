import React, { useState } from 'react';
import '../styles/App.module.css';
import './Login'
import Login from './Login';
import Content from './Content';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? <Content /> : <Login onLogin={handleLogin}/>}
    </div>
  );
}

export default App;