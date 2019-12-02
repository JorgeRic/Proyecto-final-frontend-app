import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className ="">
          <p className="nombre-password">username: Jorge Rico</p>
          <p className="nombre-password">paswword: jorge</p>
        <div className=' container'>
          <div className="col btn-vertical">
            <NavLink to='/search' activeClassName=""><button className="p-3 btn btn-outline-warning btn-small mt-2 mb-5 col-12" ><h3>Buscar Vivienda</h3></button></NavLink>
            <NavLink to='/list' activeClassName="">< button className=" p-3 btn btn-outline-warning btn-small mt-2 mb-5 col-12"><h3>Lista De Viviendas</h3></button></NavLink>
          </div>
        </div>          
      </div>
    
     

    )
  }
}
