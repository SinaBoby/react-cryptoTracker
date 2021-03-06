import React, { useContext } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { ThemeContext } from '../ThemeContext';
const ThemeToggleButton = () => {
  const { toggleFunction } = useContext(ThemeContext);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <DarkModeToggle
      onChange={() => {
        toggleFunction();
      }}
      checked={isDarkMode}
      size={60}
    />
  );
};
export default ThemeToggleButton;
