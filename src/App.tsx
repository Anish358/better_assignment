import React, { useState } from 'react';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import './App.css';


// Main App Component
const App: React.FC = () => {
  const [activeForm, setActiveForm] = useState<'signup' | 'login'>('signup');

  return (
    <div className="app-container">
      <div className="form-switcher">
        <button 
          onClick={() => setActiveForm('signup')}
          className={activeForm === 'signup' ? 'active' : ''}
        >
          Sign Up
        </button>
        <button 
          onClick={() => setActiveForm('login')}
          className={activeForm === 'login' ? 'active' : ''}
        >
          Login
        </button>
      </div>
      {activeForm === 'signup' ? <SignUp /> : <Login />}
    </div>
  );
};

export default App;