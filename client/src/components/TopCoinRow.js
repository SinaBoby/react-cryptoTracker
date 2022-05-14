import React from "react";
import { useLocation } from "react-router-dom";
const TopCoinRow = ({coin}) => {
const location = useLocation()

const clickHandler = () => {
  window.open(location.pathname + `topCoinDetail/${coin.symbol}`, '_blank', 'toolbar=1,location=1,menubar=1,width=800,height=600');
  
}
  return (
    <tr>
      <td>${coin.market_cap_rank}</td>
<td><img src={coin.image} className="coin-logo" /><p style={{cursor:"pointer"}} id={coin.symbol} onClick={clickHandler}> ${coin.name}</p></td>  
<td>${coin.current_price} $</td>
<td className="${coin.price_change_percentage_24h > 0 ? 'bullish' : 'bearish'}">${
    coin.price_change_percentage_24h
  } %</td>
<td>${coin.total_volume} $</td>
<td>${coin.market_cap} $</td>
    </tr>
  )
}
export default TopCoinRow