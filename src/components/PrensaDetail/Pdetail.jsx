import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../pages/Prensa/prensalist";
import "./prensadetail.css";
import PrensaCarousel from "./PrensaCarrousel";

function Prensadetail() {
  const { id } = useParams(); // Obtener el parámetro de la URL

  // Cambia parseInt a string para coincidir con el ID de data si es string
  const project = data.find((project) => project.id === id);

  if (!project) {
    return <div>Proyecto no encontrado</div>; // Manejar si el proyecto no se encuentra
  }

  return (
    <div className="PItemDetail">
      <div className="pdetailinfo">
        <h2>{project.name}</h2>
        <p>{project.ubicación}</p>
        <PrensaCarousel images={project.image} /> {/* Asegúrate de importar y usar correctamente PrensaCarousel */}
      </div>
    </div>
  );
}

export default Prensadetail;
