import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to='/list'>Lista de viviendas</Link>
        <h3>Buscar por:</h3>
     
        
    
     
      </div>
    )
  }
}
