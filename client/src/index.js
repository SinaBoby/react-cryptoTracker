import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import TechnicalPage from './components/TechnicalPage';
import CategoriesPage from './components/CategoriesPage';
import MarketDataPage from './components/MarketData';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/marketData" element={<MarketDataPage/>}/>
      <Route path="/technical" element={<TechnicalPage/>}/>
      <Route path="/categories" element={<CategoriesPage/>}/>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
