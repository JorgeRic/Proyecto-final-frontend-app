import React from 'react'

function Card(props) {
  console.log(props.imagenes)
  return (
    <div className="card">
        <h3>{props.titulo}</h3>
              <div className="container-foto">
              {props.imagenes ? props.imagenes.map((img) => {
                return (<img className="foto" key={img} src={img}/>)
               }) : null}
               </div>
               <div className="text-card">
              <p>Vivienda en {props.clase}</p>
              <p>Tipo de vivienda: {props.tipo}</p>
              <h3>Precio: {props.precio} euros</h3>
              <p>Ciudad: {props.ciudad}</p>
              </div>
    

    </div>
  )
}
export default Card