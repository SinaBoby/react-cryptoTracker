import React, { useContext} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../CategoriesContext';
import useFetch from './hooks/useFetch';
import LivePriceList from './LivePriceList';
import NavBar from './NavBar';

const CategoriesPage = () => {
  let [categories, loading, error] = useFetch('/api/catList');
  const { setCategories } = useContext(CategoriesContext);
  const [categoriesInfo] = useFetch('/api/catInfo');
  setCategories(categoriesInfo); 
  let available ;
  if(categories && categoriesInfo){

     available = categories.filter (catName => categoriesInfo.some(cat => cat.name === catName.name))
  }
 
  console.log(available)
  
  const navigate = useNavigate();
  function handleCatChange(e) {
    const category = e.target.value;
    console.log(category);
    navigate(`/categories/${category}`);
  }
  return (
    <div>
      <NavBar />
      <LivePriceList />
      <div id="user-interface">

      <h1>categories</h1>
      <h2>Please select a category from the list:</h2>
      {loading ? (
        <h2>loading</h2>
      ) : error ? (
        <h2>{error.message}</h2>
      ) : (
        <select onChange={handleCatChange}>
          {available &&
            available.map((cat, index) => {
              return <option key={index}>{cat.name}</option>;
            })}
        </select>
      )}

      <div id="cat-info-container">
        <Outlet />
      </div>
      </div>
    </div>
  );
};
export default CategoriesPage;
