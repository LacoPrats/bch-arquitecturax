import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './prensacarrousel.css';


function PrensaCarousel({ images }) {
  return (
    <div className={styles.pcarouselContainer}>
      <Carousel fade className={styles.PrensaCarrous}>
        {images.map((imgSrc, index) => (
          <Carousel.Item key={index}>
            <div className={styles.pimageContainer}>
              <img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className={styles.ptemCarouselImage}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default PrensaCarousel;
