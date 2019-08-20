import React, { Component } from 'react'
import withAuth from '../components/withAuth.js'

import { NavLink } from 'react-router-dom';
// import NavBar from '../components/NavBar.js';

class Private extends Component {
  render() {
    
    return (
      <div>
       
        <h1>Private Page</h1>
        <NavLink to='/signup' activeClassName=""><button>Crear nuevo usuario</button></NavLink>
        <NavLink to='/privatelist' activeClassName=""><button>Lista de viviendas</button></NavLink>
        <NavLink to='/crearvivienda' activeClassName="" ><button>Crear nueva vivienda</button></NavLink>
        <NavLink to='/searchreferencia' activeClassName="" ><button>Buscar por referencia</button></NavLink>
        <NavLink to='/modificarvivienda' activeClassName=""><button>Modificar vivienda</button></NavLink>
        <NavLink to='/eliminarvivienda' activeClassName=""><button>Eliminar vivienda</button></NavLink>
      
      
        
      
      </div>
    )
  }
}

export default  withAuth(Private);