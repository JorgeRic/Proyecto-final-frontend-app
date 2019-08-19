import React from 'react'

export default function Card(props) {
  console.log(props.imagenes)
  return (
    <div>
        <h3>{props.titulo}</h3>
            
              {props.imagenes ? props.imagenes.map((img) => {
                return (<img key={img} src={img}/>)
               }) : null}
              <p>Vivienda en {props.clase}</p>
              <p>Tipo de vivienda: {props.tipo}</p>
              <p>Precio: {props.precio} euros</p>
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
    

    </div>
  )
}

