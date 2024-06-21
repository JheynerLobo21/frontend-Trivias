import '../../css/navbar.css'
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import { Dropdown } from './UserSession';
import { LightBulb } from '../Loading/LightBulb';
export const Navbar = ({user}) => {
    const location = useLocation();

  return (
    <>
    <nav id='category-navbar'>
    <div>
    <LightBulb position={{ left: "-110px" }} tipo="logo-icon"/>
        </div>
    <div className='items-navbar'>
      <ul className='nav-menu'>
        <li className='nav-menu-item'>
          <Link to="/categories" className=''><button className={`nav-text ${location.pathname==="/categories"?"active":"inactive"}`}>Categorías
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          </button></Link>
        </li>
        <li className='nav-menu-item'>
          <Link to="/ranking" className='' ><button className={`nav-text ${location.pathname==="/ranking"?"active":"inactive"}`}>Ranking</button></Link>        
          </li>
      </ul>
    </div>
    <Dropdown user={user}/>
    
    </nav>
    </>
  )
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
};

