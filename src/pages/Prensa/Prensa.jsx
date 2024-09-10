import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { data } from "../../pages/Prensa/prensalist";
import './prensa.css';

function Prensa() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleOpenModal = (pdf) => {
    setSelectedPdf(pdf);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPdf(null);
  };

  return (
    <div className="pprojecttodo">
      <div className='home4'>
        <div>
          <h1 className='proyecthero animate__animated animate__zoomIn'>PRENSA</h1>
        </div>
      </div>
      <div className="container pportfolio__container">
        {data.map(({ id, portada, name, pdf }) => (
          <article key={id} className="portfolio__item">
            <div onClick={() => handleOpenModal(pdf)}>
              <div className="portfolio item__image">
                <img className="Proyectimag" src={portada} alt={name} />
                <div className="proyecytext">
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal para visualizar el PDF */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Body style={{ padding: 0 }}>
          {selectedPdf && (
            <iframe
              src={`${selectedPdf}#toolbar=0`}
              style={{
                width: "100%",
                height: "100vh",
                border: "none",
                display: "block",
              }}
              title="PDF Viewer"
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Prensa;
