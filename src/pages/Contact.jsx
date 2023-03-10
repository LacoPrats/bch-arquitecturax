import React from 'react'
import './contact.css'
import{AiOutlineMail}from'react-icons/ai'
import{BsMessenger}from'react-icons/bs'
import{BsWhatsapp}from'react-icons/bs'

const Contact = () => {
  return (
  <section id='contact'>
   <div className='home3'>
        <div>
          <h1 className='proyecthero animate__animated animate__zoomIn'>CONTACTO</h1>
        </div>
      </div>
    <div className="container contact__container">
      <div className="contact__options">
      <article className="contact__option">
        <AiOutlineMail className="contact__option-icon"/>
        <h4>Email</h4>
        <h5>info@bcharquitectura.com.ar
        </h5>
        <a href="mailto:info@bcharquitectura.com.ar">Send message</a>
      </article>
      <article className="contact__option">
        <BsMessenger className="contact__option-icon"/>
        <h4>Instagram</h4>
        <h5>@bcharquitectura</h5>
        <a href="https://www.instagram.com/bcharquitectura/">Send message</a>
      </article>
      <article className="contact__option">
        <BsWhatsapp className="contact__option-icon"/>
        <h4>Whatsapp</h4>
        <h5>BCH ARQUITECTURA</h5>
        <a href="https://api.whatsapp.com/send?phone+549116905.08458">Send message</a>
      </article>
      </div>
      <form action="">
        <input type="text" name='name' placeholder='Nombre Completo' required/>
        <input type="email" name='email'placeholder='Email' required />
        <input type="text" name='telefono' placeholder='Numero de telefono' required/>
        <textarea name="message" rows="7" placeholder='Escribanos su mensaje' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact
