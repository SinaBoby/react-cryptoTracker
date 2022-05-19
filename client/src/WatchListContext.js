import React, { useState } from 'react';

export const WatchListContext = React.createContext();
export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  return (
    <WatchListContext.Provider value={{ watchList, setWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
};
