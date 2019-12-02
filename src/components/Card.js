import React from 'react'
import Map from "./MapBox";

function Card(props) {
  const { mostrarUnaPhoto, vivienda } = props;
  return (
    <div className="card">
      <div className="card-header text-center bg-warning">
        <h4>{vivienda.titulo}</h4>
      </div>
      <div className="card-body">
        <div className="bg-info p-2 mb-1">
          <h5>Vivienda en {vivienda.clase}</h5>
        </div>
        <div className="container-fluid">
        {
          mostrarUnaPhoto 
            ? (<img className="img-fluid w-80" src={vivienda.imagenes[0]}/>)
            : vivienda.imagenes
              ? vivienda.imagenes.map((img) => (<img className="img-fluid w-80 mt-2" key={img} src={img}/>))
              : null
        }
          </div>
        <div className="texto-card">
        <p>Tipo vivienda: {vivienda.tipo}</p>
        <h5>Precio: {vivienda.precio} euros</h5>
        <p>Ciudad: {vivienda.ciudad}</p>
        <p>Direccion la vivienda: {vivienda.direccion}</p>
        <p>metros cuadrados: {vivienda.metros}</p>
        <p>Nº habitaciones: {vivienda.numHab}</p>
        <p>Nº baños: {vivienda.numAseos}</p>
        <p>Nº garajes:{vivienda.numGarajes}</p>
        <p>Piscina: {vivienda.piscina}</p>
        <p>Jardin: {vivienda.jardin}</p>
        <p>Nº Referencia: {vivienda.referencia}</p>
        <div className="border p-1">
          <p>Descripcion vivienda:<br></br> {vivienda.descripcion}</p>
        </div>
        </div>

        { vivienda.lat && vivienda.long && <Map viviendaActual={vivienda}></Map> }
      </div>
    </div>
  )
}
export default Card
