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
    if (this.state.viviendas.length == 0)
      return null;

    const {viviendas} = this.state;

    return (
      <div>
        <h1>LISTA DE VIVIENDAS</h1>
        <h2 className="cartera-viv">Numero de viviendas en cartera: {viviendas.length}</h2>
          {viviendas.length > 0 ? viviendas.map((vivienda)=>{
            return ( 
              <div key={vivienda._id}>
              <NavLink key={vivienda._id} to={`/detail/${vivienda._id}`} activeClassName="logo-detalle">
              <button className="btn-select-detail"><h3>Ver vivienda en detalle:</h3><img src="https://images.emojiterra.com/google/android-pie/512px/1f447.png" width="40px" heigth="40px"></img></button>
            
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


