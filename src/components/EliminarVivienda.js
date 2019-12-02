
import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import {Redirect} from 'react-router-dom'
import { Link } from 'react-router-dom';

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
          <h3 className="centrar-textos">ELIMINAR VIVIENDA</h3>
          <div className="text-center">
            <Link to='/searchreferencia'><button className="btn btn-outline-dark mt-2 mb-2 col-8"><h5>Buscar Referencia</h5></button></Link>
          </div>
          {viviendas.length > 0 ? viviendas.map((vivienda) => {
            return (
              <article className="cuadro-delete" key = {vivienda._id}>
               <div className="container-delete">
                <h3>Numero Referencia: {vivienda.referencia}</h3>
                <p>Titulo: {vivienda.titulo}</p>
                <p>Vivienda en: {vivienda.clase}</p>
                <p>Tipo de vivienda: {vivienda.tipo}</p>
                <p>Precio: {vivienda.precio}</p>
                <p>Ciudad: {vivienda.ciudad}</p>
               </div>
                <div className="text-center bg-warning">
                  <button className="btn btn-outline-danger btn-small mt-2 mb-2 col-8" onClick = {() => {
                  this.handleDeleteClick(vivienda._id)
                  }}><h4>Eliminar</h4></button>
                </div>
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
