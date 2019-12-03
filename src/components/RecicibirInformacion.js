import React, { Component } from 'react';
import withAuth from './withAuth'
import { NavLink } from 'react-router-dom';


class RecibirInformacion extends Component {
  state = {
    enviado: false,
    nombre: '',
    number: '',
    mail: '',
    duda: 'Me gustaría hacer una visita a esta propiedad',
    mensaje: 'En breve nos pondremos en contacto con usted.'

  }
  manageSubmit = ()=> {
    this.setState({
      enviado: true
    }, () => {
      setTimeout(()=>{
        this.setState({
          enviado: false
        })
      }, 3000)
    })
  }

  handleOnChange = (event)=> {
    const {name,value} = event.target;
    this.setState({
      [name]: value,
    });
  };

  validarForm(){
    const { nombre, number } = this.state
    const noValido = !nombre|| !number || number.length < 9 
    return noValido;
  }
  render(){
    const { duda, number, nombre, mail, mensaje } = this.state
    return (
      
    <div className="recibir-inform">
    <h4>Si esta interesado en recibir más información sobre esta vivienda, pongase en contacto con nosotros:</h4>
          <label htmlFor="nombre" className="datos-login"><h4>Nombre:</h4></label>
          <input type="text" value= {nombre} onChange={this.handleOnChange} className="border-warning form-control letra" id="nombre" placeholder="nombre" name= "nombre" ></input>
          <p><small>*Campo obligatorio</small></p>
          <label htmlFor="number" className="datos-login"><h4>Numero de telefono:</h4></label>
          <input type="number" maxLength="9" minLength='9' value={number} onChange={this.handleOnChange} className="border-warning form-control letra" id="number" placeholder="numero de contacto" name= "number" ></input>
          <p><small>*Campo obligatorio</small></p>
          <label htmlFor="mail" className="datos-login" ><h4>Mail</h4></label>
          <input type="email" value={mail} onChange={this.handleOnChange} className="border-warning form-control letra" id="mail" placeholder="email personal" name= "mail" ></input>
          <label htmlFor="duda" className="datos-login"><h4>¿En que podemos ayudarle?</h4></label>
          <textarea type="text" value={duda} onChange={this.handleOnChange} className="mr-5 p-3 border-warning form-control letra" id="duda" cols="100" rows ="3" placeholder="{duda}" name= "duda" ></textarea>
          <div className="text-center">
            { this.state.enviado ? <h4 className="mail-enviado bg-success"><h3>Gracias {nombre}, </h3> {mensaje}</h4> : <button className="btn btn-outline-warning mt-3 mb-1 col-6" disabled={this.validarForm()}onClick={this.manageSubmit}><h4>Enviar</h4></button> }<br></br>
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




