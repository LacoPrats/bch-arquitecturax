import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { data } from "../../pages/proyectoslist";

function ItemCarousel({ images }) {
  return (
    <Carousel fade className='miniCarrouseltotal'>
      {images.map((imgSrc, index) => (
        <Carousel.Item key={index}>
          <img
            src={imgSrc}
            alt={`Slide ${index + 1}`}
            className="minicarrousel-image"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default  ItemCarousel;




