import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../pages/proyectoslist";
import "./itemdetail.css";
import ItemCarousel from "./ItemCarrousel";

function Itemdetail() {
  const { id } = useParams(); // Obtener el parámetro de la URL

  const project = data.find((project) => project.id === parseInt(id)); // Encontrar el proyecto correspondiente

  if (!project) {
    return <div>Proyecto no encontrado</div>; // Manejar si el proyecto no se encuentra
  }

  return (
    <div className="ItemDetail">
      <div className="detailinfo">
      <h2>{project.name}</h2>
      <p>{project.ubicación}</p>
      <ItemCarousel images={project.image} />
    </div>
    </div>
  );
}

export default Itemdetail;