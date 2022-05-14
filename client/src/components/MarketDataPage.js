import React from 'react';
import LivePriceList from './LivePriceList';
import NavBar from './NavBar';
const MarketDataPage = () => {
    return (
        <div>
          <NavBar/>
          <LivePriceList/>
            <h1>MarketData</h1>
        </div>
    );
};
export default MarketDataPage;
