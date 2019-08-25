import React, { Component } from 'react'
import viviendaBackendService from '../services/viv-backend-service'
// import withAuth from './withAuth.js'
import {Redirect} from 'react-router-dom'
// import FileComponent from './FileComponent'


export default class ViviendaForm extends Component {
  // state = this.props.vivienda;
  state = {vivienda: this.props.vivienda};
   
  handleUpdate = (event)=> {
    const {name,value} = event.target;
    const vivienda = this.state.vivienda;

    vivienda[name] = value;

    this.setState({
      vivienda: vivienda,
    })
  }

  handelSubmit= (event) => {
    const {vivienda} = this.state
    event.preventDefault();

    viviendaBackendService.updateOneVivienda( vivienda._id, vivienda)
    .then(()=> {
      this.props.refreshData();
      this.props.onSuccessfulSubmit();
    })
   }

  render() {

    const vivienda = this.state.vivienda;

    return (
      <div>
        <form onSubmit ={this.handelSubmit}>
                
            <h2 className="cartera-viv">Numero de referencia de la vivienda: {vivienda.referencia}</h2> 

                <label htmlFor="titulo" className="datos-creacion">Titulo</label>
                 <input type="text" 
                 id="titulo"
                 className="cuadro-creacion"
                 placeholder="modificar datos ..." 
                 name="titulo"
                 defaultValue={vivienda.titulo}
                 onChange={ this.handleUpdate }
                 />

                <label htmlFor="clase" className="datos-creacion">Clase</label>
                <select name='clase' className="select-creacion" onChange={this.handleUpdate } defaultValue={vivienda.clase} id="clase">
                  <option value=''>modificar datos ...</option>
                  <option value='venta'>Venta</option>
                  <option value='alquiler'>Alquiler</option>
                 </select> 
            
                <label htmlFor="type" className="datos-creacion">Tipo de vivienda</label>
                <select name='tipo'className="select-creacion" onChange={this.handleUpdate } defaultValue={vivienda.tipo} id="tipo">
                  <option value=''>modificar datos ...</option>
                  <option value='piso'>Piso</option>
                  <option value='chalet'>Chalet</option>
                  <option value='planta baja'>Planta baja</option>
                  <option value='bungalow'>Bungalow</option>
                  <option value='apartamento'>Apartamento</option>
                  <option value='atico'>Atico</option>
                </select>

                <label htmlFor="ciudad" className="datos-creacion">Ciudad</label>
                <select name="ciudad" className="select-creacion" onChange={this.handleUpdate } defaultValue={vivienda.ciudad} id="ciudad">
                  <option value=''>modificar datos ...</option>
                  <option value='Alicante'>Alicante</option>
                  <option value='San Vicente'>San Vicente</option>
                  <option value='San Juan'>San Juan</option>
                  <option value='Campello'>Campello</option>
                  <option value='El Altet'>El Altet</option>
                  <option value='Agost'>Agost</option>
                </select>

                <label htmlFor="direccion" className="datos-creacion">Direccion de la vivienda</label>
                <input type="text" 
                id="direccion" 
                className="cuadro-creacion"
                defaultValue={vivienda.direccion}
                placeholder="modificar datos ..." 
                onChange={this.handleUpdate } 
                name= "direccion" 
                />

                <label htmlFor="precio" className="datos-creacion">Precio actual</label>
                <input 
                  type="number"
                  id="precio"
                  className="cuadro-creacion"
                  defaultValue={vivienda.precio}
                  placeholder="modificar datos ..." 
                  name= "precio"
                  onChange={this.handleUpdate}
                />
                
                <label htmlFor="metros" className="datos-creacion">Metros de la vivienda</label>
                <input type="number" 
                id="metros" 
                className="cuadro-creacion"
                defaultValue={vivienda.metros}
                onChange={this.handleUpdate } 
                name= "metros" 
                placeholder="modificar datos ..." 
                />

                <label htmlFor="numHab" className="datos-creacion">Habitaciones</label>
                <input type="number" 
                id="numHab" 
                className="cuadro-creacion"
                defaultValue={vivienda.numHab}
                onChange={this.handleUpdate } 
                name= "numHab" 
                placeholder="modificar datos ..." 
                />

                <label htmlFor="numAseos" className="datos-creacion">Baños</label>
                <input type="number" 
                id="numAseos" 
                className="cuadro-creacion"
                defaultValue={vivienda.numAseos}
                onChange={this.handleUpdate } 
                name= "numAseos" 
                placeholder="modificar datos ..."  
                />

                <label htmlFor="numGarajes" className="datos-creacion">Numero de garajes</label>               
                <input type="number" 
                id="numGarajes" 
                className="cuadro-creacion"
                defaultValue={vivienda.numGarajes}
                placeholder="modificar datos ..." 
                onChange={this.handleUpdate } 
                name= "numGarajes" 
                />

                <label htmlFor="jardin" className="datos-creacion">Jardin</label>
                <select name="jardin" className="select-creacion" onChange={this.handleUpdate } defaultValue={vivienda.jardin}  id="jardin">
                  <option value=''>modificar datos ...</option>
                  <option value='Si'>Si</option>
                  <option value='No'>No</option>
                </select>

                <label htmlFor="piscina" className="datos-creacion">Piscina</label>
                <select name="piscina" className="select-creacion" onChange={this.handleUpdate } defaultValue={vivienda.piscina} id="piscina">
                  <option value=''>modificar datos ...</option>  
                  <option value='Si'>Si</option>
                  <option value='No'>No</option>
                </select>

                <label htmlFor="descripcion" className="datos-creacion">Descripcion de la vivienda</label>
                <input type="text" 
                id="descripcion" 
                className="cuadro-creacion"
                defaultValue={vivienda.descripcion}
                onChange={this.handleUpdate } 
                name= "descripcion" 
                placeholder="modificar datos ..." 
                />
            
                  <h3>Datos de contacto:</h3>

               <label htmlFor="nombrePropietario" className="datos-creacion">Nombre del propietario</label>
               <input type="text" 
               id="nombrePropietario" 
               className="cuadro-creacion"
               placeholder="modificar datos ..." 
               defaultValue={vivienda.nombrePropietario}
               onChange={this.handleUpdate } 
               name= "nombrePropietario" 
               ></input>
        
               <label htmlFor="telefonoPropietario" className="datos-creacion">TelefonoPropietario</label>
               <input type="text" 
               id="telefonoPropietario" 
               className="cuadro-creacion"
               placeholder="modificar datos ..." 
               defaultValue={vivienda.telefonoPropietario}
               onChange={this.handleUpdate } 
               name= "telefonoPropietario" 
               ></input>
        
               <label htmlFor="mailPropietario" className="datos-creacion">Mail del propietario</label>
               <input type="email" 
               id="mailPropietario" 
               className="cuadro-creacion"
               placeholder="modificar datos ..." 
               defaultValue={vivienda.mailPropietario}
               onChange={this.handleUpdate } 
               name= "mailPropietario" 
               ></input>

              <label htmlFor="lat" className="datos-creacion">Latitud</label>
              <input type="text" 
              id="lat" className="cuadro-creacion" 
              placeholder="" 
              onChange={this.handleUpdate } 
              name= "lat" 
              value={vivienda.lat} ></input>

              <label htmlFor="long" className="datos-creacion">Longitud</label>
             <input type="text" 
             id="long" className="cuadro-creacion" 
             placeholder="" 
             onChange={this.handleUpdate } 
             name= "long" 
             value={vivienda.long} ></input>

                <button type='submit' className="btn-select-search"><h2>Modificar</h2></button>
               {/* <Redirect to = '/privatelist'/> */}
              </form>
      </div>
    )
  }
}

