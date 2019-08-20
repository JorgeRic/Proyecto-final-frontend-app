
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
       <h1></h1>

        <form onSubmit={this.handleFormSubmit}>
          

          <label htmlFor="clase">Venta o alquiler</label>
          <select name="clase" onChange={this.handleChange } value={clase} id="clase">
            <option value=''>Elegir</option>
            <option value='venta'>Venta</option>
            <option value='alquiler'>Alquiler</option>
          </select>

          <label htmlFor="tipo">Tipo de vivienda</label>
          <select name='tipo' onChange={this.handleChange } value={tipo} id="tipo">
            <option value=''>Elegir</option>
            <option value='piso'>Piso</option>
            <option value='chalet'>Chalet</option>
            <option value='planta baja'>Planta baja</option>
            <option value='bungalow'>Bungalow</option>
            <option value='apartamento'>Apartamento</option>
            <option value='atico'>Atico</option>
          </select>

          <label htmlFor="ciudad">Ciudad</label>
          <select name="ciudad" onChange={this.handleChange } value={ciudad} id="ciudad">
            <option value=''>Elegir</option>
            <option value='Alicante'>Alicante</option>
            <option value='San Vicente'>San Vicente</option>
            <option value='San Juan'>San Juan</option>
            <option value='Campello'>Campello</option>
            <option value='El Altet'>El Altet</option>
            <option value='Agost'>Agost</option>
          </select>
 
          <label htmlFor="precio">Precio</label>
          <select name="precio" onChange={this.handleChange } value={precio} id="precio">
            <option value=''>Elegir</option>
            <option value='100000'>hasta 100000</option>
            <option value='200000'>hasta 200000</option>
          </select>


          <label htmlFor="numHab">Numero de habitaciones</label>
          <select name="numHab" onChange={this.handleChange } value={numHab} id="numHab">
            <option value=''>Elegir</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>

          <label htmlFor="numAseos">Numero de aseos</label>
          <select name="numAseos" onChange={this.handleChange } value={numAseos} id="numAseos">
            <option value=''>Elegir</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>

          <label htmlFor="numGarajes">Numero de habitaciones</label>
          <select name="numGarajes" onChange={this.handleChange } value={numGarajes} id="numGarajes">
            <option value=''>Elegir</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </select>

          <label htmlFor="jardin">Jardin</label>
          <select name="jardin" onChange={this.handleChange } value={jardin} id="jardin">
            <option value=''>Elegir</option>
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </select>

          <label htmlFor="piscina">Piscina</label>
          <select name="piscina" onChange={this.handleChange } value={piscina} id="piscina">
           <option value=''>Elegir</option>
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </select>


          <button type ="submit">Search</button>
    
         
      </form>

{viviendas.data ? viviendas.data.map((vivienda)=>{
  return ( <NavLink activeClassName="" key={vivienda._id} to={`/detail/${vivienda._id}`}>

  <Card   
    clase={vivienda.clase}
    titulo={vivienda.titulo} 
    imagenes={vivienda.imagenes} 
    tipo={vivienda.tipo} 
    ciudad={vivienda.ciudad}
    direccion={vivienda.direccion}
    precio={vivienda.precio} 
    metros={vivienda.metros}
    numHab={vivienda.numHab} 
    jardin={vivienda.jardin}
    numAseos={vivienda.numAseos} 
    referencia={vivienda.referencia} 
    numGarajes={vivienda.numGarajes}
    piscina={vivienda.piscina}
    descripcion={vivienda.descripcion}
  
    onclick={this.handleClick}
    />

</NavLink>

)
}) : <p></p>
}

     </div>
   )
 }
}



export default withAuth(SearchVivienda);