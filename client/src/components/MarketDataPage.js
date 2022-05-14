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
  console.log(trendsData, trendsLoading, trendsError);
  return (
    <div>
      <NavBar />
      <LivePriceList />
      <div id="user-interface">
        <div className="flex-container">
          {trendsLoading ? (
            <h2>loading</h2>
          ) : trendsError ? (
            <h2>{trendsError.message}</h2>
          ) : (
            <TrendsTable trendsList={trendsData} />
          )}

          {globalLoading ? (
            <h2>loading</h2>
          ) : globalError ? (
            <h2>{globalError.message}</h2>
          ) : (
            <GlobalTable data={globalData} />
          )}
        </div>
        {exchangesLoading ? (
          <h2>loading</h2>
        ) : exchangesError ? (
          <h2>{exchangesError.message}</h2>
        ) : (
          <ExchangesTable exchanges={exchangesData} />
        )}
      </div>
    </div>
  );
};
export default MarketDataPage;
