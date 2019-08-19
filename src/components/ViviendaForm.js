import React, { Component } from 'react'
import viviendaBackendService from '../services/viv-backend-service'


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
    .then(()=> this.props.refreshData())
   }

  render() {

    const vivienda = this.state.vivienda;

    return (
      <div>
        <form onSubmit ={this.handelSubmit}>
                
                 <h5>Numero de referencia: {vivienda.referencia}</h5>   

                <label htmlFor="titulo">Titulo</label>
                 <input type="text" 
                 id="titulo"
                 placeholder="modificar datos ..." 
                 name="titulo"
                 defaultValue={vivienda.titulo}
                 onChange={ this.handleUpdate }
                 />

                <label htmlFor="clase">Clase</label>
                <select name='clase' onChange={this.handleUpdate } defaultValue={vivienda.clase} id="clase">
                  <option value=''>modificar datos ...</option>
                  <option value='venta'>Venta</option>
                  <option value='alquiler'>Alquiler</option>
                 </select> 
            
                <label htmlFor="type">Tipo de vivienda</label>
                <select name='tipo' onChange={this.handleUpdate } defaultValue={vivienda.tipo} id="tipo">
                  <option value=''>modificar datos ...</option>
                  <option value='piso'>Piso</option>
                  <option value='chalet'>Chalet</option>
                  <option value='planta baja'>Planta baja</option>
                  <option value='bungalow'>Bungalow</option>
                  <option value='apartamento'>Apartamento</option>
                  <option value='atico'>Atico</option>
                </select>

                <label htmlFor="ciudad">Ciudad</label>
                <select name="ciudad" onChange={this.handleUpdate } defaultValue={vivienda.ciudad} id="ciudad">
                  <option value=''>modificar datos ...</option>
                  <option value='Alicante'>Alicante</option>
                  <option value='San Vicente'>San Vicente</option>
                  <option value='San Juan'>San Juan</option>
                  <option value='Campello'>Campello</option>
                  <option value='El Altet'>El Altet</option>
                  <option value='Agost'>Agost</option>
                </select>

                <label htmlFor="direccion">Direccion de la vivienda</label>
                <input type="text" 
                id="direccion" 
                defaultValue={vivienda.direccion}
                placeholder="modificar datos ..." 
                onChange={this.handleUpdate } 
                name= "direccion" 
                />

                <label htmlFor="precio">Precio actual</label>
                <input 
                  type="number"
                  id="precio"
                  defaultValue={vivienda.precio}
                  placeholder="modificar datos ..." 
                  name= "precio"
                  onChange={this.handleUpdate}
                />
                
                <label htmlFor="metros">Metros de la vivienda</label>
                <input type="number" 
                id="metros" 
                defaultValue={vivienda.metros}
                onChange={this.handleUpdate } 
                name= "metros" 
                placeholder="modificar datos ..." 
                />

                <label htmlFor="numHab">Habitaciones</label>
                <input type="number" 
                id="numHab" 
                defaultValue={vivienda.numHab}
                onChange={this.handleUpdate } 
                name= "numHab" 
                placeholder="modificar datos ..." 
                />

                <label htmlFor="numAseos">Baños</label>
                <input type="number" 
                id="numAseos" 
                defaultValue={vivienda.numAseos}
                onChange={this.handleUpdate } 
                name= "numAseos" 
                placeholder="modificar datos ..."  
                />

                <label htmlFor="numGarajes">Numero de garajes</label>               
                <input type="number" 
                id="numGarajes" 
                defaultValue={vivienda.numGarajes}
                placeholder="modificar datos ..." 
                onChange={this.handleUpdate } 
                name= "numGarajes" 
                />

                <label htmlFor="jardin">Jardin</label>
                <select name="jardin" onChange={this.handleUpdate } defaultValue={vivienda.jardin}  id="jardin">
                  <option value=''>modificar datos ...</option>
                  <option value='Si'>Si</option>
                  <option value='No'>No</option>
                </select>

                <label htmlFor="piscina">Piscina</label>
                <select name="piscina" onChange={this.handleUpdate } defaultValue={vivienda.piscina} id="piscina">
                  <option value=''>modificar datos ...</option>  
                  <option value='Si'>Si</option>
                  <option value='No'>No</option>
                </select>

                <label htmlFor="descripcion">Descripcion de la vivienda</label>
                <input type="text" 
                id="descripcion" 
                defaultValue={vivienda.descripcion}
                onChange={this.handleUpdate } 
                name= "descripcion" 
                placeholder="modificar datos ..." 
                />
            
                  <p>Datos de contacto:</p>

               <label htmlFor="nombrePropietario">Nombre del propietario</label>
               <input type="text" 
               id="nombrePropietario" 
               placeholder="modificar datos ..." 
               defaultValue={vivienda.nombrePropietario}
               onChange={this.handleUpdate } 
               name= "nombrePropietario" 
               ></input>
        
               <label htmlFor="telefonoPropietario">TelefonoPropietario</label>
               <input type="text" 
               id="telefonoPropietario" 
               placeholder="modificar datos ..." 
               defaultValue={vivienda.telefonoPropietario}
               onChange={this.handleUpdate } 
               name= "telefonoPropietario" 
               ></input>
        
               <label htmlFor="mailPropietario">Mail del propietario</label>
               <input type="email" 
               id="mailPropietario" 
               placeholder="modificar datos ..." 
               defaultValue={vivienda.mailPropietario}
               onChange={this.handleUpdate } 
               name= "mailPropietario" 
               ></input>


  
                <button type='submit'>Modificar</button>
              </form>
      </div>
    )
  }
}

//         <label htmlFor="imagenes">Image</label>
//         <input type="text" id="image" defaultValue={vivienda.image} name= "image" onChange={this.handleOnChange }></input>
//        
//      
//         
//         <label htmlFor="numHab">Numero de habitaciones</label>
//         <input type="number" id="numHab" onChange={this.handleOnChange } name= "numHab" defaultValue={vivienda.numHab} ></input>
//         <label htmlFor="referencia">Numero de referencia</label>
//         <input type="number" id="referencia" placeholder="" onChange={this.handleOnChange } name= "referencia" defaultValue={vivienda.referencia} ></input>
//         <label htmlFor="numAseos">Baños</label>
//         <input type="number" id="numAseos" placeholder="" onChange={this.handleOnChange } name= "numAseos" defaultValue={vivienda.numAseos} ></input>
//         <label htmlFor="description">Descripcion de la vivienda</label>
//         <input type="description" id="description" placeholder="" onChange={this.handleOnChange } name= "description" defaultValue={vivienda.description} ></input>