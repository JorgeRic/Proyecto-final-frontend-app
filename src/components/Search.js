
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
    // console.log(value,'ferg')
    this.setState({[name]: value});
  };

 render() {
   const{clase, tipo, ciudad, piscina, jardin, precio, numHab, numAseos,numGarajes, viviendas} = this.state
  //  console.log(this.state.viviendas.data)
   
   return (
     <div>
        <form onSubmit={this.handleFormSubmit} >
          <div className=" container text-center justify-content-center w-80">
            <div className="row text-center w-80">
            <select name="clase" className="border-warning form-control letra mt-3 mr-5 ml-5   " onChange={this.handleChange } value={clase} id="clase">
              <option value=''>Venta o alquiler</option>
              <option value='venta'>Venta</option>
              <option value='alquiler'>Alquiler</option>
            </select>

            <select name='tipo'  className="border-warning form-control letra mt-3 mr-5 ml-5 " onChange={this.handleChange } value={tipo} id="tipo">
              <option value=''>Tipo de vivienda</option>
              <option value='piso'>Piso</option>
              <option value='chalet'>Chalet</option>
              <option value='planta baja'>Planta baja</option>
              <option value='bungalow'>Bungalow</option>
              <option value='apartamento'>Apartamento</option>
              <option value='atico'>Atico</option>
            </select>

            <select name="ciudad" className="border-warning form-control letra mt-3 mr-5 ml-5" onChange={this.handleChange } value={ciudad} id="ciudad">
              <option value=''>Ciudad</option>
              <option value='Alicante'>Alicante</option>
              <option value='San Vicente'>San Vicente</option>
              <option value='San Juan'>San Juan</option>
              <option value='Campello'>Campello</option>
              <option value='El Altet'>El Altet</option>
              <option value='Agost'>Agost</option>
            </select>
            </div>
            <div className="row">
            <select name="precio" className="border-warning form-control letra mt-3 mr-5 ml-5" onChange={this.handleChange } value={precio} id="precio">
              <option value=''>Precio</option>
              <option value='100000'>hasta 100000</option>
              <option value='200000'>hasta 200000</option>
              <option value='300000'>hasta 300000</option>
              <option value='400000'>hasta 400000</option>
              <option value='500000'>hasta 500000</option>
              <option value='600000'>hasta 600000</option>
            </select>


            <select name="numHab" className="border-warning form-control letra mt-3 mr-5 ml-5" onChange={this.handleChange } value={numHab} id="numHab">
              <option value=''>Num Habitaciones</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>


            <select name="numAseos" className="border-warning form-control letra mt-3 mr-5 ml-5" onChange={this.handleChange } value={numAseos} id="numAseos">
              <option value=''>Num Baños</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
            </div>
            <div className="row">
            <select name="numGarajes" className="border-warning form-control letra mt-3 mr-5 ml-5" onChange={this.handleChange } value={numGarajes} id="numGarajes">
              <option value=''>Num Garajes</option>
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
            </select>
        

            <select name="jardin" className="border-warning form-control letra mt-3 mr-5 ml-5" onChange={this.handleChange } value={jardin} id="jardin">
              <option value=''>Jardín?</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </select>

            <select name="piscina" className="border-warning form-control letra mt-3 mr-5 ml-5" onChange={this.handleChange } value={piscina} id="piscina">
            <option value=''>Piscina?</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </select>
            </div>
          </div>
            <div className="text-center">
              <button className="btn btn-outline-warning mt-4 mb-2 col-8" type="submit" ><h3>Search</h3></button>
            </div>
       
         
      </form>

{viviendas.data ? viviendas.data.map((vivienda)=>{
  return ( 
    <div key={vivienda._id}>
    <div className="text-center">
      <NavLink key={vivienda._id} to={`/detail/${vivienda._id}`} activeClassName="logo-detalle">
      <button className="btn btn-outline-warning mt-2 mb-2 col-8"><h3>Datos Vivienda:</h3></button>
      </NavLink>
    </div>
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