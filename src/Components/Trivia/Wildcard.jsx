import PropTypes from "prop-types";
import "../../css/wildcard.css";
import { restarBombicoins, restarComodin, sumarWildcard } from "../../services/Wildcard";
import { useState } from "react";
import { getUser } from "../../services/Usuario";
import { useAuth0 } from "@auth0/auth0-react";

export function Wildcard({ wildcard, funcionalidad, comodinUse }) {
  const [showModal, setShowModal] = useState(false);
  const [showModalSecundary, setShowModalSecundary] = useState(false);
  const [countComodin, setCountComodin] = useState(0);
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  console.log(usuario);
  const bombicoins = usuario.bombicoins;
  const { user} = useAuth0();

  const handleClick = async () => {
    if (parseInt(wildcard.amount) > 0) {
      let used = wildcard.wildcard.name==="Salto"?funcionalidad(true):funcionalidad();
      let status = "";
      used
        ? console.log("No se puede usar")
        : (status = await restarComodin(wildcard.idUserWildcard));
      status === 204 ? comodinUse() : "";
      console.log(204);
    } else {
      setShowModal(true)
    }
  };

  const handleClickAdd=()=>{
    setShowModal(false);
    setShowModalSecundary(true);
  }

  const handleClickPay=async()=>{
    let msgError= document.getElementById("msg-error");
    let totalCost= countComodin*wildcard.wildcard.cost;
      if(totalCost>bombicoins){
        msgError.style.display="block";       
      }
      else{
        await restarBombicoins(usuario.idUser, totalCost);
        console.log(await sumarWildcard(wildcard.idUserWildcard, countComodin));
        let userbd= await getUser(user.sub)
        console.log(userbd)
        localStorage.setItem("usuario", JSON.stringify(userbd))
        setShowModalSecundary(false);
      }
    }

  const handleClickBack=()=>{
    setShowModal(false);
    setShowModalSecundary(false);
  }

  const changeCountComodin=(operation)=>{
    if(operation){
      setCountComodin(countComodin+1)
    }
    else{
      setCountComodin(countComodin-1)
    }
  }

  const handleClickComodin = (e) => {
    e.preventDefault();
    const operation = e.target.getAttribute('data-operation');
    changeCountComodin(operation === 'increment');
  };

  return (
    <>
    <aside
      onClick={
        funcionalidad === null || funcionalidad === undefined
          ? null
          : () => handleClick()
      }
      className="icon-header"
    >
      <i
        className={`${
          funcionalidad === null || funcionalidad === undefined
            ? `${wildcard.icon} icon-white`
            : wildcard.wildcard.icon
        } icon`}
      ></i>
      {funcionalidad !== null && funcionalidad !== undefined && (
        <i
          className="cantidad"
          style={{
            backgroundColor: wildcard.amount === 0 ? "red" : "",
          }}
        >
          {wildcard.amount === 0 ? "+" : wildcard.amount}
        </i>
      )}
    </aside>
    { showModal && (
  <div className="modal">
      <div className="modal-content">
          <h2>No tienes este comodín</h2>
          <i
        className={wildcard.wildcard.icon}
        style={{fontSize:"50px", color:"#30a9da"}}
      ></i>
          <p style={{color:"#000"}}>¡Puedes comparlo por {wildcard.wildcard.cost} bombicoins!</p>
          <div className="btn-options">
          <button className="btn-modal-yes" onClick={handleClickAdd}>Si</button>
          <button className="btn-modal-no" onClick={handleClickBack}>No</button>
          </div>
      </div>
  </div>
)}

{ showModalSecundary && (
  <div className="modal">
      <div className="modal-content">
          <h2>¿Cuántos comodines quieres?</h2>
          <p className="count-comodin">{countComodin}</p>
          <div className="btn-count-comodins">
          {countComodin>0 &&
          <button data-operation="decrement" className="decrement" onClick={handleClickComodin}>-</button>
          }
          {countComodin==0 &&
          <button data-operation="decrement" className="decrement disabled" onClick={handleClickComodin} disabled >-</button>
          }
          <button data-operation="increment" className="increment" onClick={handleClickComodin}>+</button>
          </div>
          <div className="btn-options">
          <button className="btn-modal-yes" onClick={handleClickPay}>¡Comprar!</button>
          <button className="btn-modal-no" onClick={handleClickBack}>!No me alcanza!</button>
          </div>
          <p className="msg-error" id="msg-error" style={{display:"none"}}>No tienes sufiecientes bombicoins, ¡Oops!</p>
      </div>
  </div>
)}

</>

    
  );
}

Wildcard.propTypes = {
  comodinUse:PropTypes.func,
  funcionalidad:PropTypes.func,
  wildcard: PropTypes.shape({
    idUserWildcard:PropTypes.string,
    icon:PropTypes.string.isRequired,
    wildcard: PropTypes.shape({
      cost:PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    amount: PropTypes.number,
  }).isRequired,
};