import React from "react";
import{BsInstagram}from 'react-icons/bs'
import{AiOutlineMail}from 'react-icons/ai'
import './footer.css'
import {BsWhatsapp}from 'react-icons/bs'
import{GoLocation}from 'react-icons/go'
import LOGO from '../../assets/imags/logoblanco.png'

function Footer() {
  return (
    <div className="footer__container">
      <div className="contactFooterContainer">
        <div className="rect"></div>
        <div className="footer">
        <div className="info">
          <BsWhatsapp/>
          <p>+54911-6-905-8458</p>
        </div>
        <div className="info">
          <AiOutlineMail/>
          <p>arquitectura.bch@gmail.com</p>
        </div>
        <div className="info">
        <BsInstagram />
          <p>@bcharquitectura</p>
        </div>
        <div className="info">
          <GoLocation/>
          <p>Bahia Grande-Nordelta-Tigre,Bs.As.</p>
        </div>
        </div>
      </div>
      <div className="logoFooterContainer">
        <img src={LOGO} alt="" className="logofooter"/>
        <div className="rect"></div>
      </div>
    </div>
  );
}

export default Footer;