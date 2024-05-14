import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Login/Login.jsx';
import { Category } from './Categories/Category.jsx';
import { NotFoundPage } from './NotFoundPage.jsx';
import { Enlace } from './Enlace.jsx';
import { Ranking } from './Ranking/Ranking.jsx';
import { HomePage } from './HomePage.jsx';
import { SubCategories } from './Categories/SubCategories.jsx';
import { CallbackPage } from './Auth0/CallbackPage.tsx';
import { AuthenticationGuard } from './Auth0/AuthenticationGuard.tsx';
import { TriviaPage } from './Trivia/TriviaPage.jsx';



export  const App = () => {
  return (
    <Routes>
      <Route  path="/" element={<Enlace />} />
      {/* <Route path="/login" element={<AuthenticationGuard component={Login} />} /> */}
      <Route path="/categories" element={<AuthenticationGuard component={Category} />} />
      <Route path="/categories/:cat" element={<AuthenticationGuard component={SubCategories}/>} />
      <Route path="/categories/:cat/:sub" element={<AuthenticationGuard component={TriviaPage}/>} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path='/homePage' element={<AuthenticationGuard component={HomePage}/>}></Route>
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};