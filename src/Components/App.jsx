import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Login/Login.jsx';
import { Category } from './Categories/Category.jsx';
import { NotFoundPage } from './NotFoundPage.jsx';
import { Enlace } from './Enlace.jsx';
import { Ranking } from './Ranking/Ranking.jsx';
import { HomePage } from './HomePage.jsx';
import { Generalknowledge } from './Categories/Generalknowledge.jsx';
import { Gastronomy } from './Categories/Gastronomy.jsx';
import { Moviesseries } from './Categories/Moviesseries.jsx';
import { Music } from './Categories/Music.jsx';
import { Literature } from './Categories/Literature.jsx';
import { Worldhistory } from './Categories/Worldhistory.jsx';
import { Sciencetechnology } from './Categories/Sciencetechnology.jsx';
import { Sports } from './Categories/Sports.jsx';
import { CallbackPage } from './Auth0/CallbackPage.tsx';
import { AuthenticationGuard } from './Auth0/AuthenticationGuard.tsx';
import { TriviaPage } from './Trivia/TriviaPage.jsx';



export  const App = () => {
  return (
    <Routes>
      <Route  path="/" element={<Enlace />} />
      {/* <Route path="/login" element={<AuthenticationGuard component={Login} />} /> */}
      <Route path="/categories" element={<AuthenticationGuard component={Category} />} />
      <Route path="/categories/gastronomía" element={<AuthenticationGuard component={Gastronomy}/>} />
      <Route path="/categories/cultura-general" element={<AuthenticationGuard component={Generalknowledge}/>} />
      <Route path="/categories/películas-y-series" element={<AuthenticationGuard component={Moviesseries}/>} />
      <Route path="/categories/música" element={<AuthenticationGuard component={Music}/>} />
      <Route path="/categories/literatura" element={<AuthenticationGuard component={Literature}/>} />
      <Route path="/categories/historia-mundial" element={<AuthenticationGuard component={Worldhistory}/>} />
      <Route path="/categories/ciencia-y-tecnología" element={<AuthenticationGuard component={Sciencetechnology}/>} />
      <Route path="/categories/deportes" element={<AuthenticationGuard component={Sports}/>} />
      <Route path="/categories/deportes/option-1" element={<AuthenticationGuard component={TriviaPage}/>} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path='/homePage' element={<AuthenticationGuard component={HomePage}/>}></Route>
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};