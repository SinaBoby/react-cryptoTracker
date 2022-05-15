import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import LivePriceList from './LivePriceList';

import PairsList from './PairsList';

const TechnicalPage = () => {
  const [pairsData, loading, error] = useFetch('/api/binanceInfo');

  const navigate = useNavigate();
  function handlePairChange(e) {
    const pair = e.target.value;
   
    navigate(`${pair}`);
  }
  return (
    <div>
     
      <LivePriceList />
      <div id="user-interface">
        {loading ? (
          <div id="loading"></div>
        ) : error ? (
          <h2> error</h2>
        ) : pairsData ? (
          <PairsList handlePairChange={handlePairChange} pairs={pairsData} />
        ) : (
          <h2>noContent</h2>
        )}

        <div id="technicalChart-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default TechnicalPage;
