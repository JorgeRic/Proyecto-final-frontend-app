import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <h1>Lista de viviendas</h1>
          <Link to='/searchreferencia'><button>Buscar por numero de referencia</button></Link>
            {viviendas.length > 0 ? viviendas.map((vivienda)=>{
            return ( 
            <Link key={vivienda._id} to={`/detail/${vivienda._id}`}>
                
              <p>Numero de viviendas en cartera: {viviendas.length}</p>
              <PrivateCard   
                titulo={vivienda.titulo} 
                clase={vivienda.clase}
                imagenes={vivienda.imagenes}
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

            </Link>
            
            )
          }) : <p>loading....</p>
          }
           
          
        </div>
      )
    }
  }
 
  export default withAuth(PrivateList);
