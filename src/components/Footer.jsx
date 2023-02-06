import React from "react";
import{MdEmail}from 'react-icons/md'
import{AiFillFacebook}from 'react-icons/ai'
import{AiFillInstagram}from 'react-icons/ai'
import{AiOutlineMail}from 'react-icons/ai'
import './footer.css'
import {BsWhatsapp}from 'react-icons/bs'
import{ImLocation}from 'react-icons/im'
import LOGO from '../assets/imags/logoblanco.png'

function Footer() {
  return (
    <div className="footer__container">
      <div>
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
        <AiFillInstagram />
          <p>@bcharquitectura</p>
        </div>
        <div className="info">
          <ImLocation/>
          <p>Bahia Grande-Nordelta-Tigre,Bs.As.</p>
        </div>
        </div>
      <hr className="hrfooter" />
      </div>
      <div>
      <img src={LOGO} alt="" className="logofooter"/>
      </div>
      <div className="rect2"></div>
    </div>
  );
}

export default Footer;