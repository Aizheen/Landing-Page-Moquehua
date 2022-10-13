import React from 'react'
import "../stylesheets/tarjetas.css"
import tarjeta1 from "../images/tarjeta 1.jpg"
import tarjeta2 from "../images/tarjeta 2.jpg"
import tarjeta3 from "../images/tarjeta 3.jpg"
import {AiOutlineInfoCircle} from "react-icons/ai"
import sobreNosotros from "../images/sobre-nosotros.png"
import Fade from "react-reveal/Fade";



export default function Tarjetas() {
  return (
    <>
      <div className="card-servicios" id="servicios">
        <div className="servicios-title">
         
            <img
              className="ubicacion-img"
              src={sobreNosotros}
              alt="ubicacion"
            />
            <h1>Servicios</h1>
            <p>Contamos con diferentes especializaciones entre ellas están:</p>
         
        </div>
      </div>

      <div className="card-container">
        <Fade left>
        <>
          <div className="card">
            <img className="card-img cat" src={tarjeta1} alt="tarjeta1" />
            <h1 className="card-title">Control clínico</h1>
            <p className="card-p">
              Contamos con todas las herramientas para prevenir y curar.
            </p>
            <a className="card-a" href='https://api.whatsapp.com/send?phone=541161397391' target="_blank">
            <span className='fc-info'><AiOutlineInfoCircle /></span> Mas info
            </a>
          </div>
        </>
        </Fade>
       <Fade bottom>
        <>
          <div className="card">
            <img className="card-img" src={tarjeta2} alt="tarjeta1" />
            <h1 className="card-title">Atencion especializada</h1>
            <p className="card-p">
              Cuidado holistico de nuestros pacientes mediante una atencion
              interdisciplinaria
            </p>
            <a className="card-a" href='https://api.whatsapp.com/send?phone=541161397391' target="_blank">
            <span className='fc-info'><AiOutlineInfoCircle /></span> Mas info
            </a>
          </div>
        </>
       </Fade>
          

        <Fade right>
        <>
          <div className="card">
            <img className="card-img" src={tarjeta3} alt="tarjeta1" />
            <h1 className="card-title">Urgencias</h1>
            <p className="card-p">
              Internaciones y Emergencias: Alta capacidad y disponibilidad las
              24hs.
            </p>
            
                <a className="card-a" href='https://api.whatsapp.com/send?phone=541161397391' target="_blank">
              <span className='fc-info'><AiOutlineInfoCircle /></span> Mas info
            </a>
            
            
          </div>
        </>
        </Fade>
      </div>
    </>
  );
}
