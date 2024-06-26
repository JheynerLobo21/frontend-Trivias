import { useEffect } from 'react'
import {Navbar} from '../Navbar/Navbar'
import '../../css/categories.css'
import { ListCategories } from './ListCategories.jsx'
import { useAuth0 } from '@auth0/auth0-react'
import { CallbackPage } from '../Auth0/CallbackPage.tsx'
import { getUser,createUser } from '../../services/Usuario.js'
export const Category = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  useEffect(() => {
    const fetchData = async () => {
        try {
          let userbd=await getUser(user.sub)
          if(userbd===null){
            let userbd = {
              idAuth: user.sub,
              nickname: user.nickname,
              email: user.email
          };
            userbd=await createUser(userbd)
          console.log(userbd);}
          localStorage.setItem("usuario",JSON.stringify(userbd))
        } catch (error) {
            console.error('Error fetching getUser:', error);
        }
    };

    fetchData();
}, []);
  //if(userbd)
  if (isLoading) {
    return <CallbackPage/>;
  }
  if(isAuthenticated){
  return (
    <>
      
      <Navbar user={user}/>
      <div className='container-general'>
      <div className='main-category'>
        <h1 className='title'>TRIVIATON</h1>
        <div className='main-category-scroll'>
          <ListCategories />
        </div>
      </div>
      </div>
      
    </>
  )
}
}
