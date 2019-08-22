
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
          <h1 className="centrar-textos">ELIMINAR VIVIENDA</h1>
          <Link to='/searchreferencia'><button className="btn-select-search"><h2>Buscar por numero de referencia</h2></button></Link>
          {viviendas.length > 0 ? viviendas.map((vivienda) => {
            return (
              <article className="cuadro-delete" key = {vivienda._id}>
               <div className="container-delete">
                <h1>Numero de referencia: {vivienda.referencia}</h1>
                <p>Titulo: {vivienda.titulo}</p>
                <p>Vivienda en: {vivienda.clase}</p>
                <p>Tipo de vivienda: {vivienda.tipo}</p>
                <p>Precio: {vivienda.precio}</p>
                <p>Ciudad: {vivienda.ciudad}</p>
               </div>

                <button className="btn-select-delete" onClick = {() => {
                this.handleDeleteClick(vivienda._id)
                 }}><h2>Eliminar referencia: {vivienda.referencia}</h2></button>
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
