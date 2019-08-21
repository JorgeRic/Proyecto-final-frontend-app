import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Map from '../components/MapBox'

export default class Home extends Component {
  render() {
    return (
      <div className ="main-home">
     
        <NavLink to='/search' activeClassName=""><button className="btn-home" ><h3>Buscar vivienda</h3></button></NavLink>
        <NavLink to='/list' activeClassName="">< button className="btn-home"><h3>Lista de viviendas</h3></button></NavLink>
                  {/* <Map></Map> */}
      </div>
    
     

    )
  }
}
