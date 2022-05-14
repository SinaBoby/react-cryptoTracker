import React from 'react';
//import { Outlet } from 'react-router-dom';

const PairsList = ({ pairs, handlePairChange }) => {
  //const pairsArr = symbolsData.symbols

  return (
    <div>
      <h1>Technical</h1>
      <h2>Please select a category from the list:</h2>

      <select onChange={handlePairChange}>
        {pairs &&
          pairs.map((pair, index) => {
            return <option key={index}>{pair}</option>;
          })}
      </select>
    </div>
  );
};
export default PairsList;
