import React from 'react'
import "../stylesheets/somos-moquehua.css"
import logo from "../images/vete.png"
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import Fade from 'react-reveal/Fade';


export default function SomosMoquehua() {
  return (
    <>
        <div className='somos-moquehua' id='quienesSomos' >
       
        <Fade left>
          <div className='logo-vete-container' >
        <img className='logo-vete' src={logo} alt="logo-vete" />
       </div>
        </Fade>
       
       <Fade right>
         <div className='descripcion'>
          
              <h1 className='somos-moquehua-title'>Somos <span>Moquehua</span> 
            </h1><p>Veterinaria que se encuentra en <a href="https://www.google.com.ar/maps/place/Veterinaria+Moquehua/@-34.5320763,-58.7268992,17.75z/data=!4m5!3m4!1s0x95bcbda81951428d:0xc20617070f0cc7b9!8m2!3d-34.5317729!4d-58.7266059" target="_blank">San Miguel</a></p>
            <p>Lunes a Viernes: <b>9:00 a 12:00hs ~ 16:00 a 19:00hs</b></p>
            <p>Sábados: <b>9:00 a 16:00hs</b></p>
            <div className='btn-icons'>
                 <a href='https://www.instagram.com/veterinaria_moquehua/' target="_blank" className='ig'> <BsInstagram/></a>
                <a href="https://www.facebook.com/VETERINARIA-MOQUEHUA-SAN-MIGUEL-172924506268" target="_blank"
                className='fb'><BsFacebook/></a>
            </div>
            
            </div>
       </Fade>
           
           
            
        </div>
    </>
  )
}
