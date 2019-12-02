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
    numAseos: 0,
    numGarajes: 0,
    piscina: 'No',
    jardin:'No',
    referencia: 0,
    descripcion: '',
    nombrePropietario: '',
    telefonoPropietario: '',
    mailPropietario: '',
    viviendas:'',
    lat: '',
    long: '',
    redirect: false,
  };

  handelSubmit= (event) => {
    const {titulo, tipo, imagenes, precio, numHab, numAseos, clase,referencia, descripcion, ciudad, direccion, metros, piscina, jardin,numGarajes, nombrePropietario, mailPropietario, telefonoPropietario, lat, long} = this.state;
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
      mailPropietario,
      lat,
      long
    })
    .then(() => {
      // debugger;
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
    // console.log(this.state);
    window.state = this.state;
  };

  onUploadFinished = filename => {
    this.setState({imagenes: this.state.imagenes.concat(filename)});
  };

  render() {
    const {titulo, clase, tipo, precio, numHab, numAseos, piscina, jardin, numGarajes, redirect, ciudad, referencia, descripcion,direccion, metros,nombrePropietario,telefonoPropietario, mailPropietario, lat, long} = this.state
    return (
      <div className="margenes-creacion-vivienda">
       
        <form onSubmit ={this.handelSubmit}>
          <label htmlFor="clase" className="datos-creacion">Venta o alquiler</label>
          <select name="clase" className="border-warning form-control letra" onChange={this.handleOnChange } value={clase} id="clase">
            <option value=''>Elegir</option>
            <option value='venta'>Venta</option>
            <option value='alquiler'>Alquiler</option>
          </select>

          <label htmlFor="tipo" className="datos-creacion">Tipo de vivienda</label>
          <select name='tipo' className="border-warning form-control letra" onChange={this.handleOnChange } value={tipo} id="tipo">
            <option value=''>Elegir</option>
            <option value='piso'>Piso</option>
            <option value='chalet'>Chalet</option>
            <option value='planta baja'>Planta baja</option>
            <option value='bungalow'>Bungalow</option>
            <option value='apartamento'>Apartamento</option>
            <option value='atico'>Atico</option>
          </select>

          <label htmlFor="titulo" className="datos-creacion">Titulo de la vivienda</label>
          <input type="text" id="titulo" className="mr-5 p-3 border-warning form-control letra" placeholder="" value={titulo} name= "titulo" onChange={this.handleOnChange }></input>
          
       
          {/* <label style={{backgroundColor: 'steelblue', color: 'white', padding: "10px", borderRadius: 4, pointer: 'cursor'}}> */}
          {/* Pasamos a 'FileComponent' la funcion 'onUploadFinished' para poder actualizar las urls de imagen en la base de datos. */}
          <FileComponent id="imagenes" className="datos-creacion"  onUploadFinished={this.onUploadFinished}/>
          {/* </label> */}
          
         
          <label htmlFor="precio" className="datos-creacion">Precio</label>
          <input type="number" id="precio" className="mr-5 p-3 border-warning form-control letra" placeholder="" value={precio} name= "precio" onChange={this.handleOnChange }></input>
         
      
          <label htmlFor="ciudad" className="datos-creacion">Ciudad</label>
          <select name="ciudad"  className="border-warning form-control letra" onChange={this.handleOnChange } value={ciudad} id="ciudad">
            <option value=''>Elegir</option>
            <option value='Alicante'>Alicante</option>
            <option value='San Vicente'>San Vicente</option>
            <option value='San Juan'>San Juan</option>
            <option value='Campello'>Campello</option>
            <option value='El Altet'>El Altet</option>
            <option value='Agost'>Agost</option>
          </select>

          <label htmlFor="direccion"className="datos-creacion" >Direccion de la vivienda</label>
          <input type="text" id="direccion" className="mr-5 p-3 border-warning form-control letra" placeholder="" onChange={this.handleOnChange } name= "direccion" value={direccion} ></input>
        
          <label htmlFor="metros" className="datos-creacion" >Metros de la vivienda</label>
          <input type="number" id="metros" className="mr-5 p-3 border-warning form-control letra" placeholder="" onChange={this.handleOnChange } name= "metros" value={metros} ></input>
       
          <label htmlFor="numGarajes" className="datos-creacion">Numero de garajes</label>
          <input type="number" id="numGarajes" className="mr-5 p-3 border-warning form-control letra" placeholder="" onChange={this.handleOnChange } name= "numGarajes" value={numGarajes} ></input>

       
          <label htmlFor="numHab" className="datos-creacion">Numero de habitaciones</label>
          <input type="number" id="numHab" className="mr-5 p-3 border-warning form-control letra" placeholder="" onChange={this.handleOnChange } name= "numHab" value={numHab} ></input>
       
          <label htmlFor="referencia" className="datos-creacion">Numero de referencia</label>
          <input type="number" id="referencia"  className="mr-5 p-3 border-warning form-control letra"placeholder="" onChange={this.handleOnChange } name= "referencia" value={referencia} ></input>
       
          <label htmlFor="numAseos" className="datos-creacion">Baños</label>
          <input type="number" id="numAseos" className="mr-5 p-3 border-warning form-control letra" placeholder="0" onChange={this.handleOnChange } name= "numAseos" value={numAseos} ></input>

          <label htmlFor="jardin"className="datos-creacion" >Jardin</label>
          <select name="jardin" className="border-warning form-control letra" onChange={this.handleOnChange } value={jardin} id="jardin">
            <option value=''>Elegir</option>
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </select>

          <label htmlFor="piscina" className="datos-creacion">Piscina</label>
          <select name="piscina" className="border-warning form-control letra" onChange={this.handleOnChange } value={piscina} id="piscina">
            <option value=''>Elegir</option>
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </select>
          
          <label htmlFor="descripcion" className="datos-creacion">Descripcion de la vivienda</label>
          <textarea type="text" id="descripcion" className="mr-5 p-3 border-warning form-control letra" cols="100" rows ="5" placeholder="" onChange={this.handleOnChange } name= "descripcion" value={descripcion} ></textarea>
         
          <label htmlFor="nombrePropietario" className="datos-creacion" >Nombre del propietario</label>
          <input type="text" id="nombrePropietario" className="mr-5 p-3 border-warning form-control letra" placeholder="" onChange={this.handleOnChange } name= "nombrePropietario" value={nombrePropietario} ></input>
        
          <label htmlFor="telefonoPropietario" className="datos-creacion" >Telefono del Propietario</label>
          <input type="text" id="telefonoPropietario" className="mr-5 p-3 border-warning form-control letra" cols="60" rows ="10"  placeholder="" onChange={this.handleOnChange } name= "telefonoPropietario" value={telefonoPropietario} ></input>
        
          <label htmlFor="mailPropietario"className="datos-creacion" >Mail del propietario</label>
          <input type="email" id="mailPropietario" className="mr-5 p-3 border-warning form-control letra" placeholder="" onChange={this.handleOnChange } name= "mailPropietario" value={mailPropietario} ></input>

          <label htmlFor="lat" className="datos-creacion">Latitud</label>
          <input type="text" id="lat" className="mr-5 p-3 border-warning form-control letra" placeholder="" onChange={this.handleOnChange } name= "lat" value={lat} ></input>

          <label htmlFor="long" className="datos-creacion">Longitud</label>
          <input type="text" id="long" className="mr-5 p-3 border-warning form-control letra" placeholder="" onChange={this.handleOnChange } name= "long" value={long} ></input>
          <div className="container text-center">
           <button type='submit' className=" btn btn-outline-warning btn-small mt-2 mb-2 col-6"><h3>Añadir</h3></button>
          </div>
        </form>
        {redirect ? <Redirect to = '/privatelist'/> : null}
      </div>
    )
  }
}

export default withAuth(CrearVivienda);

