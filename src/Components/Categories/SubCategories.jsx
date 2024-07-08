import { useState } from "react";
import "../../css/subcategories.css";
import { NavbarHome } from "../Navbar/NavbarHome";
import { OptionsSubcategories } from "./OptionsSubcategories";
import { useAuth0 } from "@auth0/auth0-react";
import { CallbackPage } from "../Auth0/CallbackPage";
import { DescryptionSubcategory } from "./DescryptionSubcategory";

export const SubCategories = () => {
  const {isAuthenticated, isLoading } = useAuth0();
  const [btnSubcategory, setBtnSubcategory] = useState({});
  const [hide, setHide]=useState(false);

  const category = JSON.parse(localStorage.getItem("category"));
  console.log(category);

  const handleBtnClick = (subcategory) => {
    setBtnSubcategory(subcategory);
  };

  const handleClick=()=>{
    setHide(!hide);
  }

  const categoryTitle = category.name.replace(/-/g, " ");

  if (isLoading) {
    return <CallbackPage />;
  }
  if (isAuthenticated) {
    return (
      <>
        <NavbarHome/>
        <div className="container-general">
          <div className="generalknowledge">
            <h1 className="title-category">{categoryTitle}</h1>
            <main className="subcategories-main">
              <aside
                className="descriptionsubcategory"
                id="descriptionsubcategory"
              >
                <DescryptionSubcategory btnSubcategory={btnSubcategory} />
                <div className="btn-floating">
                <a className="btn-flotante" onClick={handleClick}>
                  <button
                    id="redondo"
                    className="btn text-white"
                  >
                    <div className="reload-icon"></div>
                    <label className="change-subcategory">Cambiar subcategorías</label>
                  </button>
                </a>
              </div>
              </aside>
              <aside className="listsubcategories" id="listsubcategories">
                <OptionsSubcategories
                  categoryName={category.name}
                  btnSubcategory
                  onBtnClick={handleBtnClick}
                  hide={hide}
                />
              </aside>
            </main>
          </div>
        </div>
      </>
    );
  }
};
