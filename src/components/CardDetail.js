import React from 'react'

function Card(props) {
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
    

    </div>
  )
}
export default Card