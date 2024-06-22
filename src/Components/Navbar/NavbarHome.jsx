import { useState } from "react";
import { Link } from "react-router-dom";
import { LightBulb } from "../Loading/LightBulb";
import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown } from "./UserSession";

export const NavbarHome = () => {
  const { user, isAuthenticated } = useAuth0();
  const [activeButton, setActiveButton] = useState("inicio");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <nav id="category-navbar" className="home-nav">
        <div>
          <Link to="/" className="">
            <LightBulb position={{ left: "-110px" }} tipo="logo-icon" />
          </Link>
        </div>
        <div className="items-navbar">
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <a href="#inicio" className="">
                <button
                  className={`nav-text ${
                    activeButton != "inicio" ? "inactive" : "active"
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
            <li className="nav-menu-item">
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
            <li className="nav-menu-item">
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
            {!isAuthenticated && (
              <>
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
          </ul>
        </div>
        {isAuthenticated && <Dropdown user={user} />}
      </nav>
    </>
  );
};
