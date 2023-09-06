import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import EC from '../../assets/imags/estudio/estudiocarrousel1.png'
import EC2 from '../../assets/imags/estudio/estudiocarrousel2.png'
import '../Estudio/EstudioCarrousel/estudiocarrousel.css'

function EstudioCarrousel() {
  return (
    <div className='carrouselhome'>
    <Carousel fade className='ECarrouseltotal'>
      <Carousel.Item>
        <img
          className="Ecarrousel"
          src={EC}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Ecarrousel"
          src={EC2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default EstudioCarrousel;