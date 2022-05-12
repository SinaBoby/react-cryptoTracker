import {Link} from 'react-router-dom'

const NavBar = () => {

return (
  <div className='navBar'>
    <img src="https://github.com/SinaBoby/CryptoTrackerApp/blob/loading_spin_feature/public/assets/logo2.png?raw=true" alt="logo" id="logo"/>
  <ul id="nav-list">
  <Link class="nav-item" id="market-page" to="/marketData">Market Data</Link>
  <Link class="nav-item" id="technical-page" to="/technical">Technicals</Link>
  <Link class="nav-item" id="categories-info-page" to="/categories">Categries</Link>
  </ul>
  </div>
)

}
export default NavBar