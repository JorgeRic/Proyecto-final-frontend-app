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
      // console.log(viviendas )
      return (
        <div>
          <h1>LISTA DE VIVIENDAS</h1>
          <h2 className="cartera-viv">Numero de viviendas en cartera: {viviendas.length}</h2>
          <div className="container text-center">
            <NavLink to='/searchreferencia' activeClassName=""><button className="btn btn-outline-dark mt-2 mb-2 col-8"><h4>Buscar Referencia</h4></button></NavLink>
          </div>
            {viviendas.length > 0 ? viviendas.map((vivienda)=>{
            return ( 
              <div key={vivienda._id}>
              <div className="container text-center">
                <NavLink key={vivienda._id} to={`/detail/${vivienda._id}`} activeClassName="logo-detalle">
                <button className="btn btn-outline-warning mt-2 mb-2 col-6"><h5>Datos Vivienda:</h5></button>
                </NavLink>
              </div>
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
