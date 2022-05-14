import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
const App = () => {
    return (
        <div className="App">
            <NavBar />
            <div id="user-interface">
            <HomePage/>
            <Outlet/>
            </div>
        </div>
    );
};

export default App;
