import React, { useState, createContext } from 'react';
export const CategoriesContext = createContext([]);
export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoriesError, setCategoriesError] = useState([]);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
        categoriesLoading,
        setCategoriesLoading,
        categoriesError,
        setCategoriesError,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
