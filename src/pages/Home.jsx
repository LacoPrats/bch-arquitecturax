import React from "react";
import IMAG from "../../src/assets/imags/home/flashes.png";
import "./home2.css";
import BoosstrapCarrousel from "../components/BoosstrapCarrousel";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "animate.css";

const arr = [
  {
    title: "Proyectos",
    subtitle: "diseñamos tus espacios a tu medida, de manera personalizada",
    img: "infoContainerBackground"
  },
  {
    title: "Estudios",
    subtitle: "diseñamos tus espacios a tu medida, de manera personalizada",
    img: "infoContainerBackground"
  },
  {
    title: "Proyectos",
    subtitle: "diseñamos tus espacios a tu medida, de manera personalizada",
    img: "infoContainerBackground"
  }
]


const Home = () => {
  return (
    <>
      <div>
        <BoosstrapCarrousel />
      </div>
      <div className="homeim">
        <img src={IMAG} alt="" className="imaghome" />
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
    </>
  );
};

export default Home;
