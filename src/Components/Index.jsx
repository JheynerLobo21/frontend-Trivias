import { useEffect, useState } from "react";
import { NavbarHome } from "./Navbar/NavbarHome";
import { Wildcard } from "./Trivia/Wildcard";
import { SendEmail } from "./HomePage/SendEmail";
import { getWildcards } from "../services/Wildcard";
import { Link } from "react-router-dom";

export const Index = () => {
  const [wildcards, setWildCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let user = localStorage.getItem("usuario");
        console.log(user);
        localStorage.clear();
        console.log(user);
        if (user != undefined) {
          user = JSON.parse(user);
          console.log(user);
          localStorage.setItem("usuario", JSON.stringify(user));
        }
        const response = await getWildcards();
        setWildCards(response);
        return response;
      } catch (error) {
        console.error("Error fetching trivia data getWildcards:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavbarHome />
      <section id="inicio">
        <aside className="banner">
          <div className="home-text">
            <label className="home-tittle">Triviaton</label>
            <label className="home-description-app">
              Eleva tus conocimietos al maximo
            </label>
            <Link to="/categories">
              <button className="again-play w-category home-bottom">
                ¡Jugar ahora!
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </Link>
          </div>
          <img className="home-img-pc" src="pc1-2.png" alt="imagen-pc" />
        </aside>
      </section>
      <section id="tutorial">
        <aside className="banner">
          <div className="home-description">
            <label className="home-subtittle">¿Que es Triviaton?</label>
            <label className="home-description-app">
              Una app de trivias diseñada para desafiar tu conocimiento en
              diversos temas mediante preguntas de opción múltiple. Desde
              historia y ciencia hasta cultura pop y deportes. ¡Diviértete
              aprendiendo y alcanza la gloria respondiendo preguntas correctas y
              acumulando puntos!
            </label>
          </div>
        </aside>
        <aside className="pasos">
          <label className="home-subtittle">¿Como jugar?</label>
          <label className="home-text">Puedes jugar en 4 simples pasos:</label>
          <ul>
            <li className="cont">
              <div className="doubleCard">
                <div className="backCard">
                  <label>1. Inicia sesión</label>
                </div>
                <div className="frontCard">
                  <img src="huella-de-zapato.png" />
                </div>
              </div>
            </li>
            <li className="cont">
              <div className="doubleCard">
                <div className="backCard">
                  <label className="">2. Selecciona una categoría</label>
                </div>
                <div className="frontCard">
                  <img className="foot-rotate" src="huella-de-zapato.png" />
                </div>
              </div>
            </li>
            <li className="cont">
              <div className="doubleCard">
                <div className="backCard">
                  <label className="">
                    <label>
                      {" "}
                      3. Selecciona una subcategoría y la dificultad que
                      prefieras
                    </label>
                  </label>
                </div>
                <div className="frontCard">
                  <img className="" src="huella-de-zapato.png" />
                </div>
              </div>
            </li>
            <li className="cont">
              <div className="doubleCard">
                <div className="backCard">
                  <label className="">4. Diviértete resolviendo trivias</label>
                </div>
                <div className="frontCard">
                  <img className="foot-rotate" src="huella-de-zapato.png" />
                </div>
              </div>
            </li>
          </ul>
        </aside>
        <aside className="comodines">
          <label className="home-subtittle">Comodines</label>
          <label className="home-text">
            ¡Puedes usar los comodines cuando te sientas atascado!
          </label>
          <div className="comodines-list">
            {wildcards.map((wildcard, index) => (
              <div key={index} className="card">
                <Wildcard wildcard={wildcard} />
                <label className="home-description-wildcard">
                  {wildcard.description}
                </label>
              </div>
            ))}
          </div>
        </aside>
      </section>
      <section id="contacto">
        <SendEmail />
      </section>
    </>
  );
};
