import React, { useState } from 'react'
import '../../css/subcategories.css'
import { Navbar } from './Navbar'
import {OptionsSubcategories} from './OptionsSubcategories'
import { useAuth0 } from '@auth0/auth0-react'
import { CallbackPage } from '../Auth0/CallbackPage'
import { DescryptionSubcategory } from './DescryptionSubcategory'


export const SubCategories = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [btnSubcategory, setBtnSubcategory] = useState('');

  const category=JSON.parse(localStorage.getItem('category'));
  console.log(category);

    const handleBtnClick = (subcategory) => {
        setBtnSubcategory(subcategory);
    };

  const categoryTitle=category.name.replace(/-/g," ");

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
      <aside className='listsubcategories' id='listsubcategories'>
      <OptionsSubcategories categoryName={category.name} btnSubcategory onBtnClick={handleBtnClick}/>
      </aside>
    </main>
    </>
  )
}
}
