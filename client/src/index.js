import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TechnicalPage from './components/TechnicalPage';
import CategoriesPage from './components/CategoriesPage';
import MarketDataPage from './components/MarketDataPage';
import CategoryInfo from './components/CategoryInfo';
import TechnicalChart from './components/TechnicalChart';
import { CategoriesProvider } from './CategoriesContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopCoinDetail from './components/TopCoinDetail';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CategoriesProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/topCoinDetail/:coin" element={<TopCoinDetail />} />
        <Route path="/marketData" element={<MarketDataPage />} />
        <Route path="/technical" element={<TechnicalPage />}>
          <Route path="/technical/:pair" element={<TechnicalChart />} />
        </Route>
        <Route path="/categories" element={<CategoriesPage />}>
          <Route path="/categories/:category" element={<CategoryInfo />} />
        </Route>
      </Routes>
    </Router>
  </CategoriesProvider>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
