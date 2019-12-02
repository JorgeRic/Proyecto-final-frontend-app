import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import { Redirect, Link } from 'react-router-dom'
import ViviendaForm from "./ViviendaForm"

class ModificarVivienda extends Component {
  state = {
    viviendas:[],
    redirect: false,
  }
   
  handleUpdate = (event)=> {
    const {name,value} = event.target;
    this.setState({
      [name]: value,
    })  
  }

  componentDidMount(){
    this.getFreshData()
  }

  getFreshData = () => {
    viviendaBackendService.getAllViviendas()
      .then(response => {
      this.setState({
      viviendas: response.data.listOfViv
      })
    })
  }

  onSuccessfulSubmit = () => {
    this.setState({
      redirect: true,
    })
  }

    render() {
      const { redirect, viviendas } = this.state
      
      return (
        <div>
          <div className="container text-center">
            <Link to='/searchreferencia' ><button className="btn btn-outline-dark mt-2 mb-2 col-8"><h4>Buscar Referencia</h4></button></Link>
          </div>
          <p>* Numero de viviendas en cartera: {viviendas.length}</p>

          {viviendas.length > 0 ? viviendas.map((vivienda)=>{
            return (
              <ViviendaForm
                key={vivienda._id}
                vivienda={vivienda}
                refreshData={this.getFreshData}
                handelSubmit={this.handelSubmit}
                onSuccessfulSubmit={this.onSuccessfulSubmit}
              />
            )
          }) : <p>loading....</p>}
          {redirect ? <Redirect to = '/privatelist'/> : null}
         
        </div>
      )
    }
  }

  export default withAuth(ModificarVivienda);









