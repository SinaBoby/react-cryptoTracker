import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div id="user-interface">
        <HomePage />
       
      </div>
    </div>
  );
};

export default App;
