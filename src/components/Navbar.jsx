import React ,{useState}from 'react'
import logo from "../images/vete.png"
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import "../stylesheets/navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {Link} from "react-scroll"



function Navbar() {

  
const [clicked,setClicked] =  useState(true) 
const handleClick = () => {
   setClicked(!clicked)
}

  return (
    <div className="container">
      <div className="logo-container">
        <img className="logo" src={logo} alt="vete" />
        <h1 className="title">
          <Link to="home" spy={true} smooth={true} offset={-30} duration={800}>
            Moquehua
          </Link>
        </h1>
      </div>

        <div className="menu-hamburguer">
          <GiHamburgerMenu clicked ={clicked} handleClick={handleClick} onClick={handleClick}/>
        </div>

      <ul className={`links ${clicked ? 'hidden' : ''}`}>
        <li><Link to="home" spy={true} smooth={true} offset={-100} duration={800}><a onClick={handleClick} to="home">Inicio</a></Link></li> 
        <li><Link to="quienesSomos" spy={true} smooth={true} offset={-90} duration={800}><a onClick={handleClick} to="quienesSomos">Quienes Somos</a></Link></li>
        <li><Link to="servicios" spy={true} smooth={true} offset={-100} duration={800}><a onClick={handleClick} to="servicios">Servicios</a></Link></li>
        <li><Link to="ubicacion" spy={true} smooth={true} offset={-100} duration={800}><a onClick={handleClick} to="ubicacion"> Contacto</a></Link></li>
      </ul>

      <div className="redes-container">
        <a
          className="redes"
          href="https://www.instagram.com/veterinaria_moquehua/"
        ><BsInstagram/></a><a
          className="redes"
          href="https://www.facebook.com/VETERINARIA-MOQUEHUA-SAN-MIGUEL-172924506268"
        ><BsFacebook />
        </a>
      </div>
    </div>
  );
}

export default Navbar