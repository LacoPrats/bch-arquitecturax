import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { data } from "../../pages/proyectoslist";
import "./itemCarrousel.css";

function ItemCarousel({ images }) {
  return (
    <div className="carousel-container">
      <Carousel fade className="itemCarouselTotal">
        {images.map((imgSrc, index) => (
          <Carousel.Item key={index}>
            <div className="image-container">
              <img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className="itemCarouselImage"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ItemCarousel;



