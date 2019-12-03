import React from 'react'

function Exito({mensaje}) {
  return (
    <div>
      <p className="alert alert-success py-3 text-center">{mensaje}</p>
    </div>
  )
}

export default Exito
