import React, { Component } from 'react'
import viviendaBackendService from '../services/viv-backend-service'
import { NavLink } from 'react-router-dom';
import Card from '../components/Card'

class List extends Component {
  state = {
    viviendas: []
  }

componentDidMount(){
  console.log(viviendaBackendService)
  viviendaBackendService.getAllViviendas()
  .then(response => {
    console.log(response.data.listOfViv)
    this.setState({
      viviendas: response.data.listOfViv

    })
  })
}



  render() {
    const {viviendas} = this.state
    console.log(viviendas)
    return (
      <div>
        <h1>LISTA DE VIVIENDAS</h1>
        <h2 className="cartera-viv">Numero de viviendas en cartera: {viviendas.length}</h2>
          {viviendas.length > 0 ? viviendas.map((vivienda)=>{
            return ( 
              <div>
              <NavLink key={vivienda._id} to={`/detail/${vivienda._id}`} activeClassName="logo-detalle">
              <button className="btn-select-detail"><h3>Ver vivienda en detalle:</h3><img src="https://images.emojiterra.com/google/android-pie/512px/1f447.png" width="40px" heigth="40px"></img></button>
            
              </NavLink>
                <Card 
                  mostrarUnaPhoto={true}
                  clase={vivienda.clase} 
                  titulo={vivienda.titulo} 
                  imagenes={vivienda.imagenes} 
                  tipo={vivienda.tipo} 
                  precio={vivienda.precio} 
                  metros={vivienda.metros}
                  ciudad={vivienda.ciudad}
                  direccion={vivienda.direccion}
                  numHab={vivienda.numHab} 
                  numAseos={vivienda.numAseos} 
                  numGarajes={vivienda.numGarajes}
                  piscina={vivienda.piscina}
                  jardin={vivienda.jardin}
                  referencia={vivienda.referencia} 
                  descripcion={vivienda.descripcion}

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

export default List 


