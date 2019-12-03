import React from 'react'

export default function PrivateCard(props) {
  const { mostrarUnaPhoto, imagenes, titulo, nombrePropietario, telefonoPropietario, mailPropietario, clase, tipo, precio, ciudad, direccion, metros, numHab, numAseos, numGarajes, piscina, jardin, referencia, descripcion} = props;
  return (
    <div className="card mt-2">
      <div className="card-header text-center">
        <h4>{titulo}</h4>
      </div>
      <div className="card-body">
        <div className="container-fluid">
          {
          mostrarUnaPhoto 
            ? (<img className="w-80 img-fluid" src={imagenes[0]} alt="imagen vivienda"/>)
            : imagenes
              ? imagenes.map((img) =>  (<img key={img}  className="img-fluid w-80 mt-2" src={img} alt="imagen vivienda"/>))
              : null
          }
        </div>

         <div className="texto-card mt-2">
              <p>Vivienda en {clase}</p>
              <p>Tipo Vivienda: {tipo}</p>
              <h5>Precio: {precio} euros</h5>
              <p>Ciudad: {ciudad}</p>
              <p>Direccion Vivienda: {direccion}</p>
              <p>metros Cuadrados: {metros}</p>
              <p>Nº Habitaciones: {numHab}</p>
              <p>Nº Baños: {numAseos}</p>
              <p>Nº Garajes:{numGarajes}</p>
              <p>Piscina: {piscina}</p>
              <p>Jardin: {jardin}</p>
              <h5>Nº Referencia: {referencia}</h5>
              <div className="border p-1">
                <p>Descripcion vivienda:<br></br> {descripcion}</p>
              </div>
              <p>Nombre propietario: {nombrePropietario}</p>
              <p>Telefono propietario: {telefonoPropietario}</p>
              <p>Mail propietario: {mailPropietario}</p>
         </div>
      </div>
    </div>
      )
    }
    