import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import useWs from './hooks/useWs';
const LivePriceElement = ({ symbol }) => {
  const [lastPrice, loading, error] = useWs(symbol);
const {theme} = useContext(ThemeContext)
  return (
    <li className="livePrice-item">
      {loading ? (
        <div id="loading"></div>
      ) : error ? (
        <h4>{error.message}</h4>
      ) : (
        `${symbol.slice(0, symbol.length - 4).toUpperCase()}/${symbol.slice(
          symbol.length - 4,
          symbol.length,
        )}:`
      )}
      <span style={{ color: lastPrice.color === 'black' && theme.foreground === "#ffffff" ? "#ffffff" : lastPrice.color }}>{lastPrice.value}</span>$
    </li>
  );
};
export default LivePriceElement;
