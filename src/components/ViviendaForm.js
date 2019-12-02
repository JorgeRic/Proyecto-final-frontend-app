import React, { Component } from 'react'
import viviendaBackendService from '../services/viv-backend-service'


export default class ViviendaForm extends Component {
  // state = this.props.vivienda;
  state = {vivienda: this.props.vivienda};
   
  handleUpdate = (event)=> {
    const {name,value} = event.target;
    const vivienda = this.state.vivienda;

    vivienda[name] = value;

    this.setState({
      vivienda: vivienda,
    })
  }

  handelSubmit= (event) => {
    const {vivienda} = this.state
    event.preventDefault();

    viviendaBackendService.updateOneVivienda( vivienda._id, vivienda)
    .then(()=> {
      this.props.refreshData();
      this.props.onSuccessfulSubmit();
    })
   }

  render() {

    const vivienda = this.state.vivienda;

    return (
      <div>
        <form onSubmit ={this.handelSubmit}>
                
            <h4 className="cartera-viv pl-4">Numero Referencia: {vivienda.referencia}</h4> 

                <label htmlFor="titulo" className="datos-creacion">Titulo</label>
                 <input type="text" 
                 id="titulo"
                 className="mr-5 p-3 border-warning form-control letra"
                 placeholder="modificar datos ..." 
                 name="titulo"
                 defaultValue={vivienda.titulo}
                 onChange={ this.handleUpdate }
                 />

                <label htmlFor="clase" className="datos-creacion">Clase</label>
                <select name='clase' className=" border-warning form-control letra" onChange={this.handleUpdate } defaultValue={vivienda.clase} id="clase">
                  <option value=''>modificar datos ...</option>
                  <option value='venta'>Venta</option>
                  <option value='alquiler'>Alquiler</option>
                 </select> 
            
                <label htmlFor="type" className="datos-creacion">Tipo de vivienda</label>
                <select name='tipo'className="border-warning form-control letra" onChange={this.handleUpdate } defaultValue={vivienda.tipo} id="tipo">
                  <option value=''>modificar datos ...</option>
                  <option value='piso'>Piso</option>
                  <option value='chalet'>Chalet</option>
                  <option value='planta baja'>Planta baja</option>
                  <option value='bungalow'>Bungalow</option>
                  <option value='apartamento'>Apartamento</option>
                  <option value='atico'>Atico</option>
                </select>

                <label htmlFor="ciudad" className="datos-creacion">Ciudad</label>
                <select name="ciudad" className="border-warning form-control letra" onChange={this.handleUpdate } defaultValue={vivienda.ciudad} id="ciudad">
                  <option value=''>modificar datos ...</option>
                  <option value='Alicante'>Alicante</option>
                  <option value='San Vicente'>San Vicente</option>
                  <option value='San Juan'>San Juan</option>
                  <option value='Campello'>Campello</option>
                  <option value='El Altet'>El Altet</option>
                  <option value='Agost'>Agost</option>
                </select>

                <label htmlFor="direccion" className="datos-creacion">Direccion de la vivienda</label>
                <input type="text" 
                id="direccion" 
                className="mr-5 p-3 border-warning form-control letra"
                defaultValue={vivienda.direccion}
                placeholder="modificar datos ..." 
                onChange={this.handleUpdate } 
                name= "direccion" 
                />

                <label htmlFor="precio" className="datos-creacion">Precio actual</label>
                <input 
                  type="number"
                  id="precio"
                  className="mr-5 p-3 border-warning form-control letra"
                  defaultValue={vivienda.precio}
                  placeholder="modificar datos ..." 
                  name= "precio"
                  onChange={this.handleUpdate}
                />
                
                <label htmlFor="metros" className="datos-creacion">Metros de la vivienda</label>
                <input type="number" 
                id="metros" 
                className="mr-5 p-3 border-warning form-control letra"
                defaultValue={vivienda.metros}
                onChange={this.handleUpdate } 
                name= "metros" 
                placeholder="modificar datos ..." 
                />

                <label htmlFor="numHab" className="datos-creacion">Habitaciones</label>
                <input type="number" 
                id="numHab" 
                className="mr-5 p-3 border-warning form-control letra"
                defaultValue={vivienda.numHab}
                onChange={this.handleUpdate } 
                name= "numHab" 
                placeholder="modificar datos ..." 
                />

                <label htmlFor="numAseos" className="datos-creacion">Baños</label>
                <input type="number" 
                id="numAseos" 
                className="mr-5 p-3 border-warning form-control letra"
                defaultValue={vivienda.numAseos}
                onChange={this.handleUpdate } 
                name= "numAseos" 
                placeholder="modificar datos ..."  
                />

                <label htmlFor="numGarajes" className="datos-creacion">Numero de garajes</label>               
                <input type="number" 
                id="numGarajes" 
                className="mr-5 p-3 border-warning form-control letra"
                defaultValue={vivienda.numGarajes}
                placeholder="modificar datos ..." 
                onChange={this.handleUpdate } 
                name= "numGarajes" 
                />

                <label htmlFor="jardin" className="datos-creacion">Jardin</label>
                <select name="jardin" className="border-warning form-control letra" onChange={this.handleUpdate } defaultValue={vivienda.jardin}  id="jardin">
                  <option value=''>modificar datos ...</option>
                  <option value='Si'>Si</option>
                  <option value='No'>No</option>
                </select>

                <label htmlFor="piscina" className="datos-creacion">Piscina</label>
                <select name="piscina" className="border-warning form-control letra" onChange={this.handleUpdate } defaultValue={vivienda.piscina} id="piscina">
                  <option value=''>modificar datos ...</option>  
                  <option value='Si'>Si</option>
                  <option value='No'>No</option>
                </select>

                <label htmlFor="descripcion" className="datos-creacion">Descripcion de la vivienda</label>
                <textarea type="text" 
                id="descripcion" 
                className="mr-5 p-3 border-warning form-control letra"
                cols="100" rows ="5"
                defaultValue={vivienda.descripcion}
                onChange={this.handleUpdate } 
                name= "descripcion" 
                placeholder="modificar datos ..." 
                />
                
                  <h4>Datos de contacto:</h4>

               <label htmlFor="nombrePropietario" className="datos-creacion">Nombre del propietario</label>
               <input type="text" 
               id="nombrePropietario" 
               className="mr-5 p-3 border-warning form-control letra"
               placeholder="modificar datos ..." 
               defaultValue={vivienda.nombrePropietario}
               onChange={this.handleUpdate } 
               name= "nombrePropietario" 
               ></input>
        
               <label htmlFor="telefonoPropietario" className="datos-creacion">TelefonoPropietario</label>
               <input type="text" 
               id="telefonoPropietario" 
               className="mr-5 p-3 border-warning form-control letra"
               placeholder="modificar datos ..." 
               defaultValue={vivienda.telefonoPropietario}
               onChange={this.handleUpdate } 
               name= "telefonoPropietario" 
               ></input>
        
               <label htmlFor="mailPropietario" className="datos-creacion">Mail del propietario</label>
               <input type="email" 
               id="mailPropietario" 
               className="mr-5 p-3 border-warning form-control letra"
               placeholder="modificar datos ..." 
               defaultValue={vivienda.mailPropietario}
               onChange={this.handleUpdate } 
               name= "mailPropietario" 
               ></input>

              <label htmlFor="lat" className="datos-creacion">Latitud</label>
              <input type="text" 
              id="lat" className="mr-5 p-3 border-warning form-control letra" 
              placeholder="" 
              onChange={this.handleUpdate } 
              name= "lat" 
              value={vivienda.lat} ></input>

              <label htmlFor="long" className="datos-creacion">Longitud</label>
             <input type="text" 
             id="long" className="mr-5 p-3 border-warning form-control letra" 
             placeholder="" 
             onChange={this.handleUpdate } 
             name= "long" 
             value={vivienda.long} ></input>
              <div className="text-center">
                <button type='submit' className="btn btn-outline-danger mt-2 mb-4 col-6"><h3>Modificar</h3></button>
              </div>
               {/* <Redirect to = '/privatelist'/> */}
              </form>
      </div>
    )
  }
}

