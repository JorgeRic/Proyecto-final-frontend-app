import React from 'react'

export default function PrivateCard(props) {
  const { mostrarUnaPhoto, imagenes, titulo, nombrePropietario, telefonoPropietario, mailPropietario, clase, tipo, precio, ciudad, direccion, metros, numHab, numAseos, numGarajes, piscina, jardin, referencia, descripcion} = props;
  return (
    <div className="card">
        <h3>{titulo}</h3>
        <div className="container-foto">
        {
        mostrarUnaPhoto 
          ? (<img className="foto" src={imagenes[0]}/>)
          : imagenes
            ? imagenes.map((img) =>  (<img key={img} src={img}/>))
            : null
         }
        </div>
              <p>Vivienda en {clase}</p>
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
              <h4>Numero de referencia: {referencia}</h4>
              <p>Descripcion de viviendas: {descripcion}</p>
              <p>Nombre del propietario: {nombrePropietario}</p>
              <p>Telefono del propietario: {telefonoPropietario}</p>
              <p>Mail del propietario: {mailPropietario}</p>
    </div>
      )
    }
    