import React from 'react';

function GlobalTable({ data }) {
  console.log(data);
  return (
    <div id="global-container">
      <h4>Global market data</h4>
      <ul id="global">
        <li>
          <span>Active CryptoCurrencies :</span> {data.active_cryptocurrencies}
        </li>
        <li>
          <span>Number Of Markets :</span> {data.markets}
        </li>
        <li
          className={
            data.market_cap_change_percentage_24h_usd > 0
              ? 'bullish'
              : 'bearish'
          }
        >
          <span>Total Market Cap Change in 24h :</span>
          {data.market_cap_change_percentage_24h_usd}
        </li>
      </ul>
    </div>
  );
}

export default GlobalTable;
