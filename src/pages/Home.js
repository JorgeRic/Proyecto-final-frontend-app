import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Map from '../components/MapBox'

export default class Home extends Component {
  render() {
    return (
      <div>
       
        <h3>Encuentra la vivienda perfecta:</h3>
        <NavLink to='/search' activeClassName=""><button>Buscar vivienda</button></NavLink>
        <NavLink to='/list' activeClassName=""><button>Vertodas las viviendas</button></NavLink>
     {/* <Map></Map> */}
        
    
     
      </div>
    )
  }
}
