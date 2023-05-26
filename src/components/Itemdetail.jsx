import { data } from "../pages/proyectoslist";
import React from "react";
import { useParams } from "react-router-dom";
import "./itemdetail.css";
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
      </div>
      <div className="detailimag">
        <img alt={datap.name} src={datap?.image} className="dimag" />
        <img alt={datap.name} src={datap?.image2} className="dimag" />
        <img alt={datap.name} src={datap?.image3} className="dimag" />
        <img alt={datap.name} src={datap?.image4} className="dimag" />
      </div>
    </div>
  );
};

export default Itemdetail;
