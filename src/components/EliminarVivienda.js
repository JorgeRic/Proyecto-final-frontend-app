
import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import {Redirect} from 'react-router-dom'

class EliminarVivienda extends Component {
  state = {
    redirect: false,
    viviendas: []
  }


  handleDeleteClick = (id) => {
    viviendaBackendService.deleteOneVivienda(id)
    .then(()=>{
     
      const filterViviendas = this.state.viviendas.filter((singleVivienda) => {
        return singleVivienda._id !== id
      })
      this.setState({
        viviendas: filterViviendas,
        redirect: true,
      })
      })
   }
   
   componentDidMount(){
     const viviendas = viviendaBackendService.getAllViviendas()
      .then((response)=>{
        this.setState({
          viviendas: response.data.listOfViv
        })
      })
   }
   


  render() {
    const {viviendas, redirect} = this.state
 
    return (
     
        <div>
          <h1>Eliminar vivienda</h1>
          {viviendas.length > 0 ? viviendas.map((vivienda) => {
            return (
              <article key = {vivienda._id}>
              <h3>Numero de referencia: {vivienda.referencia}</h3>
              <p>Titulo: {vivienda.titulo}</p>
              <p>Vivienda en: {vivienda.clase}</p>
              <p>Tipo de vivienda: {vivienda.tipo}</p>
              <p>Precio: {vivienda.precio}</p>
              <p>Ciudad: {vivienda.ciudad}</p>
                <button onClick = {() => {
                this.handleDeleteClick(vivienda._id)
                 }}>Eliminar</button>
              </article>
            )
          }) : <p>Loading ...</p>
        }
        {redirect ? <Redirect to = '/privatelist'/> : null}
        
      </div>
    
    )
  }
}


export default withAuth(EliminarVivienda);
