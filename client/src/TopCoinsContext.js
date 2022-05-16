import React,{createContext} from 'react'
import useFetch from './components/hooks/useFetch';
export const TopCoinsContext = createContext([])
export const TopCoinsProvider = ({children}) => {
  const [data, loading, error] = useFetch('/api/topCoins');
  return (
    <TopCoinsContext.Provider value={{data,loading, error}}>
      {children}
    </TopCoinsContext.Provider>
  )
  
}