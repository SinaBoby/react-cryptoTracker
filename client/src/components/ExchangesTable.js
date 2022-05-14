import React from 'react';

function ExchangesTable({ exchanges }) {
  return (
    <div id="exchanges-container">
      <h4>Top 10 trusted Exchanges</h4>
      <table id="exchanges">
        <thead>
          <tr>
            <th>Trust Rank</th>
            <th>Logo</th>
            <th>Name</th>
            <th>24H Trade Volume</th>
            <th>Country</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody id="exchanges-body">
          {exchanges.map((exchange, index) => {
            return (
              <tr key={index}>
                <td>{exchange.trust_score_rank}</td>
                <td>
                  <img src={exchange.image} />
                </td>
                <td>${exchange.name}</td>
                <td>
                  ${parseFloat(exchange.trade_volume_24h_btc).toFixed(4)} BTC
                </td>
                <td>${exchange.country}</td>
                <td>
                  <a href={exchange.url}>${exchange.url}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ExchangesTable;
