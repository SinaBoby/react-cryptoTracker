import React from 'react';
import useWs from './hooks/useWs';
const LivePriceElement = ({ symbol }) => {
  const [lastPrice, loading] = useWs(symbol);

  return (
    <li>
      {loading ? (
        <div id="loading"></div>
      ) : (
        `${symbol.slice(0, symbol.length - 4).toUpperCase()}/${symbol.slice(
          symbol.length - 4,
          symbol.length,
        )}:`
      )}
      <span style={{ color: lastPrice.color }}>{lastPrice.value}</span>$
    </li>
  );
};
export default LivePriceElement;
