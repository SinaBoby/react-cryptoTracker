import React from 'react';
import TopCoinRow from './TopCoinRow';

const TopCoinsTable = ({ data, loading, error }) => {
  return (
    <div id="topCoins-container">
      <h1>Top 100 of the Market</h1>
      <p>Click on each Coin Name to open the price Chart in new window</p>
      <table id="top-coins-table">
        <thead>
          <tr>
            <th>#</th>
            <th>WatchList</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h change</th>
            <th>24h volume</th>
            <th>market Cap</th>
          </tr>
        </thead>
        <tbody id="top-coins-body">
          {loading ? (
            <tr>
              <td>
                <div id="loading"></div>
              </td>
            </tr>
          ) : error ? (
            <tr>
              <td>
                <h2>{error.message}</h2>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td>
                <h3>Table is Empty</h3>
              </td>
            </tr>
          ) : (
            data &&
            data.map((coin, index) => {
              return <TopCoinRow key={index} coin={coin} />;
            })
          )}
        </tbody>
      </table>
    </div>
  );
};
export default TopCoinsTable;
