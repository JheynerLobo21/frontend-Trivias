import React, { useState } from 'react'
import '../../css/subcategories.css'
import { Navbar } from './Navbar'
import {OptionsSubcategories} from './OptionsSubcategories'
import { useAuth0 } from '@auth0/auth0-react'
import { CallbackPage } from '../Auth0/CallbackPage'
import { DescryptionSubcategory } from './DescryptionSubcategory'

export const Literature = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [btnSubcategory, setBtnSubcategory] = useState('');

  const categoryName=localStorage.getItem('category');

    const handleBtnClick = (btnSubcategory) => {
        setBtnSubcategory(btnSubcategory);
    };

  const categoryTitle=categoryName.replace(/-/g," ");

  if (isLoading) {
    return <CallbackPage/>;
  }
  if(isAuthenticated){
  return (
    <>
    <Navbar user={user}/>
    <hr />
    <h1 className='title-category'>{categoryTitle}</h1>
    <main className='generalknowledge'>
      <aside className='descriptionsubcategory' id='descriptionsubcategory'>
        <DescryptionSubcategory btnSubcategory={btnSubcategory}/>
      </aside>
      <aside className='listsubcategories'>
      <OptionsSubcategories categoryName={categoryName} btnSubcategory onBtnClick={handleBtnClick}/>
      </aside>
    </main>
    </>
  )
}
}
