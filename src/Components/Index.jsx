import { NavbarHome } from "./Navbar/NavbarHome";

export const Index = () => {
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
          </div>
          <img className="home-img-pc" src="pc1-2.png" alt="imagen-pc" />
        </aside>
      </section>
      <section id="tutorial">
        <aside className="banner">
          <img className="home-img-pc" src="pc1-2.png" alt="imagen-pc" />
          <div className="home-text">
            <label className="home-tittle">Triviaton</label>
            <label className="home-description-app">
              Eleva tus conocimietos al maximo
            </label>
          </div>
        </aside>
      </section>
      <section id="contacto">
        <aside className="banner">
          <div className="home-text">
            <label className="home-tittle">Triviaton</label>
            <label className="home-description-app">
              Eleva tus conocimietos al maximo
            </label>
          </div>
          <img className="home-img-pc" src="pc1-2.png" alt="imagen-pc" />
        </aside>
      </section>
    </>
  );
};
