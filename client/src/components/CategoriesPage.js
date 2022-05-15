import React, { useContext, useEffect} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../CategoriesContext';
import useFetch from './hooks/useFetch';
import LivePriceList from './LivePriceList';


const CategoriesPage = () => {
  let [categories, loading, error] = useFetch('/api/catList');
  const { setCategories, setCategoriesLoading, setCategoriesError } = useContext(CategoriesContext);
  const [categoriesInfo, catInfoLoading, catInfoError] = useFetch('/api/catInfo');
  let available ;
  useEffect(() => {
   
    setCategories(categoriesInfo); 
    setCategoriesLoading(catInfoLoading)
    setCategoriesError(catInfoError)
  }, [categoriesInfo])
  if(categories && categoriesInfo){

     available = categories.filter (catName => categoriesInfo.some(cat => cat.name === catName.name))
  }
  
 
 
  
  const navigate = useNavigate();
  function handleCatChange(e) {
    const category = e.target.value;
    navigate(`/categories/${category}`);
  }
  return (
    <div>
      
      <LivePriceList />
      <div id="user-interface">

      <h1>categories</h1>
      <h2>Please select a category from the list:</h2>
      {loading ? (
        <div id="loading"></div>
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
