import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import '../../css/app.css'
import { Figures } from './Figures';

export const Login = () => {

  const [dataForm, setDataForm] = useState({
    user:"",
    password:""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <Figures/>
      <main>
        <aside className="logo">
          <img src="../../public/LogoD.png" alt="bombillo" className='logo-image' />
          </aside>
        <aside className='login'>
         <form action="" onSubmit={handleSubmit}>
          <div className="input-container">
            <input 
              type="text" 
              onChange={handleChange} 
              className='input-user'
              id='user'
              name='user' 
              value={dataForm.user}
              placeholder='Ingrese su usuario'
              required/>
            <label 
              htmlFor="user" 
              className="label-user">
                Usuario
            </label>
            <input 
              type="password" 
              onChange={handleChange} 
              className='input-password'
              id='password'
              name='password' 
              value={dataForm.password}
              placeholder='Ingrese su contraseña'
              required/>
            <label 
              htmlFor="password" 
              className="label-password">
                Contraseña
            </label>
          </div>
          <div className="login-pass">
          <a href="#" id='lost-password'>¿Olvidaste tú contraseña?</a>
          </div>
          <div className='btn-log-in'>
          <Link to="/categories">
          <button type='submit' className='btn-login'>
            <span>Login</span>
          </button>
          </Link>
          </div>
         </form>
         <p>O</p>
         <div className="sign-in-google">
         <a href="#" className="icon-button">
          <img src="https://static.vecteezy.com/system/resources/previews/012/871/371/non_2x/google-search-icon-google-product-illustration-free-png.png" alt="Logo Google" className='logo-google'/>
          <span>Acceder con Google</span>
          </a>
          </div>
         <hr />
         <div className='sign-up'>
         <a href="#" className='sign-Google'> ¿Aún no tienes cuenta?</a>
         </div>
        </aside>
      </main>
    </>
  );
};
