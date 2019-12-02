import React, { Component } from 'react'
import viviendaBackendService from '../services/viv-backend-service'
import { NavLink } from 'react-router-dom';
import Card from '../components/Card'

class List extends Component {
  state = {
    viviendas: []
  }

  componentDidMount(){
    // console.log(viviendaBackendService)
    viviendaBackendService.getAllViviendas()
    .then(response => {
      // console.log(response.data.listOfViv)
      this.setState({
        viviendas: response.data.listOfViv
      })
    })
  }

  render() {
    if (this.state.viviendas.length === 0)
      return null;

    const {viviendas} = this.state;

    return (
      <div>
        <h3>LISTA DE VIVIENDAS</h3>
        <h4 className="cartera-viv">Viviendas en cartera: {viviendas.length}</h4>
          {viviendas.length > 0 ? viviendas.map((vivienda)=>{
            return ( 
              <div key={vivienda._id}>
              <NavLink key={vivienda._id} to={`/detail/${vivienda._id}`} activeClassName="logo-detalle">
                <div className="text-center">
                  <button className="btn btn-outline-dark btn-small mt-2 mb-2 "><h3>Ver Datos:</h3></button>
                </div>
            
              </NavLink>
                <Card 
                  mostrarUnaPhoto={true}
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

export default List 


