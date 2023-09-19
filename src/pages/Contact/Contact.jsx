import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import CONT from "../../../src/assets/imags/contact/contacto.jpg";

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
          <div className='contact__options'>
            <article className='contact__option'>
              <AiOutlineMail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>info@bcharquitectura.com.ar</h5>
              <a href='mailto:info@bcharquitectura.com.ar'>Enviar Mensaje</a>
            </article>
            <article className='contact__option'>
              <BsMessenger className='contact__option-icon' />
              <h4>Instagram</h4>
              <h5>@bcharquitectura</h5>
              <a href='https://www.instagram.com/bcharquitectura/'>Enviar Mensaje</a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon' />
              <h4>Whatsapp</h4>
              <h5>BCH ARQUITECTURA</h5>
              <a href='https://api.whatsapp.com/send?phone=+5491157207090&text=Hola,%20estoy%20interesado%20en%20sus%20servicios.'>
                Enviar Mensaje
              </a>
            </article>
          </div>
          <form action=''>
            <input type='text' name='name' placeholder='Nombre Completo' required />
            <input type='email' name='email' placeholder='Email' required />
            <input type='text' name='telefono' placeholder='Numero de telefono' required />
            <textarea name='message' rows='7' placeholder='Escribinos un mensaje' required></textarea>
            <a
              type='submit'
              className='btn btn-primary'
              href='mailto:ezequielprats74@gmail.com'
            >
              Send Message
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;