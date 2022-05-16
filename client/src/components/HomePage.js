import React,{useContext} from 'react';
import NavBar from './NavBar';
import TopCoinsTable from './TopCoinsTable';
import { TopCoinsContext } from '../TopCoinsContext';
const HomePage = () => {
  const {data, loading, error} = useContext(TopCoinsContext)
  return (<div>
    <NavBar />
    <div id="user-interface">
      <TopCoinsTable data={data} loading={loading} error={error} />
    </div>
  </div>
  );
};
export default HomePage;
