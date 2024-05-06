import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export const Enlace = () => {
  const {isAuthenticated, user}=useAuth0()
  
  return (
    <>
    <Link to="/categories">Log in</Link>
    </>
    )
    
}
