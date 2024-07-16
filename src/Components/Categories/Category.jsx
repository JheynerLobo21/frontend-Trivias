import { useEffect, useState } from "react";
import "../../css/categories.css";
import { ListCategories } from "./ListCategories.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { CallbackPage } from "../Auth0/CallbackPage.tsx";
import { getUser, createUser } from "../../services/Usuario.js";
import { NavbarHome } from "../Navbar/NavbarHome.jsx";
export const Category = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isCreando, setIsCreando] = useState(true);
  useEffect(() => {
    console.log(localStorage.getItem("pageTrivia"));
    if (
      localStorage.getItem("pageTrivia") != undefined ||
      localStorage.getItem("pageTrivia") != null
    )
      window.location.href = decodeURIComponent(
        localStorage.getItem("pageTrivia")
      );
    else {
      const fetchData = async () => {
        try {
          let userbd = await getUser(user.sub);
          if (userbd === null) {
            console.log("usuario no existe");
            let userbd = {
              idAuth: user.sub,
              nickname: user.nickname,
              email: user.email,
            };
            userbd = await createUser(userbd);
            setIsCreando(false);
            console.log("creando el usuario", userbd);
            userbd.status != 500
              ? localStorage.setItem("usuario", JSON.stringify(userbd.response))
              : "";
          } else {
            setIsCreando(false);
            console.log("el usuario ya esxiste", userbd);
            localStorage.setItem("usuario", JSON.stringify(userbd));
          }
        } catch (error) {
          console.error("Error fetching getUser:", error);
        }
      };

      fetchData();
    }
  }, [user.email, user.nickname, user.sub]);

  if (isLoading || isCreando) {
    return <CallbackPage />;
  }
  if (isAuthenticated && !isCreando) {
    return (
      <>
        <NavbarHome />
        <div className="container-general">
          <div className="main-category">
            <h1 className="title">TRIVIATON</h1>
            <div className="main-category-scroll">
              <ListCategories />
            </div>
          </div>
        </div>
      </>
    );
  }
};
