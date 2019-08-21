import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import PrivateCard from '../components/PrivateCard'

class PrivateList extends Component {

  state = {
    viviendas: []
  }

  componentDidMount(){
 
    viviendaBackendService.getAllViviendas()
    .then(response => {
      
      this.setState({
        viviendas: response.data.listOfViv
  
      })
    })
  }

    render() {
      const {viviendas,} = this.state
      console.log(viviendas )
      return (
        <div>
          <h1>LISTA DE VIVIENDAS</h1>
          <h2 className="cartera-viv">Numero de viviendas en cartera: {viviendas.length}</h2>
          <NavLink to='/searchreferencia' activeClassName=""><button className="btn-select-detail"><h3>Buscar por numero de referencia</h3></button></NavLink>
            {viviendas.length > 0 ? viviendas.map((vivienda)=>{
            return ( 
              <div>
              <NavLink key={vivienda._id} to={`/detail/${vivienda._id}`} activeClassName="logo-detalle">
              <button className="btn-select-detail"><h3>Ver vivienda en detalle:</h3><img src="https://images.emojiterra.com/google/android-pie/512px/1f447.png" width="40px" heigth="40px"></img></button>
              </NavLink>
              <PrivateCard   
                mostrarUnaPhoto={true}
                titulo={vivienda.titulo} 
                imagenes={vivienda.imagenes} 
                clase={vivienda.clase}
                tipo={vivienda.tipo} 
                ciudad={vivienda.ciudad}
                direccion={vivienda.direccion}
                precio={vivienda.precio} 
                metros={vivienda.metros}
                numHab={vivienda.numHab} 
                numAseos={vivienda.numAseos} 
                referencia={vivienda.referencia} 
                numGarajes={vivienda.numGarajes}
                piscina={vivienda.piscina}
                jardin={vivienda.jardin}
                descripcion={vivienda.descripcion}
                nombrePropietario={vivienda.nombrePropietario}
                telefonoPropietario={vivienda.telefonoPropietario}
                mailPropietario={vivienda.mailPropietario}
                onclick={this.handleClick}
                />

            </div>
            )
          })  : <p></p>
          }
           
          
        </div>
      )
    }
  }
 
  export default withAuth(PrivateList);
