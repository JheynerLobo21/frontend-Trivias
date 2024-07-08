import { useState, useEffect } from "react";
import { Wildcard } from "./Wildcard";
import { getWildcardsUser } from "../../services/Wildcard";
import PropTypes from "prop-types";

export function WildcardsBar({
  idUser,
  changeQuestion,
  activeShield,
  delectedAnwers,
  addTime,
  stopTime
}) {
  const [wildcards, setWildCards] = useState([]);
  const [usedComodin, setUsedComodin] = useState(0);
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const bombicoins = usuario.bombicoins;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWildcardsUser(idUser);
        setWildCards(response);
        return response;
      } catch (error) {
        console.error("Error fetching trivia data getWildcardsUser:", error);
      }
    };

    fetchData();
  }, [usedComodin, bombicoins]);

  const comodinUse = () => {
    setUsedComodin(usedComodin + 1);
  };

  return (
    <>
      <div className="container-wildcard-coins">
      <aside className="wildcard-bar">
      {wildcards.map((wildcard, index) => (
        <Wildcard
          key={index}
          wildcard={wildcard}
          funcionalidad={
            wildcard.wildcard.name === "Salto"
              ? changeQuestion
              : wildcard.wildcard.name === "Escudo"
              ? activeShield
              : wildcard.wildcard.name === "50/50"
              ? delectedAnwers
              : addTime
          }
          usuario={usuario}
          comodinUse={comodinUse}
          stopTime={stopTime}
        />
      ))}
      </aside>
      <div className="bombicoins">
      <img src="/public/bombicoins.png" alt="bombicoins" className="img-bombicoins"/>
      <label className="count-bombicoins">{bombicoins}</label>
      <i className="bi bi-plus plus"></i>
      </div>
      </div>
    </>
  );
}

WildcardsBar.propTypes = {
  idUser: PropTypes.number,
  changeQuestion:PropTypes.func,
  activeShield:PropTypes.func,
  delectedAnwers:PropTypes.func,
  addTime:PropTypes.func,
  stopTime:PropTypes.func,
};
