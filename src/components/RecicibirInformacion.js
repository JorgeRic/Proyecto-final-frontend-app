import React, { Component } from 'react';
import withAuth from './withAuth'
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
    <h4>Si esta interesado en recibir más información sobre esta vivienda, pongase en contacto con nosotros:</h4>
          <label htmlFor="titulo" className="datos-login"><h3>Nombre:</h3></label>
          <input type="text" className="border-warning form-control letra" id="nombre" placeholder="nombre" name= "nombre" ></input>
          <label htmlFor="numTelf" className="datos-login"><h3>Numero de telefono:</h3></label>
          <input type="number" className="border-warning form-control letra" id="titulo" placeholder="numero de contacto" name= "titulo" ></input>
          <label htmlFor="titulo" className="datos-login" ><h3>Mail</h3></label>
          <input type="text" className="border-warning form-control letra" id="titulo" placeholder="email personal" name= "titulo" ></input>
          <label htmlFor="titulo" className="datos-login"><h3>¿En que podemos ayudarle?</h3></label>
          <input type="text" className="border-warning form-control letra" id="nombre" placeholder="Me gustaría hacer una visita a esta vivienda......." name= "nombre" ></input>
          <div className="text-center">
            { this.state.enviado ? <h4 className="mail-enviado">Mail enviado. En breve nos pondremos en contacto con usted. <h3>Gracias</h3></h4> : <button className="btn btn-outline-warning mt-3 mb-1 col-6" onClick={this.manageSubmit}><h4>Enviar</h4></button> }<br></br>
          </div>
          
          {/* <input type="submit" value="SUBMIT EMAIL TO: info@whatshouldisay.ca" <a href="mailto:info@whatshouldisay.ca" /> */}
          {/* <input type="submit" value="Send Email" />  */}

          <div className="container text-center">
            <NavLink to='/list' activeClassName=""><button className="btn btn-outline-dark mt-2 mb-2 col-8"><h3>Volver a lista de viviendas</h3></button></NavLink>
          </div>
    </div>
     
    
  )}
}
export default withAuth (RecibirInformacion)




