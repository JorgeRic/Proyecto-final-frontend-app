
import React, { Component } from 'react'
import viviendaBackendService from '../services/viv-backend-service'
import { NavLink } from 'react-router-dom';
import withAuth from '../components/withAuth.js'
import Card from '../components/Card'

class ViviendaDetail extends Component {
  state = {
    vivienda: []
  }

componentDidMount(){
  const {id} = this.props.match.params;
  viviendaBackendService.getOneVivienda(id)
    .then((response)=> {
    this.setState({
      vivienda: response.data
    })
  })
    .catch((error) => {
    console.log(error)
    })
}

goToPreviousPage = () => {
  this.props.history.goBack()
}

render() {
    if(!this.state.vivienda || this.state.vivienda.length === 0)
    return null;

  const {vivienda } = this.state
    return (
      <div className = ''>
        <Card vivienda={vivienda} />
          <h3 className="recibir-inform">Estoy interesado en recibir más información de esta vivienda: </h3>
        <div className="container btn-group-vertical">
          <div className="text-center">
          <NavLink to='/recibirinformacion'><button className="btn btn-outline-warning mt-2 mb-2 col-8"><h3>Recibir información</h3></button></NavLink>
          <button className="btn btn-outline-dark mt-2 mb-2 col-8" onClick={this.goToPreviousPage}><h4>Volver a la lista</h4></button>
          </div>
        </div>
      </div>
    )
  }
}
export default  withAuth(ViviendaDetail);