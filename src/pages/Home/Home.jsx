import React from "react";
import LOGO from "../../../src/assets/imags/home/logo1.png";
import LOGO2 from "../../../src/assets/imags/home/logo2.png";
import LOGO3 from "../../../src/assets/imags/home/logo3.png";
import "./home.css";
import BoosstrapCarrousel from "../../components/Carrousel/BoosstrapCarrousel";
import BoosstrapCarrousel2 from "../../components/MiniCarrousel/BoosstrapCarrousel2";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "animate.css";

const arr = [
  {
    title: "Proyectos",
    subtitle: "DISEÑAMOS TUS ESPACIOS A TU MEDIDA, DE MANERA PERSONALIZADA",
    img: "infoContainerBackground"
  },
  {
    title: "Estudios",
    subtitle: "REALIZAMOS CONSTRUCCIONES DESDE CERO, DE FORMA INTEGRAL",
    img: "infoContainerBackground"
  },
  {
    title: "Proyectos",
    subtitle: "RENOVAMOS TUS ESPACIOS, ADAPTANDOLOS SEGÚN TUS NECESAIDADES",
    img: "infoContainerBackground"
  }
]


const Home = () => {
  return (
    <>
      <div>
        <BoosstrapCarrousel />
      </div>
      <div className="homeintrocontainer">
        <h1 className="homeinfo">BIENVENIDOS A <span class="bolded">BCH ARQUITECTURA</span>, UN ESTUDIO DEDICADO AL <span class="bolded">DISEÑO Y CONSTRUCCION</span>, DONDE CONSTRUIMOS ESPACIOS ENTENDIENDO LAS <span class="bolded">NECESIDADES DE LOS CLIENTES</span>.CREAMOS UNA <span class="bolded">ARQUITECTURA SENSIBLE Y A MEDIDA</span>, QUE BUSCA SER EL MEDIO PARA QUE LAS PERSONAS LOGREN HABITAR LOS ESPACIOS CON LOS QUE SUEÑAN.
          PARA NOSOTROS CADA PROYECTO ES UNICO, POR LO CUAL OFRECEMOS <span class="bolded">PROPUESTAS PERSONALIZADA</span>.</h1>
      </div>
      <div className="logocontainer">
        <div className="logobox">
          <img src={LOGO} alt=""  className="Logo"/>
          <h3>Diseno</h3>
        </div>
        <div className="logobox">
        <img src={LOGO2} alt=""  className="Logo"/>
        <h3>Arquitectura</h3>
        </div>
        <div className="logobox"> 
        <img src={LOGO3} alt="" className="Logo" />
        <h3>Construccion</h3>
        </div>
      </div>
      <div className="Zone">
        {
          arr.map((card, index) => {
            const { img, title, subtitle } = card;
            const className = `infoContainer ${img}-${index + 1}`
            return (
              <div className={className}>
                <div className="wrapper">
                  <div className="ticContainer">
                    <BsFillCheckCircleFill className="tic" />
                  </div>
                  <div className="textContainer">
                    <h1 className="title" id="Text">
                      {title}
                    </h1>
                    <h3 className="subtitle" id="Text">
                      {subtitle}
                    </h3>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="minicarrousel__container">
        <div className="minicarrouselinfo">
        <h3>Nuestros Disenos</h3>
        </div>
        <div className="recthome"></div>
      <BoosstrapCarrousel2 />
      </div>
    </>
  );
};

export default Home;
