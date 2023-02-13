import React from "react";
import SaucesV from '../assets/imags/SaucesV.jpg'

import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${SaucesV})` }}
      ></div>
      <div className="rightSide">
        <h1> Contactanos</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nomble Completo</label>
          <input name="name" placeholder="Escribe tu nombre..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Escribe su email..." type="email" />
          <label htmlFor="message">Mensaje</label>
          <textarea className="textarea"
            rows="100"
            placeholder="Escribe su mensaje..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;