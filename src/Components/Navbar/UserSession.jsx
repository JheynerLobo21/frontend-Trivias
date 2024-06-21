import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../../css/navbar.css';
import { useAuth0 } from '@auth0/auth0-react';

export const Dropdown = ({user}) => {
  const{picture, name} =user;
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
    <div ref={dropdownRef} className="dropdown-container">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {name}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <label className="dropdown-option">Cambiar contraseña</label>
          <hr />

          <label
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="inline-block px-4 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 rounded-lg outline-none ring-indigo-300 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base"
    >
      Log Out
    </label>
        </div>
      )}
    </div>
    <img src={picture} alt="foto perfil" className='fotoperfil'/>
    </>
  );
};

Dropdown.propTypes = {
  user:PropTypes.shape({
      picture: PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
    }).isRequired,
};
