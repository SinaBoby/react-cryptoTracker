import React, { createContext, useState } from 'react';
export const ThemeContext = createContext(null);
export const ThemeProvider = ({ children }) => {
  const themes = {
    light: {
      foreground: '#333333',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#EEEEEE',
      background: '#222222',
    },
  };
  const [toggle, setToggle] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
    !toggle ? setTheme(themes.dark) : setTheme(themes.light);
  };
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider
      value={{ theme, toggleFunction, isDarkMode, setIsDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
