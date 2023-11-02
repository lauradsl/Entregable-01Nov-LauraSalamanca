//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react'

const Card = (props) => 
{
  return (
    <>
        <h2>Datos completos</h2>
        <div>
        <p>Nombre: {props.nombre}</p>
        <p>Cédula de ciudadanía: {props.cedula}</p>
        </div>
    
    </>
  )
}

export default Card