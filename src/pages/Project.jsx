import React from "react";
import Acacias from '../assets/imags/Acacia.jpg'
import Alemania from '../assets/imags/Alemania.jpeg'
import Alissos from '../assets/imags/Alissos.jpg'
import Araucarias from '../assets/imags/Araucarias1.jpg'
import Araucarias2 from '../assets/imags/Araucarias2.jpg'
import Araucarias3 from '../assets/imags/Araucarias3.jpeg'
import Araucarias4 from '../assets/imags/Araucarias4.jpg'
import Bahia from '../assets/imags/Bahia.png'
import Belgrano from '../assets/imags/Belgrano.jpg'
import Canton from '../assets/imags/Canton.jpg'
import Costas from '../assets/imags/Costas.jpg'
import Sauces from '../assets/imags/Sauces.jpeg'
import Nunes from '../assets/imags/Nunes.jpg'
import Riberas from '../assets/imags/Riberas.jpeg'
import SaucesV from '../assets/imags/SaucesV.jpg'
import { Link } from 'react-router-dom'
import { data } from "../helplers/proyectoslist";

import './proyectos.css'

function Project() {
  return (
    <div className="projecttodo">
      <div className='home3'>
        <div className='logoestudio'>
          <h1>Proyectos</h1>
        </div>
      </div>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, name }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio item__image" >
                  <Link to={`/detail/${id}`}> <img className="Proyectimag" src={image} alt={name} /></Link>
                  <div className="proyecytext">
                    <p className="ProyectName">{name}</p>
                  </div>
                </div>
              </article>
            );
          })
        }
      </div>
    </div>
  );
}

export default Project;