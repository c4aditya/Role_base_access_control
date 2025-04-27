import React, { useState } from 'react';
import Signup from './page/Signup';
import Login from './page/Login';
import "./app.css"

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Signup' : 'Login'}
      </button>

      {isLogin ? <Login /> : <Signup />}
    </div>
  );
}

export default App;
