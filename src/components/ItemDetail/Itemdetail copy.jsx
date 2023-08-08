import { data } from "../../pages/proyectoslist";
import React from "react";
import { useParams } from "react-router-dom";
import "./itemdetail.css";
import ItemCarrousel from "./ItemCarrousel";
import Carousel from 'react-bootstrap/Carousel';

const Itemdetail = () => {
  const { id } = useParams();
  console.log(id);
  const datap = data.find((x) => x.id === Number(id));
  console.log(datap);
  return (
    <div className="ItemDetail">
      <div className="detailinfo">
        <h1>{datap?.name}</h1>
        <h2> Ubicación:{datap?.ubicación}</h2>
        <ItemCarrousel />
        <div className="detailimag">
            {datap.image.map((image, index) => (
              <img key={index} src={image} className="dimag" alt={`Imagen ${index + 1}`} />
            ))}
          </div>
      </div>
    </div>

  );
};

export default Itemdetail;