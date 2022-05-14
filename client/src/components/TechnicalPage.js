import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import LivePriceList from './LivePriceList';
import NavBar from './NavBar';
import PairsList from './PairsList';

const TechnicalPage = () => {
  const [pairsData, loading, error] = useFetch('/api/binanceInfo');

  const navigate = useNavigate();
  function handlePairChange(e) {
    const pair = e.target.value;
    console.log(pair);
    navigate(`${pair}`);
  }
  return (
    <div>
      <NavBar />
      <LivePriceList />
      <div id="user-interface">
        {loading ? (
          <h2>loading</h2>
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
