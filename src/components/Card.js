import React from 'react'

function Card(props) {
  const { mostrarUnaPhoto, imagenes, titulo, clase, tipo, precio, ciudad, direccion, metros, numHab, numAseos, numGarajes, piscina, jardin, referencia, descripcion} = props;
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>Vivienda en {clase}</p>
      <div className="container-foto">
      {
        mostrarUnaPhoto 
          ? (<img className="foto" src={imagenes[0]}/>)
          : imagenes
            ? imagenes.map((img) =>  (<img key={img} src={img}/>))
            : null
      }
        </div>
      <p>Tipo de vivienda: {tipo}</p>
      <h3>Precio: {precio} euros</h3>
      <p>Ciudad: {ciudad}</p>
      <p>Direccion de la vivienda: {direccion}</p>
      <p>metros cuadrados: {metros}</p>
      <p>Numero de habitaciones: {numHab}</p>
      <p>Numero de baños: {numAseos}</p>
      <p>Numero de garajes:{numGarajes}</p>
      <p>Piscina: {piscina}</p>
      <p>Jardin: {jardin}</p>
      <p>Numero de referencia: {referencia}</p>
      <p>Descripcion de viviendas: {descripcion}</p>
    

    </div>
  )
}
export default Card
