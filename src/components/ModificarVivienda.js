import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import {Redirect} from 'react-router-dom'
import ViviendaForm from "./ViviendaForm"
import { Link } from 'react-router-dom';


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
    console.log(this.state);
    
  }


  componentDidMount(){
    this.getFreshData()
  }

  getFreshData = () => {
    viviendaBackendService.getAllViviendas()
      .then(response => {
        console.log("AQUI", response.data.listOfViv)
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
      console.log(redirect, this.state.redirect);
      
      return (
        <div>
        
          <Link to='/searchreferencia' ><button className="btn-select-search"><h2>Buscar por numero de referencia</h2></button></Link>
          <p>Numero de viviendas en cartera: {viviendas.length}</p>

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









