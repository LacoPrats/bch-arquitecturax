import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import CONT from "../../../src/assets/imags/contact/contacto.jpg";
import LOGON from "../../../src/assets/imags/logonegro.png";

const Contact = () => {
  return (
    <section id='contact'>
      <div className='home4'>
        <div>
          <h1 className='proyecthero animate__animated animate__zoomIn'>CONTACTO</h1>
        </div>
      </div>
      <div className='contact__wrapper'>
        <div className='contactimg-wrapper'>
          <img src={CONT} alt="" className='contactimg' />
        </div>
        <div className='container contact__container'>
          <h1>PONETE EN CONTACTO CON NOSOTROS PARA EMPEZAR TU NUEVO PROYECTO JUNTOS!</h1>
          <hr />
          <div className='contact__options'>
              <a href='mailto:info@bcharquitectura.com.ar'>
            <article className='contact__option'>
              <div className="contact__option-content">
                <div className="contact__text">
                  <AiOutlineMail className='contact__option-icon' />
                  <h4>Email</h4>
                  <h5>info@bcharquitectura.com.ar</h5>
                </div>
                <hr />
              </div>
            </article>
              </a>
              <a href='https://www.instagram.com/bcharquitectura/'>
            <article className='contact__option'>
              <div className="contact__option-content">
                <div className="contact__text">
                  <BsMessenger className='contact__option-icon' />
                  <h4>Instagram</h4>
                  <h5>@bcharquitectura</h5>
                </div>
                <hr />
              </div>
            </article>
              </a>
              <a href='mailto:info@bcharquitectura.com.ar'>
            <article className='contact__option'>
              <div className="contact__option-content">
                <div className="contact__text">
                  <BsWhatsapp className='contact__option-icon' />
                  <h4>Whatsapp</h4>
                  <h5>+54911-6-905-8458</h5>
                </div>
                <hr />
              </div>
            </article>
              </a>
              <a href='https://maps.app.goo.gl/egM75VNAGtzhsKjY9'>
            <article className='contact__option'>
              <div className="contact__option-content">
                <div className="contact__text">
                  <ImLocation className='contact__option-icon' />
                  <h4>Oficina</h4>
                  <h5>Bahia Grande - Nordelta</h5>
                </div>
                <hr />
              </div>
            </article>
              </a>
          </div>
          <div>
            <hr />
            <img src={LOGON} alt="" className='Logocontact' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;