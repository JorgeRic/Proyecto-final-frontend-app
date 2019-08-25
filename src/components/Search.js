
import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import { NavLink  } from 'react-router-dom'
import Card from './Card'




class SearchVivienda extends Component {
  state = {
    titulo: '',
    tipo: "",
    imagenes: null,
    precio: 0,
    numHab: "",
    numAseos: "",
    referencia: null,
    clase: "",
    descripcion: "",
    metros: "",
    jardin: "",
    numGarajes: "",
    ciudad: "",
    viviendas: []
  };

  handleFormSubmit= (event) => {
    
    const {titulo, tipo, imagenes, piscina, numGarajes, jardin, precio, ciudad, clase, numHab, numAseos, referencia, descripcion} = this.state
    event.preventDefault();
    viviendaBackendService.searchVivienda({
      titulo,
      imagenes,
      clase,
      tipo,
      precio,
      ciudad,
      piscina,
      jardin,
      numHab,
      numAseos,
      numGarajes,
      referencia,
      descripcion,
      })
      .then((viviendas) => {
        this.setState({
          viviendas,
        })
      })
      .catch (error => {console.log(error)
    })
  };

  handleChange = (event) => {  
    const {name, value} = event.target;
    console.log(value,'ferg')
    this.setState({[name]: value});
  };

 render() {
   const{referencia,clase, tipo, ciudad, piscina, jardin, precio, metros, numHab, numAseos,numGarajes, viviendas} = this.state
   console.log(this.state.viviendas.data)
   
   return (
     <div>

        <form onSubmit={this.handleFormSubmit}>
          
          <select name="clase" className="select-search" onChange={this.handleChange } value={clase} id="clase">
            <option value=''>Venta o alquiler</option>
            <option value='venta'>Venta</option>
            <option value='alquiler'>Alquiler</option>
          </select>

          <select name='tipo'  className="select-search" onChange={this.handleChange } value={tipo} id="tipo">
            <option value=''>Tipo de vivienda</option>
            <option value='piso'>Piso</option>
            <option value='chalet'>Chalet</option>
            <option value='planta baja'>Planta baja</option>
            <option value='bungalow'>Bungalow</option>
            <option value='apartamento'>Apartamento</option>
            <option value='atico'>Atico</option>
          </select>

          <select name="ciudad" className="select-search" onChange={this.handleChange } value={ciudad} id="ciudad">
            <option value=''>Ciudad</option>
            <option value='Alicante'>Alicante</option>
            <option value='San Vicente'>San Vicente</option>
            <option value='San Juan'>San Juan</option>
            <option value='Campello'>Campello</option>
            <option value='El Altet'>El Altet</option>
            <option value='Agost'>Agost</option>
          </select>
 
          <select name="precio" className="select-search" onChange={this.handleChange } value={precio} id="precio">
            <option value=''>Precio</option>
            <option value='100000'>hasta 100000</option>
            <option value='200000'>hasta 200000</option>
            <option value='300000'>hasta 300000</option>
            <option value='400000'>hasta 400000</option>
            <option value='500000'>hasta 500000</option>
            <option value='600000'>hasta 600000</option>
          </select>


          <select name="numHab" className="select-search" onChange={this.handleChange } value={numHab} id="numHab">
            <option value=''>Numero habitaciones</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>


          <select name="numAseos" className="select-search" onChange={this.handleChange } value={numAseos} id="numAseos">
            <option value=''>Numero de baños</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>

          <select name="numGarajes" className="select-search" onChange={this.handleChange } value={numGarajes} id="numGarajes">
            <option value=''>Numero garajes</option>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </select>
       

          <select name="jardin" className="select-search" onChange={this.handleChange } value={jardin} id="jardin">
            <option value=''>Jardín?</option>
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </select>

          <select name="piscina" className="select-search" onChange={this.handleChange } value={piscina} id="piscina">
           <option value=''>Piscina?</option>
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </select>

          <button className="btn-select-search" type="submit" ><h2>Search</h2></button>
       
         
      </form>

{viviendas.data ? viviendas.data.map((vivienda)=>{
  return ( 
    <div key={vivienda._id}>
  <NavLink key={vivienda._id} to={`/detail/${vivienda._id}`} activeClassName="logo-detalle">
  <button className="btn-select-detail"><h3>Ver vivienda en detalle:</h3></button>
  </NavLink>
  <Card   
    vivienda={vivienda}
    onclick={this.handleClick}
    />


     </div>
)
}) : <p></p>
}
</div>
   )
 }
}



export default withAuth(SearchVivienda);