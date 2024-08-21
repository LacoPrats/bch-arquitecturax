import React from "react";
import { Link } from 'react-router-dom';
import { data } from "../../pages/Prensa/prensalist";
import './prensa.css';

function Prensa() {
  return (
    <div className="pprojecttodo">
      <div className='home3'>
        <div>
          <h1 className='proyecthero animate__animated animate__zoomIn'>PROYECTOS</h1>
        </div>
      </div>
      <div className="container pportfolio__container">
        {data.map(({ id, portada, name }) => (
          <article key={id} className="portfolio__item">
            <Link to={`/pdetail/${id}`}>
              <div className="portfolio item__image">
                <img className="Proyectimag" src={portada} alt={name} />
                <div className="proyecytext">
                  <p className="ProyectName">{name}</p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Prensa;
