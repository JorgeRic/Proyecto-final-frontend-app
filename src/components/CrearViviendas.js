import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import {Redirect} from 'react-router-dom'
import FileComponent from './FileComponent'


class CrearVivienda extends Component {
  state = {
    titulo: '',
    imagenes: [],
    clase: undefined,
    tipo: undefined,
    ciudad: undefined,
    direccion: '',
    precio: 0,
    metros: 0,
    numHab: 0,
    NumAseos: 0,
    numGarajes: 0,
    piscina: 'No',
    jardin:'No',
    referencia: 0,
    descripcion: '',
    nombrePropietario: '',
    telefonoPropietario: '',
    mailPropietario: '',
    viviendas:'',
    redirect: false,
    
  };

  handelSubmit= (event) => {
    const {titulo, tipo, imagenes, precio, numHab, numAseos, clase,referencia, descripcion, ciudad, direccion, metros, piscina, jardin,numGarajes, nombrePropietario, mailPropietario, telefonoPropietario} = this.state
    event.preventDefault();
    viviendaBackendService.addOneVivienda({
    titulo,
    clase,
    imagenes,
    tipo,
    ciudad,
    direccion,
    metros,
    precio,
    jardin,
    numHab,
    numAseos,
    numGarajes,
    piscina,
    referencia,
    descripcion,
    nombrePropietario,
    telefonoPropietario,
    mailPropietario
    })
    .then(() => {
      this.setState({
        redirect: true,
      })
    })
    .catch (error => {console.log(error)})
  };

  handleOnChange = (event)=> {
    const {name,value} = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
    window.state = this.state;
  };

  onUploadFinished = filename => {
    this.setState({imagenes: this.state.imagenes.concat(filename)});
  };

  render() {
    const {titulo, imagenes, viviendas, clase, tipo, precio, numHab, numAseos, piscina, jardin, numGarajes, redirect, ciudad, referencia, descripcion,direccion, metros,nombrePropietario,telefonoPropietario, mailPropietario} = this.state
    return (
      <div>
       
        <form onSubmit ={this.handelSubmit}>
          <label htmlFor="clase">Venta o alquiler</label>
          <select name="clase" onChange={this.handleOnChange } value={clase} id="clase">
            <option value=''>Elegir</option>
            <option value='venta'>Venta</option>
            <option value='alquiler'>Alquiler</option>
          </select>

          <label htmlFor="tipo">Tipo de vivienda</label>
          <select name='tipo' onChange={this.handleOnChange } value={tipo} id="tipo">
            <option value=''>Elegir</option>
            <option value='piso'>Piso</option>
            <option value='chalet'>Chalet</option>
            <option value='planta baja'>Planta baja</option>
            <option value='bungalow'>Bungalow</option>
            <option value='apartamento'>Apartamento</option>
            <option value='atico'>Atico</option>
          </select>

          <label htmlFor="titulo">Titulo de la vivienda</label>
          <input type="text" id="titulo" placeholder="" value={titulo} name= "titulo" onChange={this.handleOnChange }></input>
          
          <label htmlFor="imagenes">Image</label>
          <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
          {/* Pasamos a 'FileComponent' la funcion 'onUploadFinished' para poder actualizar las urls de imagen en la base de datos. */}
          <FileComponent id="imagenes" onUploadFinished={this.onUploadFinished}/>
          </label>
          
         
          <label htmlFor="precio">Precio</label>
          <input type="number" id="precio" placeholder="" value={precio} name= "precio" onChange={this.handleOnChange }></input>
         
      
          <label htmlFor="ciudad">Ciudad</label>
          <select name="ciudad" onChange={this.handleOnChange } value={ciudad} id="ciudad">
            <option value=''>Elegir</option>
            <option value='Alicante'>Alicante</option>
            <option value='San Vicente'>San Vicente</option>
            <option value='San Juan'>San Juan</option>
            <option value='Campello'>Campello</option>
            <option value='El Altet'>El Altet</option>
            <option value='Agost'>Agost</option>
          </select>

          <label htmlFor="direccion">Direccion de la vivienda</label>
          <input type="text" id="direccion" placeholder="" onChange={this.handleOnChange } name= "direccion" value={direccion} ></input>
        
          <label htmlFor="metros">Metros de la vivienda</label>
          <input type="number" id="metros" placeholder="" onChange={this.handleOnChange } name= "metros" value={metros} ></input>
       
          <label htmlFor="numGarajes">Numero de garajes</label>
          <input type="number" id="numGarajes" placeholder="" onChange={this.handleOnChange } name= "numGarajes" value={numGarajes} ></input>

       
          <label htmlFor="numHab">Numero de habitaciones</label>
          <input type="number" id="numHab" placeholder="" onChange={this.handleOnChange } name= "numHab" value={numHab} ></input>
       
          <label htmlFor="referencia">Numero de referencia</label>
          <input type="number" id="referencia" placeholder="" onChange={this.handleOnChange } name= "referencia" value={referencia} ></input>
       
          <label htmlFor="numAseos">Baños</label>
          <input type="number" id="numAseos" placeholder="" onChange={this.handleOnChange } name= "numAseos" value={numAseos} ></input>

          <label htmlFor="jardin">Jardin</label>
          <select name="jardin" onChange={this.handleOnChange } value={jardin} id="jardin">
            <option value=''>Elegir</option>
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </select>

          <label htmlFor="piscina">Piscina</label>
          <select name="piscina" onChange={this.handleOnChange } value={piscina} id="piscina">
           <option value=''>Elegir</option>
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </select>
          
          <label htmlFor="descripcion">Descripcion de la vivienda</label>
          <input type="text" id="descripcion" placeholder="" onChange={this.handleOnChange } name= "descripcion" value={descripcion} ></input>
         
          <label htmlFor="nombrePropietario">Nombre del propietario</label>
          <input type="text" id="nombrePropietario" placeholder="" onChange={this.handleOnChange } name= "nombrePropietario" value={nombrePropietario} ></input>
        
          <label htmlFor="telefonoPropietario">TelefonoPropietario</label>
          <input type="text" id="telefonoPropietario" placeholder="" onChange={this.handleOnChange } name= "telefonoPropietario" value={telefonoPropietario} ></input>
        
          <label htmlFor="mailPropietario">Mail del propietario</label>
          <input type="email" id="mailPropietario" placeholder="" onChange={this.handleOnChange } name= "mailPropietario" value={mailPropietario} ></input>

          <button type='submit'>Añadir</button>
        </form>
        {redirect ? <Redirect to = '/privatelist'/> : null}
      </div>
    )
  }
}

export default withAuth(CrearVivienda);