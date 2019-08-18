import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import withAuth from './withAuth'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';




function RecibirInformacion(props) {
  const {isLoggedIn, component: Component, ...rest} = props;
  //pasamos component a mayusculas para que lo entienda React
  return (
    
    <>
 <h1>Recibir informacion</h1> 
    

    
    </>
     
    
  )
}
export default withAuth (RecibirInformacion)




