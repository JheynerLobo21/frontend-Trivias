import { useEffect, useState } from "react";
import { NavbarHome } from "./Navbar/NavbarHome";
import { Wildcard } from "./Trivia/Wildcard";
import { getWildcards } from "../services/Wildcard";
import { Link } from "react-router-dom";

export const Index = () => {
  const [wildcards, setWildCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWildcards();
        setWildCards(response);
        console.log(response);
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
              <img  src="huella-de-zapato.png"/>
              </div>
              </div>
              
            </li>
            <li className="cont">
            <div className="doubleCard">
            <div className="backCard">
              <label className="">2. Selecciona una categoría</label>
              </div>
              <div className="frontCard">
              <img className="foot-rotate" src="huella-de-zapato.png"/>
              </div>
              </div>
            </li>
            <li className="cont">
            <div className="doubleCard">
            <div className="backCard">
              <label className="">
               <label> 3. Selecciona una subcategoría y la dificultad que prefieras</label>
              </label>
              </div>
              <div className="frontCard">
              <img className="" src="huella-de-zapato.png"/>
              </div>
              </div>
            </li>
            <li className="cont">
            <div className="doubleCard">
            <div className="backCard">
              <label className="">4. Diviértete resolviendo trivias</label>
              </div>
              <div className="frontCard">
              <img className="foot-rotate" src="huella-de-zapato.png"/>
              </div>
              </div>
            </li>
          </ul>
        </aside>
        <aside className="comodines">
          <label className="home-subtittle">Comodines</label>
          <label className="home-text">¡Puedes usar los comodines cuando te sientas atascado!</label>
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
        <div>
        <aside className="container-form">
        <label className="home-subtittle">Contáctanos</label>
          <form className="form-contacto">
            <div className="campo">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" className="form-input" required/>
            </div>
            <div className="campo">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input type="text" name="name" className="form-input"/>
            </div>
            <div className="campo">
            <label htmlFor="menssage" className="form-label">Mensaje</label>
            <textarea name="menssage" className="form-input form-menssage-input" required/>
            </div>
            <div className="btn-container">
	<button>
		<span className="text">Enviar</span>
		<div className="icon-container">
			<div className="icon icon--left">
        <i className="bi bi-send"></i>
			</div>
			<div className="icon icon--right">
        <i className="bi bi-send"></i>
			</div>
		</div>
	</button>
</div>

{/*<svg style="display: none;">
	<symbol id="arrow-right" viewBox="0 0 20 10">
		<path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
	</symbol>
</svg>*/}
        <i style={{display:" none"}} className="bi bi-send"></i>

<div className="support">
	<a href="https://twitter.com/DevLoop01" target="_blank"><i className="fab fa-twitter-square"></i></a>
	<a href="https://dribbble.com/devloop01" target="_blank"><i className="fab fa-dribbble"></i></a>
</div>
          </form>
        </aside>
        
        </div>
        </section>
    </>
  );
};
