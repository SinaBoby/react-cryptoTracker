import React,{useContext} from 'react';
import './App.css';
import HomePage from './components/HomePage';

import TechnicalPage from './components/TechnicalPage';
import CategoriesPage from './components/CategoriesPage';
import MarketDataPage from './components/MarketDataPage';
import CategoryInfo from './components/CategoryInfo';
import TechnicalChart from './components/TechnicalChart';
import TopCoinDetail from './components/TopCoinDetail';
import { Routes,Route } from 'react-router-dom';
import WatchList from './components/WatchList';
import { ThemeContext } from './ThemeContext';

const App = () => {
 const {theme} = useContext(ThemeContext)
  
  return (
    <div className="App" id={theme.background === "#222222" ? 'dark' : 'light' } style={{background:theme.background}}>
      
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
        <Route path="/watchList" element={<WatchList/>}/>
      </Routes>
    
    </div>
  );
};

export default App;
