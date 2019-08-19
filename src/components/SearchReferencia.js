
import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import { Link } from 'react-router-dom'
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
     <div>
       <h1>Buscar por referencia:</h1>
       
       {viviendas.data ? viviendas.data.map((vivienda)=>{
            return (
              
              
              <Link key={vivienda._id} to={`/detail/${vivienda._id}`}>

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

          </Link>
          
          )
        }) : <p></p>
        }
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='referencia'>Referencia:</label>
          <input id='referencia' type='number' name='referencia' value={referencia} onChange={this.handleChange}/>

          <button type ="submit">Search</button>
         
      </form>
     </div>
   )
 }
}



export default withAuth(SearchReferencia);




