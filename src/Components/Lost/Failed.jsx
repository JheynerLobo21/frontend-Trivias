import { Link, useLocation, useNavigate } from "react-router-dom";
import "/src/css/failed.scss";
import { useEffect } from "react";

export const Failed = () => {
  const { state } = useLocation();
  const scoreTotal = state.scoreTotal;
  const history = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    localStorage.removeItem("pageTrivia");
    history("/categories");
  };

  return (
    <>
      <div className="failed">
        <div className="glitch" data-text="GAME OVER">
          GAME OVER
        </div>
        <div className="menu-lost">
          <div className="score-img">
            <img
              src="einstein.png"
              alt="einstein triste"
              className="einstein"
            />
            <div className="circle-small"></div>
            <div className="circle-medium"></div>
            <div className="cloud">
              <p className="scoreTotal">
                {scoreTotal} {scoreTotal == 1 ? "punto" : "puntos"}
              </p>
            </div>
          </div>
          <div className="wrappers">
            <div className="wrapper">
              <Link to="/categories">
                <button className="again-play">
                  VOLVER A JUGAR
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>{" "}
              </Link>
            </div>
            <div className="wrapper2">
              <button className="again-play w-category" onClick={handleClick}>
                VOLVER A CATEGORÍAS
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
