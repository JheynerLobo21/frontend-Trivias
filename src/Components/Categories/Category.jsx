import React from 'react'
import {Navbar} from './Navbar.jsx'
import '../../css/categories.css'
import { ListCategories } from './ListCategories.jsx'
import { useAuth0 } from '@auth0/auth0-react'
import { CallbackPage } from '../Auth0/CallbackPage.tsx'
export const Category = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <CallbackPage/>;
  }
  if(isAuthenticated){
  return (
    <>
      
      <div className='main-category'>
      <Navbar user={user}/>
      <hr />
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
