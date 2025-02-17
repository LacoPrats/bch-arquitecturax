import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css'; // Opcional, para estilos personalizados

Modal.setAppElement('#root'); // Necesario para accesibilidad

function ImageModal({ isOpen, onRequestClose, images }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalContent}>
        {images.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`Slide ${index + 1}`} className={styles.modalImage} />
        ))}
      </div>
    </Modal>
  );
}

export default ImageModal;