import React from "react";
import { Link } from 'react-router-dom'
import { data } from "../helplers/proyectoslist";

import './proyectos.css'

function Project() {
  return (
    <div className="projecttodo">
      <div className='home3'>
        <div>
          <h1 className='proyecthero animate__animated animate__zoomIn'>PROYECTOS</h1>
        </div>
      </div>
      <div className="container portfolio__container">
        {
          data.map(({ id, portada, name }) => {
            return (
              <article key={id} className="portfolio__item">
                 <Link to={`/detail/${id}`}>  <div className="portfolio item__image" >
                <img className="Proyectimag" src={portada} alt={name} />
                  <div className="proyecytext">
                    <p className="ProyectName">{name}</p>
                  </div>
                </div></Link>
              </article>
            );
          })
        }
      </div>
    </div>
  );
}

export default Project;