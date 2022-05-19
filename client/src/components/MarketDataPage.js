import React from 'react';
import useFetch from './hooks/useFetch';
import LivePriceList from './LivePriceList';
import NavBar from './NavBar';
import TrendsTable from './TrendsTable';
import GlobalTable from './GlobalTable';
import ExchangesTable from './ExchangesTable';
const MarketDataPage = () => {
  const [trendsData, trendsLoading, trendsError] = useFetch('/api/trends');
  const [globalData, globalLoading, globalError] = useFetch('/api/global');
  const [exchangesData, exchangesLoading, exchangesError] =
    useFetch('/api/exchanges');

  return (
    <div>
      <NavBar />
      <LivePriceList />
      <div id="user-interface">
        <div id="marketData-element">
          <div className="flex-container">
            {trendsLoading ? (
              <div id="loading"></div>
            ) : trendsError ? (
              <h2>{trendsError.message}</h2>
            ) : (
              <TrendsTable trendsList={trendsData} />
            )}

            {globalLoading ? (
              <div id="loading"></div>
            ) : globalError ? (
              <h2>{globalError.message}</h2>
            ) : (
              <GlobalTable data={globalData} />
            )}
          </div>
          {exchangesLoading ? (
            <div id="loading"></div>
          ) : exchangesError ? (
            <h2>{exchangesError.message}</h2>
          ) : (
            <ExchangesTable exchanges={exchangesData} />
          )}
        </div>
      </div>
    </div>
  );
};
export default MarketDataPage;
