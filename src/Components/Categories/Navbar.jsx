import React from 'react'
import '../../css/navbar.css'
import { useLocation, Link } from 'react-router-dom';
import { Dropdown } from './UserSession';
export const Navbar = ({user}) => {
    const location = useLocation();

  return (
    <>
    <nav id='category-navbar'>
    <div>
        <img src="../../../public/LogoD.png" alt="Logo aplicación" className='logo-image'/>
        </div>
    <div className='items-navbar'>
    <Link to="/categories" className={location.pathname==="/categories"?"inactive":"active"}>Categorías</Link>
    <Link to="/ranking" className="ranking">Ranking</Link>
    </div>
    <Dropdown user={user}/>
    
    </nav>
    </>
  )
}
