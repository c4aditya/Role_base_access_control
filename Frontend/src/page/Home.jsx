import React, { useState } from 'react';
import Signup from './Signup'; // Import Signup component
import Login from './Login'; // Import Login component

function Home() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  return (
    <div className="App">
      <h1>{isLogin ? 'Login' : 'Signup'}</h1> {/* Display Login or Signup */}
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Signup' : 'Login'}
      </button>

      {/* Conditional rendering */}
      {isLogin ? <Login /> : <Signup />}
    </div>
  );
}

export default Home;
