import React from 'react';
import { topPairs } from '../Data';
import LivePriceElement from './LivePriceElement';
const LivePriceList = () => {
  return (
    <div id="top-five-list">
      <ul id="top-five">
        {topPairs.map((pair, index) => {
          return <LivePriceElement key={index} symbol={pair} />;
        })}
      </ul>
    </div>
  );
};
export default LivePriceList;
