//import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import React, { useContext } from 'react';
import { CategoriesContext } from '../CategoriesContext';

function CategoryInfo() {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const selected =
    categories && categories.filter((cat) => cat.name === category)[0];
  console.log(selected);
  return (
    <div>
      {selected ? (
        <div>
          {' '}
          <h2>{selected.name}</h2>
          <h4>Content:</h4>
          <p id="content">
            {selected.content ? selected.content : `No Content available`}
          </p>
          <br />
          <h4>Market Data</h4>
          <ul>
            <li>
              <span>Market Cap :</span> ${selected.market_cap} USD
            </li>
            <li
              className="${
      selected.market_cap_change_24h > 0 ? 'bullish' : 'bearish'
    }"
            >
              <span>Market Cap 24H change :</span> $
              {selected.market_cap_change_24h} %
            </li>
            <li>
              <span>volume 24H :</span> ${selected.volume_24h} USD
            </li>
            <br />
            <h4>Top 3 Assets</h4>
            <img id="first-asset" src={selected.top_3_coins[0]} />
            <img id="second-asset" src={selected.top_3_coins[1]} />
            <img id="third-asset" src={selected.top_3_coins[2]} />
          </ul>
        </div>
      ) : (
        <h2>nocontent</h2>
      )}
    </div>
  );
}

export default CategoryInfo;
