import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../../css/navbar.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const Dropdown = ({ user }) => {
  const { picture, name } = user;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { logout } = useAuth0();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    
      <button className="dropdown-name">
        {name}
      </button>
    <div ref={dropdownRef} className="dropdown-container">
    <button className="dropdown-toggle" onClick={toggleDropdown}>
        <img src={picture} alt="foto perfil" className='fotoperfil' />
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          <label className="dropdown-name2">{name}</label>
          <hr className='hr-name'/>
          <label className="dropdown-option">Cambiar contraseña</label>
          <hr />
          <Link to={"/categories"}>
            <label id="items-name" className="categories">Categorías</label>
          </Link>
          <hr />
          <Link to={"/ranking"}>
            <label id="items-name" className="ranking">Ranking</label>
          </Link>
          <hr className='hr-menu' />
          <label
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="logout"
          >
            Log Out
          </label>
        </div>
      )}
      </div>
    </>
  );
};

Dropdown.propTypes = {
  user:PropTypes.shape({
      picture: PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
    }).isRequired,
};
