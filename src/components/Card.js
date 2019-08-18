import React from 'react'

export default function Card(props) {
  return (
    <div>
        <h3>{props.titulo}</h3>
              <p>vivienda en {props.clase}</p>
              {props.imagenes.map((img) => {
                return (<img key={img} src={img}/>)
               })}
              <p>Tipo de vivienda: {props.tipo}</p>
              <p>Precio: {props.precio}</p>
              <p>Ciudad: {props.ciudad}</p>
              <p>Direccion de la vivienda: {props.direccion}</p>
              <p>metros cuadrados: {props.metros}</p>
              <p>Numero de habitaciones: {props.numHab}</p>
              <p>Numero de baños: {props.numAseos}</p>
              <p>Numero de garajes:{props.numGarajes}</p>
              <p>Piscina: {props.piscina}</p>
              <p>Jardin: {props.jardin}</p>
              <p>Numero de referencia: {props.referencia}</p>
              <p>Descripcion de viviendas: {props.descripcion}</p>
              {/* <p>Nombre del propietario: {props.nombrePropietario}</p>
              <p>Telefono del propietario: {props.telefonoPropietario}</p>
              <p>Mail del propietario: {props.mailPropietario}</p> */}
             


    </div>
  )
}

