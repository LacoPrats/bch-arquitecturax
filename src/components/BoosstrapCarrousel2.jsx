import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import MINIHOME1 from '../assets/imags/home/carrousel1.png'
import MINIHOME2 from '../assets/imags/home/carrousel2.png'
import './minicarrousel.css'
function MiniCarrousel() {
  return (
    <div className=''>
    <Carousel fade className='miniCarrouseltotal'>
      <Carousel.Item>
        <img
          className="minicarrousel"
          src={MINIHOME1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="minicarrousel"
          src={MINIHOME2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MiniCarrousel;