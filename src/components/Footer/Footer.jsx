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
          <a href='https://api.whatsapp.com/send?phone=++5491169058458&text=Hola,%20estoy%20interesado%20en%20sus%20servicios.'>
          <BsWhatsapp/>
          </a>
          <p>+54911-6-905-8458</p>
        </div>
        <div className="info">
       <a href='mailto:info@bcharquitectura.com.ar'>
          <AiOutlineMail/>
       </a>
          <p>arquitectura.bch@gmail.com</p>
        </div>
        <div className="info">
          <a  href='https://www.instagram.com/bcharquitectura/'>
        <BsInstagram />
          </a>
          <p>@bcharquitectura</p>
        </div>
        <div className="info">
          <a href="https://maps.app.goo.gl/egM75VNAGtzhsKjY9">
         <GoLocation/>
          </a>
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