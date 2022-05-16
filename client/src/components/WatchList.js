import React, { useContext } from 'react';
import { WatchListContext } from '../WatchListContext';
import useFetch from './hooks/useFetch';
import NavBar from './NavBar';
import TopCoinsTable from './TopCoinsTable';
import LivePriceList from './LivePriceList';
import { ThemeContext } from '../ThemeContext';
function WatchList() {
  const {theme} = useContext(ThemeContext)
 
  const { watchList } = useContext(WatchListContext);
  const [data, loading, error] = useFetch('/api/topCoins');
  const coins = data.filter((coin) => watchList.includes(coin.symbol));
  console.log('hi');
  return (
    <div style={{background:theme.background, color:theme.foreground}}>
      <NavBar />
      <LivePriceList />
      <div id="user-interface">
        <TopCoinsTable data={coins} loading={loading} error={error} />
        
      </div>
    </div>
  );
}

export default WatchList;
