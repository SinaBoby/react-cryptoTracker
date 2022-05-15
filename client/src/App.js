import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import TechnicalPage from './components/TechnicalPage';
import CategoriesPage from './components/CategoriesPage';
import MarketDataPage from './components/MarketDataPage';
import CategoryInfo from './components/CategoryInfo';
import TechnicalChart from './components/TechnicalChart';
import TopCoinDetail from './components/TopCoinDetail';
import { Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/topCoinDetail/:coin" element={<TopCoinDetail />} />
        <Route path="/marketData" element={<MarketDataPage />} />
        <Route path="/technical" element={<TechnicalPage />}>
          <Route path="/technical/:pair" element={<TechnicalChart />} />
        </Route>
        <Route path="/categories" element={<CategoriesPage />}>
          <Route path="/categories/:category" element={<CategoryInfo />} />
        </Route>
      </Routes>
      <div id="user-interface">
        <HomePage />
       
      </div>
    </div>
  );
};

export default App;
