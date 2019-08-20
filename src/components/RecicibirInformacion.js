import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom'
import withAuth from './withAuth'
import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';


class RecibirInformacion extends Component {
  state = {
    enviado: false
  }
  manageSubmit = ()=> {
    this.setState({
      enviado: true
    })
  }
  render(){
    return (
    
    <>
    <p>Si esta interesado en recibir más información sobre esta vivienda, pongase en con nosotros:</p>
          <label htmlFor="titulo">Nombre:</label>
          <input type="text" id="nombre" placeholder="nombre" name= "nombre" ></input>
          <label htmlFor="numTelf">Numerode telefono:</label>
          <input type="number" id="titulo" placeholder="numero de contacto" name= "titulo" ></input>
          <label htmlFor="titulo">Mail</label>
          <input type="text" id="titulo" placeholder="email personal" name= "titulo" ></input>
          <label htmlFor="titulo">¿En que podemos ayudarle?</label>
          <input type="text" id="nombre" placeholder="Me gustaría hacer una visita a esta vivienda......." name= "nombre" ></input>
          { this.state.enviado ? <h3>Mail enviado. En breve nos pondremos en contacto con usted</h3> : <button onClick={this.manageSubmit}>Enviar</button> }<br></br>
          
          {/* <input type="submit" value="SUBMIT EMAIL TO: info@whatshouldisay.ca" <a href="mailto:info@whatshouldisay.ca" /> */}
          {/* <input type="submit" value="Send Email" />  */}

        
          <NavLink to='/list' activeClassName=""><button>Volver a lista de viviendas</button></NavLink>
    </>
     
    
  )}
}
export default withAuth (RecibirInformacion)




