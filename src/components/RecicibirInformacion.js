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
    
    <div className="recibir-inform">
    <p>Si esta interesado en recibir más información sobre esta vivienda, pongase en contacto con nosotros:</p>
          <label htmlFor="titulo" className="datos-login"><h2>Nombre:</h2></label>
          <input type="text" className="cuadro-informacion" id="nombre" placeholder="nombre" name= "nombre" ></input>
          <label htmlFor="numTelf" className="datos-login"><h2>Numero de telefono:</h2></label>
          <input type="number" className="cuadro-informacion" id="titulo" placeholder="numero de contacto" name= "titulo" ></input>
          <label htmlFor="titulo" className="datos-login" ><h2>Mail</h2></label>
          <input type="text" className="cuadro-informacion" id="titulo" placeholder="email personal" name= "titulo" ></input>
          <label htmlFor="titulo" className="datos-login"><h3>¿En que podemos ayudarle?</h3></label>
          <input type="text" className="cuadro-informacion" id="nombre" placeholder="Me gustaría hacer una visita a esta vivienda......." name= "nombre" ></input>
          { this.state.enviado ? <h4>Mail enviado. En breve nos pondremos en contacto con usted. Gracias</h4> : <button className="btn-select-search" onClick={this.manageSubmit}><h2>Enviar</h2></button> }<br></br>
          
          {/* <input type="submit" value="SUBMIT EMAIL TO: info@whatshouldisay.ca" <a href="mailto:info@whatshouldisay.ca" /> */}
          {/* <input type="submit" value="Send Email" />  */}

          
          <NavLink to='/list' activeClassName=""><button className="btn-recibir-inform"><h3>Volver a lista de viviendas</h3></button></NavLink>
    </div>
     
    
  )}
}
export default withAuth (RecibirInformacion)




