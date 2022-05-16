import React,{useContext} from 'react';

import { WatchListContext } from '../WatchListContext';
import regularHeart from '../assets/heart-regular.svg';
import solidHeart from '../assets/heart-solid.svg';
const TopCoinRow = ({ coin}) => {
 

  const clickHandler = () => {
    window.open(
      `/topCoinDetail/${coin.symbol}`,
      '_blank',
      'toolbar=1,location=1,menubar=1,width=800,height=600',
    );
  };
  const { watchList, setWatchList } = useContext(WatchListContext);
  const toggleWatchList = () => {
    setWatchList((prevState) => {
      const arr = prevState.includes(coin.symbol)
        ? prevState.filter((i) => i !== coin.symbol) // remove item
        : [...prevState, coin.symbol]; // add item
      return [...arr];
    });
  }
  return (
    <tr>
      
      <td>
      <img
          src={watchList.indexOf(coin.symbol) > -1 ? solidHeart : regularHeart}
          alt={coin.symbol}
          
          onClick={toggleWatchList}
        />
        {coin.market_cap_rank}</td>
      <td>
        <img src={coin.image} className="coin-logo" />
        <p
          style={{ cursor: 'pointer' }}
          id={coin.symbol}
          onClick={clickHandler}
        >
          
          {coin.name}
        </p>
      </td>
      <td>${coin.current_price} $</td>
      <td className="${coin.price_change_percentage_24h > 0 ? 'bullish' : 'bearish'}">
        ${coin.price_change_percentage_24h} %
      </td>
      <td>${coin.total_volume} $</td>
      <td>${coin.market_cap} $</td>
    </tr>
  );
};
export default TopCoinRow;
