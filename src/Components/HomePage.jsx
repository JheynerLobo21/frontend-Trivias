import React from 'react'
import { useLocation } from 'react-router-dom';
export const HomePage = () => {
  const location = useLocation();
  const url = location.state && location.state.urlSubcategory;
  return (
    <div>
      <h1>{url}</h1>
    </div>
  )
}
