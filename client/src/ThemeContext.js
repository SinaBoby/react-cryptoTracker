import React,{createContext, useState} from 'react';
export const ThemeContext = createContext(null)
export const ThemeProvider = ({children}) => {
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  }
  const  [toggle, setToggle]  =  React.useState(false);
    const toggleFunction =  ()  =>  {
    setToggle(!toggle);
    !toggle ? setTheme(themes.dark) : setTheme(themes.light)
};
const [theme, setTheme] = useState(themes.dark)
  return(
<ThemeContext.Provider value={{theme, toggleFunction}}>
  {children}
</ThemeContext.Provider>
  )
}
