
import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import { NavLink  } from 'react-router-dom'
import PrivateCard from './PrivateCard'




class SearchReferencia extends Component {
 
    state = {
      titulo: '',
      tipo: null,
      imagenes: null,
      precio: null,
      numHab: null,
      NumAseos: null,
      referencia: null,
      clase: null,
      descripcion: null,
      metros: null,
      jardin: null,
      ciudad: null,
      viviendas: []
    };

  handleFormSubmit= (event) => {
    const {titulo, tipo, imagenes, precio, clase, numHab, numAseos, referencia, descripcion} = this.state
    event.preventDefault();
    viviendaBackendService.searchReferencia({
      titulo,
      imagenes,
      clase,
      tipo,
      precio,
      numHab,
      numAseos,
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
    this.setState({[name]: value});
  };

 render() {
   const{referencia,viviendas} = this.state
   console.log(this.state.viviendas.data)
   
   return (
     <div class="main-login">
 
       {viviendas.data ? viviendas.data.map((vivienda)=>{
            return (
              
              
              
          <PrivateCard   
            clase={vivienda.clase}
            titulo={vivienda.titulo} 
            imagenes={vivienda.imagenes} 
            tipo={vivienda.tipo} 
            city={vivienda.ciudad}
            direccion={vivienda.direccion}
            precio={vivienda.precio} 
            metros={vivienda.metros}
            numHab={vivienda.numHab} 
            numAseos={vivienda.numAseos} 
            referencia={vivienda.referencia} 
            numGarajes={vivienda.numGarajes}
            piscina={vivienda.piscina}
            descripcion={vivienda.descripcion}
            nombrePropietario={vivienda.nombrePropietario}
            telefonoPropietario={vivienda.telefonoPropietario}
            mailPropietario={vivienda.mailPropietario}
            onclick={this.handleClick}
          />

          
          )
        }) : <p></p>
        }
          {/* <NavLink activeClassName="" key={vivienda._id} to={`/detail/${vivienda._id}`}>
          </NavLink > */}
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='referencia' className="datos-login"><h2>Referencia:</h2></label>
          <input id='referencia' className="cuadro-login" type='number' name='referencia' value={referencia} onChange={this.handleChange}/>

          <button type ="submit" className="btn-select-search"><h2>Search</h2></button>
         
      </form>
     </div>
   )
 }
}



export default withAuth(SearchReferencia);




