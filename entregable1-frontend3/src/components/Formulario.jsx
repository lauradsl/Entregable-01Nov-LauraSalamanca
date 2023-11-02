import React, { useState } from 'react'
import Card from './Card'

const Formulario = () => 
{
    const [nombre, setNombre] = useState("")
    const [cedula, setCedula] = useState(0)
    const [card, setCard] = useState(false);
    

    const handleSubmit = e =>
    {
        e.preventDefault()

        if(nombre === '' || !/^[A-Za-z\s]+$/.test(nombre) || nombre.length < 3)
        {
          alert("Campo nombre incorrecto. Debe contener un nombre de más de tres letras. Solo letras son validas")
        } else if (isNaN(cedula) || cedula.length < 6)
        {
          alert("Campo cédula incorrecto. Debe contener solo números. Debe tener al menos 6 digitos.")
        } else{
            setCard(true)
        }
          
    }

  return (
    <>

    <h2>Regístrese para votar</h2>
    <form
      onSubmit={handleSubmit}
    >

        <label htmlFor="nombre"> Nombre: </label>
        <input
          type = 'text'
          id='nombre'
          placeholder='Ingrese el nombre de su mascota'
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />

        <label htmlFor="cedula"> Cédula de ciudadanía: </label>
        <input
          type = 'number'
          id='cedula'
          placeholder='Ingrese su cédula'
          value={cedula}
          onChange={e => setCedula(e.target.value)}
        />

        <button 
            type="submit"
            value="Enviar datos"
            className='boton'
        >Enviar
        </button>
        </form>

        {card ? <Card nombre={nombre} cedula={cedula}/> : false}
        

    </>
  )
}

export default Formulario


