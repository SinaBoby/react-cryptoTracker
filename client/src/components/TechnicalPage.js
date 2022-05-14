import React from 'react';
import LivePriceList from './LivePriceList';
import NavBar from './NavBar';
import TechnicalWidget from './TechnicalWidget';

const TechnicalPage = () => {
    return (
        <div>
          <NavBar/>
          <LivePriceList/>
            <h1>Technical</h1>

           
            <TechnicalWidget />
        </div>
    );
};
export default TechnicalPage;
