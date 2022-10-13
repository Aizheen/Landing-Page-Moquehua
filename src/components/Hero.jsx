import React from "react";
import "../stylesheets/hero.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import ArrowScroll from "./ArrowScroll";


function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-container">
        <Fade top>
          <h1 className="hero-name">Ellos también</h1>
        </Fade>
        <Fade bottom>
          <h1 className="hero-name2">son importantes</h1>
        </Fade>

        <Fade bottom cascade>
          <p className="hero-p">Por eso merecen el mejor trato.</p>
        </Fade>

        <Fade bottom>
          <div className="container-btn">
          <Link
            to="servicios"
            spy={true}
            smooth={true}
            offset={-110}
            duration={800}
            className="hero-btn"
          >
            Más info
            <div className="icon">
              <AiOutlineInfoCircle />
            </div>
          </Link>
        </div>
        </Fade>
        <ArrowScroll></ArrowScroll>
      </div>
    </div>
  );
}

export default Hero;
