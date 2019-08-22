import React from 'react'
import Map from "./MapBox";

function Card(props) {
  const { mostrarUnaPhoto, vivienda } = props;
  return (
    <div className="card">
      <h3>{vivienda.titulo}</h3>
      <p>Vivienda en {vivienda.clase}</p>
      <div className="container-foto">
      {
        mostrarUnaPhoto 
          ? (<img className="foto" src={vivienda.imagenes[0]}/>)
          : vivienda.imagenes
            ? vivienda.imagenes.map((img) => (<img key={img} src={img}/>))
            : null
      }
        </div>
      <div className="texto-card">
      <p>Tipo de vivienda: {vivienda.tipo}</p>
      <h3>Precio: {vivienda.precio} euros</h3>
      <p>Ciudad: {vivienda.ciudad}</p>
      <p>Direccion de la vivienda: {vivienda.direccion}</p>
      <p>metros cuadrados: {vivienda.metros}</p>
      <p>Numero de habitaciones: {vivienda.numHab}</p>
      <p>Numero de baños: {vivienda.numAseos}</p>
      <p>Numero de garajes:{vivienda.numGarajes}</p>
      <p>Piscina: {vivienda.piscina}</p>
      <p>Jardin: {vivienda.jardin}</p>
      <p>Numero de referencia: {vivienda.referencia}</p>
      <p>Descripcion de vivienda: {vivienda.descripcion}</p>
      </div>

      { vivienda.lat && vivienda.long && <Map viviendaActual={vivienda}></Map> }
    </div>
  )
}
export default Card
