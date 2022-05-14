import React from 'react';
import { useParams } from 'react-router-dom';
import LightChart from './LightChart';
const TopCoinDetail = () => {
  const { coin } = useParams();

  const pair = coin.toUpperCase() + 'USDT';

  return (
    <div>
      <LightChart pair={pair} />
    </div>
  );
};
export default TopCoinDetail;
