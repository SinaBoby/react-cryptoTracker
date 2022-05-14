import React, { useState, useEffect } from 'react';
import TopCoinRow from './TopCoinRow';
const TopCoinsTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/topCoins');
        const json = await response.json();
        setData(json);
      
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div id="topCoins-container">
      <h1>Top 50 of the Market</h1>
      <p>Click on each Coin Name to See the price Chart below the table</p>
      <table id="top-coins-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h change</th>
            <th>24h volume</th>
            <th>market Cap</th>
          </tr>
        </thead>
        <tbody id="top-coins-body">
          {data && data.map((coin, index) => {
            return (
              

                <TopCoinRow key={index} coin={coin}/>
              
            )
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TopCoinsTable;
