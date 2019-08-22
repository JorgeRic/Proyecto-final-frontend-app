import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className ="main-home">
          <p className="nombre-password">username: Jorge Rico</p>
          <p className="nombre-password">paswword: jorge</p>
        <NavLink to='/search' activeClassName=""><button className="btn-home" ><h3>Buscar vivienda</h3></button></NavLink>
        <NavLink to='/list' activeClassName="">< button className="btn-home"><h3>Lista de viviendas</h3></button></NavLink>
                  
      </div>
    
     

    )
  }
}
