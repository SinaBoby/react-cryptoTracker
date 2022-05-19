import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';
import { IconContext } from 'react-icons';
import { FcFinePrint, FcCandleSticks, FcGlobe, FcFaq } from 'react-icons/fc';
import { ThemeContext } from '../ThemeContext';
const NavBar = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  function navigateToHome() {
    navigate('/');
  }
  const activeLink = ({ isActive }) =>
    isActive && theme.background === '#eeeeee'
      ? { color: '#fff', background: '#9ca3af' }
      : isActive && theme.background === '#222222'
      ? { color: '#545e6f', background: '#eeeeee' }
      : { color: theme.foreground, background: theme.background };
  return (
    <div className="navBar">
      <IconContext.Provider
        value={{
          style: { width: '30px', height: '30px' },
          className: 'watchList-icon',
        }}
      >
        <img
          src={
            theme.background === '#eeeeee'
              ? 'https://github.com/SinaBoby/CryptoTrackerApp/blob/loading_spin_feature/public/assets/logo.png?raw=true'
              : 'https://github.com/SinaBoby/CryptoTrackerApp/blob/loading_spin_feature/public/assets/logo2.png?raw=true'
          }
          alt="logo"
          id="logo"
          onClick={navigateToHome}
        />
        <div id="nav-list">
          <NavLink
            className="nav-item"
            style={activeLink}
            id="market-page"
            to="/marketData"
          >
            Market Data
            <FcGlobe />
          </NavLink>
          <NavLink
            className="nav-item"
            style={activeLink}
            id="technical-page"
            to="/technical"
          >
            Technicals
            <FcCandleSticks />
          </NavLink>
          <NavLink
            className="nav-item"
            style={activeLink}
            id="categories-info-page"
            to="/categories"
          >
            Categories
            <FcFaq />
          </NavLink>
          <NavLink
            className="nav-item"
            style={activeLink}
            id="categories-info-page"
            to="/watchList"
          >
            WatchList
            <FcFinePrint />
          </NavLink>

          <ThemeToggleButton />
        </div>
      </IconContext.Provider>
    </div>
  );
};
export default NavBar;
