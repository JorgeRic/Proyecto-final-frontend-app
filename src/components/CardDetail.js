import React from 'react'

function Card(props) {
  // console.log(props.imagenes)
  return (
    <div className="card">
      <div className="card-header text-center bg-warning">
        <h4>{props.titulo}</h4>
      </div>
      <div className="card-body">
        <div className="container-fluid">
        {props.imagenes ? props.imagenes.map((img) => {
          return (<img className="img-fluid w-80" key={img} src={img}/>)
          }) : null}
          </div>
          <div className="text-card">
        <h5>Vivienda en {props.clase}</h5>
        <p>Tipo de vivienda: {props.tipo}</p>
        <h3>Precio: {props.precio} euros</h3>
        <p>Ciudad: {props.ciudad}</p>
        </div>
      </div>
    </div>
  )
}
export default Card