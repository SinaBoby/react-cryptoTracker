import React from 'react';
import NavBar from './NavBar';
import TopCoinsTable from './TopCoinsTable';
import useFetch from './hooks/useFetch';
const HomePage = () => {
  const [data, loading, error] = useFetch('/api/topCoins');
  return (
    <div>
      <NavBar />
      <div id="user-interface">
        <TopCoinsTable data={data} loading={loading} error={error} />
      </div>
    </div>
  );
};
export default HomePage;
