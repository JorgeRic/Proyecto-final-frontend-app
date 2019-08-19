import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import withAuth from './withAuth'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


function RecibirInformacion(props) {
  
  return (
    
    <>
    <p>Si esta interesado en recibir más información sobre esta vivienda, pongase en con nosotros:</p>
          <form method="post" action="mailto:jorrillop@hotmail.com" >
          <label htmlFor="titulo">Nombre:</label>
          <input type="text" id="nombre" placeholder="nombre" name= "nombre" ></input>
          <label htmlFor="numTelf">Numerode telefono:</label>
          <input type="number" id="titulo" placeholder="numero de contacto" name= "titulo" ></input>
          <label htmlFor="titulo">Mail</label>
          <input type="text" id="titulo" placeholder="email personal" name= "titulo" ></input>
          {/* <button type='submit'>Enviar</button> */}
          <label htmlFor="titulo">¿En que podemos ayudarle?</label>
          <input type="text" id="nombre" placeholder="Me gustaría hacer una visita a esta vivienda......." name= "nombre" ></input>
         
          {/* <input type="submit" value="SUBMIT EMAIL TO: info@whatshouldisay.ca" <a href="mailto:info@whatshouldisay.ca" /> */}
          <input type="submit" value="Send Email" /> 
          </form> 
          <Link to='/list'>Volver a lista de viviendas</Link>
    </>
     
    
  )
}
export default withAuth (RecibirInformacion)




