import React, {useState, useContext} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../ThemeContext";
const ThemeToggleButton =  () => {
  const {toggleFunction} = useContext(ThemeContext)
  const [isDarkMode, setIsDarkMode] = useState( false);
  return (
    <DarkModeToggle
      onChange={() => {
        setIsDarkMode(prevState => !prevState)
        toggleFunction()
      }}
      checked={isDarkMode}
      size={80}
    />
  );
};
export default ThemeToggleButton