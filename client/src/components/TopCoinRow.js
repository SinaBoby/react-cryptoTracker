import React,{useContext} from 'react';

import {BsBookmarkStarFill,BsBookmarkStar} from 'react-icons/bs'
import { IconContext } from "react-icons";
import {FcBullish, FcBearish} from 'react-icons/fc'
import { WatchListContext } from '../WatchListContext';


const TopCoinRow = ({ coin}) => {
 

  const clickHandler = () => {
    window.open(
      window.location.origin + `/topCoinDetail/${coin.symbol}`,
      '_blank',
      'width=800,height=600',
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
  const chartIconStyle = {width:"30px", height:"30px"}
  return (
    <tr>
      
      <td className="table-rank">
        {coin.market_cap_rank}</td>
        <td>
        <IconContext.Provider value={{ color: "red",size:20, className: "watchList-icon" }}>
        {watchList.indexOf(coin.symbol) > -1 ? <BsBookmarkStarFill onClick={toggleWatchList} /> : <BsBookmarkStar onClick={toggleWatchList} style={chartIconStyle}/>}
        </IconContext.Provider>
        </td>
      <td>
        <img src={coin.image} className="coin-logo" />
        <p
          style={{ cursor: 'pointer',display:'inline',marginLeft:"10px" }}
          id={coin.symbol}
          onClick={clickHandler}
        >
          
          {coin.name}
        </p>
      </td>
      <td>{coin.current_price} $</td>
      <td style={{color : coin.price_change_percentage_24h > 0 ? 'green' : 'red'}}>
        {coin.price_change_percentage_24h} %
        { coin.price_change_percentage_24h > 0 ? <FcBullish/> :<FcBearish/>}
      </td>
      <td>{coin.total_volume} $</td>
      <td>{coin.market_cap} $</td>
    </tr>
  );
};
export default TopCoinRow;
