import React from 'react';
import useWs from './hooks/useWs';
const LivePriceElement = ({ symbol }) => {
  const [lastPrice, loading] = useWs(symbol);

  return (
    <li>
      {loading ? (
        <h3>loading...</h3>
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
