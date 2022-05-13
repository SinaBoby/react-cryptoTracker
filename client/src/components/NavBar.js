import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navBar">
            <img
                src="https://github.com/SinaBoby/CryptoTrackerApp/blob/loading_spin_feature/public/assets/logo2.png?raw=true"
                alt="logo"
                id="logo"
            />
            <div id="nav-list">
                <Link className="nav-item" id="market-page" to="/marketData">
                    Market Data
                </Link>
                <Link className="nav-item" id="technical-page" to="/technical">
                    Technicals
                </Link>
                <Link className="nav-item" id="categories-info-page" to="/categories">
                    Categries
                </Link>
            </div>
        </div>
    );
};
export default NavBar;
