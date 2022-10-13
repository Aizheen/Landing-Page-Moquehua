import React from 'react'
import "../stylesheets/ubicacion.css"
import ubicacion from "../images/donde-estamos.png"


export default function Ubicacion() {
  return (
    <div className='ubicacion-container' id='ubicacion'>
    <img className='ubicacion-img' src={ubicacion} alt="ubicacion" />
        <h1 className='ubicacion-title'>¿Dónde estamos?</h1>
        <p className='ubicacion-p'>Nos encontramos en <a href="https://www.google.com.ar/maps/place/Veterinaria+Moquehua/@-34.5320763,-58.7268992,17.75z/data=!4m5!3m4!1s0x95bcbda81951428d:0xc20617070f0cc7b9!8m2!3d-34.5317729!4d-58.7266059" target="_blank" >Av.Pte.Perón 2951 1663 San Miguel</a> </p>
          <div className='vete-afuera' ></div>
    </div>
  )
}
