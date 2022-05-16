import React,{useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
const NavBar = () => {
 const {toggleFunction} = useContext(ThemeContext)
  const navigate = useNavigate();
  function navigateToHome() {
    navigate('/');
  }
  const activeLink = ({ isActive }) =>
  isActive
    ? {  color: '#fff',
        background: '#9ca3af',
      }
    : { color: '#545e6f',
      background: '#f0f0f0' }
  return (
    <div className="navBar">
      <img
        src="https://github.com/SinaBoby/CryptoTrackerApp/blob/loading_spin_feature/public/assets/logo2.png?raw=true"
        alt="logo"
        id="logo"
        onClick={navigateToHome}
      />
      <div id="nav-list">
        <NavLink
          className="nav-item"
          style={activeLink
          }
          id="market-page"
          to="/marketData"
        >
          Market Data
        </NavLink>
        <NavLink className="nav-item" style={activeLink
          } id="technical-page" to="/technical">
          Technicals
        </NavLink>
        <NavLink
          className="nav-item"
          style={activeLink
          }
          id="categories-info-page"
          to="/categories"
        >
          Categories
        </NavLink>
        <NavLink
          className="nav-item"
          style={activeLink
          }
          id="categories-info-page"
          to="/watchList"
        >
          WatchList
        </NavLink>
        <button onClick={() => {
          toggleFunction()
          
        }}>change theme</button>
      </div>
    </div>
  );
};
export default NavBar;
