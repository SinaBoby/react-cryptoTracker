import React from 'react';

function TrendsTable({ trendsList }) {
  return (
    <div>
      <div id="trends-container">
        <h4>7 most trend Assets</h4>
        <table id="trends">
          <thead>
            <tr>
              <th>#</th>
              <th>Symbol</th>
              <th>Name</th>
              <th>BTC Price</th>
            </tr>
          </thead>
          <tbody id="trends-body">
            {trendsList &&
              trendsList.map((coin, index) => {
                return (
                  <tr key={index}>
                    <td>${coin.item.market_cap_rank}</td>
                    <td>${coin.item.symbol}</td>
                    <td>
                      <img
                        src={coin.item.small}
                        style={{ marginRight: '10px', width: '20px' }}
                      />
                      ${coin.item.name}
                    </td>
                    <td>{parseFloat(coin.item.price_btc).toFixed(6)} BTC</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TrendsTable;
