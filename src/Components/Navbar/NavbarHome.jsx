import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LightBulb } from "../Loading/LightBulb";
import { useAuth0 } from "@auth0/auth0-react";
import "../../css/navbar.css";

export const NavbarHome = () => {
  const { user, isAuthenticated } = useAuth0();
  const [activeButton, setActiveButton] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathName = window.location.pathname;
  const { logout } = useAuth0();

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    toggleMenu();
  };

  useEffect(() => {
    const rootElement = document.getElementById("root");

    const handleScroll = () => {
      if (rootElement.scrollTop > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    rootElement.addEventListener("scroll", handleScroll);
    return () => {
      rootElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        id="category-navbar"
        className={`home-nav ${
          isScrolled ? "navbar-dark" : "navbar-transparent"
        }`}
      >
        <div className="navbar-toggle" onClick={toggleMenu}>
          {!isOpen ? (
            String.fromCharCode(9776)
          ) : (
            <i className="bi bi-arrow-bar-right"></i>
          )}
        </div>
        <div>
          <Link to="/" className="">
            <LightBulb position={{ left: "-110px" }} tipo="logo-icon" />
          </Link>
        </div>
        <div className="items-navbar">
          <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
            {pathName === "/" && (
              <>
                <li className="nav-menu-item dropdown-item">
                  <a href="#inicio">
                    <button
                      className={`nav-text ${
                        activeButton == "inicio" ? "active" : "inactive"
                      }`}
                      onClick={() => handleButtonClick("inicio")}
                    >
                      Inicio
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </a>
                </li>
                <hr />
                <li className="nav-menu-item dropdown-item">
                  <a href="#tutorial" className="">
                    <button
                      className={`nav-text ${
                        activeButton === "tutorial" ? "active" : "inactive"
                      }`}
                      onClick={() => handleButtonClick("tutorial")}
                    >
                      ¿Como jugar?
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </a>
                </li>
                <hr />
                <li className="nav-menu-item dropdown-item">
                  <a href="#contacto" className="">
                    <button
                      className={`nav-text ${
                        activeButton === "contacto" ? "active" : "inactive"
                      }`}
                      onClick={() => handleButtonClick("contacto")}
                    >
                      Contáctanos
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </a>
                </li>
              </>
            )}
            {pathName.includes("categories") && (
              <>
                <li className="nav-menu-item dropdown-item name-in">
                  <p className="name-user-dropdown">{user.name}</p>
                </li>
                <hr style={{ width: "100%" }} />
                <li className="nav-menu-item dropdown-item">
                  <Link to="/">
                    <a href="#inicio" className="">
                      <button
                        className={`nav-text inactive`}
                        onClick={() => handleButtonClick("inicio")}
                      >
                        Inicio
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </Link>
                </li>
                <hr />
                <li className="nav-menu-item dropdown-item">
                  <Link to="/categories" className="">
                    <button
                      className={`nav-text ${
                        location.pathname === "/categories"
                          ? "active"
                          : "inactive"
                      }`}
                    >
                      Categorías
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </Link>
                </li>
              </>
            )}

            {!isAuthenticated && (
              <>
                <hr />
                <li className="nav-menu-item log-in-inicio">
                  <Link to="/categories" className="">
                    <button
                      className={`nav-text ${
                        activeButton === "login" ? "active" : "inactive"
                      }`}
                      onClick={() => handleButtonClick("login")}
                    >
                      Acceder
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </Link>
                </li>
              </>
            )}
            {isAuthenticated && isOpen && (
              <>
                <div className="user-data name-out">
                  <li className="nav-menu-item dropdown">
                    <p className="name-user-dropdown">{user.name}</p>
                  </li>
                  <img
                    src={user.picture}
                    alt="foto perfil"
                    className="fotoperfil foto-subcategory"
                    onClick={toggleMenu}
                  />
                </div>
                <hr className="hr-cond-small" />
                <li className="nav-menu-item dropdown-item logout-item">
                  <button
                    className={`nav-text ${
                      activeButton === "tutorial" ? "active" : "inactive"
                    }`}
                    onClick={() => handleButtonClick("tutorial")}
                  >
                    <label
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                      className="logout"
                    >
                      Cerrar sesión
                    </label>
                  </button>
                </li>
              </>
            )}
            {isAuthenticated && !isOpen && (
              <>
                <div className="user-data name-out">
                  <li className="nav-menu-item dropdown">
                    <p className="name-user-dropdown">{user.name}</p>
                  </li>
                  <img
                    src={user.picture}
                    alt="foto perfil"
                    className="fotoperfil foto-subcategory"
                    onClick={toggleMenu}
                  />
                </div>
              </>
            )}
          </ul>
          {isOpen && (
            <li className="nav-menu-item dropdown-item logout-item2">
              <button
                className={`nav-text ${
                  activeButton === "tutorial" ? "active" : "inactive"
                }`}
                onClick={() => handleButtonClick("tutorial")}
              >
                <label
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className="logout2"
                >
                  Cerrar sesión
                </label>
              </button>
            </li>
          )}
        </div>
      </nav>
    </>
  );
};
