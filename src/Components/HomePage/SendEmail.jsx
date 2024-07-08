import emailjs from "emailjs-com";
import { useState } from "react";
import "../../css/contact.css";

export const SendEmail = () => {
  const frmContact = { userEmail: "", userName: "", message: "" };
  const [contact, setContact] = useState(frmContact);
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_d1dlcau", "template_xshrbiw", contact, "3PD0FfBrWrKO-5jC1")
      .then(
        () => {
          setContact(frmContact);
          setShowMessage(true);
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };
  return (
    <>
      {showMessage ? (
        <div className="message-send" role="alert">
          <div className="paperplane">
          <aside className="animation-plane">
            <div className="plane">
              <div className="wingRight"></div>
              <div className="wingLeft"></div>
              <div className="bottom"></div>
              <div className="top"></div>
              <div className="middle"></div>
            </div>
            <div className="clouds">
              <div className="cloudOne"></div>
              <div className="cloudTwo"></div>
              <div className="cloudThree"></div>
              <div className="cloudFour"></div>
              <div className="cloudFive"></div>
            </div>
            </aside>
            <div className="send-message">
              <label className="send-message-tittle">¡Gracias por contactarnos!</label>
              <label className="send-message-description">En breve te daremos una respuesta.</label>
            </div>
          </div>
        </div>
      ) : (
        ``
      )}

      <div>
        <aside className="container-form">
          <label className="home-subtittle">Contáctanos</label>
          <form onSubmit={handleSubmit} className="form-contacto">
            <div className="campo">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                onChange={handleChange}
                value={contact.userEmail}
                type="email"
                name="userEmail"
                className="form-input"
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                onChange={handleChange}
                value={contact.userName}
                type="text"
                name="userName"
                className="form-input"
              />
            </div>
            <div className="campo">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                name="message"
                value={contact.message}
                onChange={handleChange}
                className="form-input form-menssage-input"
                required
              />
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
          </form>
        </aside>
      </div>
    </>
  );
};
