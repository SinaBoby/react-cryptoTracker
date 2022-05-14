import React from 'react';
import useFetch from './hooks/useFetch';
import LivePriceList from './LivePriceList';
import NavBar from './NavBar';


const CategoriesPage = () => {
  const [categories, loading, error] = useFetch('/api/catList')
  console.log(categories)
    return (
        <div>
          <NavBar/>
          <LivePriceList/>
            <h1>categories</h1>
            <h2>Please select a category from the list:</h2>
            {loading ? <h2>loading</h2> : error ? <h2>{error.message}</h2> : <select>
   
   {categories && categories.map((cat, index) => {
     return (
       <option key={index} >{cat.name}</option>
     )
   })}
 </select> }
 
 <div id="cat-info-container"></div>
        </div>
    );
};
export default CategoriesPage;
