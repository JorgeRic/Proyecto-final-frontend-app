
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
  console.log(this.props.match.params)
  viviendaBackendService.getOneVivienda(id).then((response)=> {
    console.log(response)
    this.setState({
      vivienda: response.data
    })
  }).catch((error) => {
    console.log(error)
  })
}

goToPreviousPage = () => {
  this.props.history.goBack()
  //Si hacemos goBack().goBack() iriamos dos pantallas atras
}

render() {
    if(!this.state.vivienda || this.state.vivienda.length == 0)
      return null;

  console.log('Hola', this.state.vivienda)
  const {vivienda } = this.state
    return (
      <div className = 'parte-informacion'>
        <Card vivienda={vivienda} />
        <h3 className="recibir-inform">Estoy interesado en recibir más información de esta vivienda: </h3>
        <NavLink to='/recibirinformacion' activeClassName=""><button className="btn-select-detail"><h3>Recibir informacion</h3></button></NavLink>
        <button className="btn-select-detail" onClick={this.goToPreviousPage}><h3>Volver a la lista</h3></button>
        {/* { vivienda ? <img src = {image} alt={title} className='image-details'/>: <p>Loading....</p>} */}
      </div>
    )
  }
}
export default  withAuth(ViviendaDetail);