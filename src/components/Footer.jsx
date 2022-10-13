import React from 'react'
import logovete from "../images/vete.png"
import "../stylesheets/footer.css"
import {RiMapPinAddLine} from "react-icons/ri"
import {ImPhone} from "react-icons/im"
import {FiMail} from "react-icons/fi"


import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"

export default function Footer() {
  return (  
    <>
      <div className='footer-container'>
      <img src={logovete} alt="logo" />
    <div className='footer-descripcion'>
         <h3> <span className='footer-icon'><RiMapPinAddLine/></span> Av. Pte. J. D. Perón 2951, San Miguel, Provincia de Buenos Aires</h3>
        <h3> <span className='footer-icon'><ImPhone/></span> 11 6139-7391</h3>
        <h3> <span className='footer-icon'><FiMail/></span> moquehua2951@gmail.com</h3>
    </div>  
    <div className='btn-icons'>
                 <a href='https://www.instagram.com/veterinaria_moquehua/' target="_blank" className='ig'> <BsInstagram/></a>
                <a href="https://www.facebook.com/VETERINARIA-MOQUEHUA-SAN-MIGUEL-172924506268" target="_blank"
                className='fb'><BsFacebook/></a>
            </div>
    </div>

    <div className='footer-copyrigth'>
    <h1>©️ 2022 - Veterinaria Moquehua San Miguel</h1>
    </div>

    </>
    
  )
}
