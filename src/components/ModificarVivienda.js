
import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import {Redirect} from 'react-router-dom'
import ViviendaForm from "./ViviendaForm"
import { Link } from 'react-router-dom';


class ModificarVivienda extends Component {
  state = {
    viviendas:[]
  }

  handelSubmit= (event) => {
    const {titulo, tipo, imagenes, precio, numHab, numAseos, referencia, descripcion, ciudad, direccion, metros, piscina, jardin,numGarajes, nombrePropietario, mailPropietario, telefonoPropietario} = this.state
    event.preventDefault();
    viviendaBackendService.updateOneVivienda({
    titulo,
    imagenes,
    tipo,
    ciudad,
    direccion,
    metros,
    precio,
    piscina,
    jardin,
    numHab,
    numAseos,
    numGarajes,
    referencia,
    descripcion,
    nombrePropietario,
    telefonoPropietario,
    mailPropietario

    })
    .then(()=>{})
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

  
    render() {
      const {titulo, imagenes, tipo, precio, numHab, numAseos, redirect, referencia, descripcion,viviendas} = this.state
      
      return (
        <div>
          <h1>Modificar vivienda</h1>
          <p>Numero de viviendas en cartera: {viviendas.length}</p>
          {/* <Link to='/searchreferencia'><button>Buscar por referencia</button></Link> */}
          {viviendas.length > 0 ? viviendas.map((vivienda)=>{
            return (
              <ViviendaForm
               key={vivienda._id}
               vivienda={vivienda}
               refreshData={this.getFreshData}
               handelSubmit={this.handelSubmit}
              />
          )
        }) : <p>loading....</p>
      }
          {redirect ? <Redirect to = '/privatelist'/> : null}
        </div>
      )
    }
  }

  export default withAuth(ModificarVivienda);









