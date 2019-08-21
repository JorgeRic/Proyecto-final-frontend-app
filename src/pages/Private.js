import React, { Component } from 'react'
import withAuth from '../components/withAuth.js'

import { NavLink } from 'react-router-dom';
// import NavBar from '../components/NavBar.js';

class Private extends Component {
  render() {
    
    return (
      <div className="main-private">
       
        <NavLink to='/signup' activeClassName=""><button className="btn-private" ><h3>Crear nuevo usuario</h3></button></NavLink>
        <NavLink to='/privatelist' activeClassName=""><button className="btn-private" ><h3>Lista de viviendas</h3></button></NavLink>
        <NavLink to='/crearvivienda' activeClassName="" ><button className="btn-private" ><h3>Crear nueva vivienda</h3></button></NavLink>
        <NavLink to='/searchreferencia' activeClassName="" ><button className="btn-private" ><h3>Buscar por referencia</h3></button></NavLink>
        <NavLink to='/modificarvivienda' activeClassName=""><button className="btn-private" ><h3>Modificar vivienda</h3></button></NavLink>
        <NavLink to='/eliminarvivienda' activeClassName=""><button className="btn-private" ><h3>Eliminar vivienda</h3></button></NavLink>
      
      
      </div>
    )
  }
}

export default  withAuth(Private);