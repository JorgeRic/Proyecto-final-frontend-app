
import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
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
  //  console.log(this.state.viviendas.data)
   
   return (
     <div className="main-login">
 
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

        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='referencia' className="datos-login"><h2>Referencia:</h2></label>
          <input id='referencia' className="border-warning form-control letra mt-3 mr-5 " type='number' name='referencia' value={referencia} onChange={this.handleChange}/>
          <div className="text-center">
            <button type ="submit" className="btn btn-outline-warning mt-2 mb-5 col-8"><h2>Search</h2></button>
          </div>
         
      </form>
     </div>
   )
 }
}



export default withAuth(SearchReferencia);




