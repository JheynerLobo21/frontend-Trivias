import { Routes, Route } from 'react-router-dom';
import { Category } from './Categories/Category.jsx';
import { NotFoundPage } from './NotFoundPage.jsx';
import { Index } from './Index.jsx';
import { Ranking } from './Ranking/Ranking.jsx';
import { HomePage } from './HomePage.jsx';
import { SubCategories } from './Categories/SubCategories.jsx';
import { CallbackPage } from './Auth0/CallbackPage.tsx';
import { AuthenticationGuard } from './Auth0/AuthenticationGuard.tsx';
import { TriviaPage } from './Trivia/TriviaPage.jsx';
import { IsLoading } from './Loading/IsLoading.jsx';


export  const App = () => {
  return (
    <Routes>
      <Route  path="/" element={<Index />} />
      <Route path="/categories" element={<AuthenticationGuard component={Category} />} />
      <Route path="/categories/:cat" element={<AuthenticationGuard component={SubCategories}/>} />
      <Route path="/categories/:cat/:sub" element={<AuthenticationGuard component={TriviaPage}/>} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path='/homePage' element={<AuthenticationGuard component={HomePage}/>}></Route>
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/isLoading" element={<IsLoading />} />
    </Routes>
  );
};