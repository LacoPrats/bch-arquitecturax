import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import MiniHome1 from '../../assets/imags/home/carrousel1.png'
import MiniHome2 from '../../assets/imags/home/carrousel2.png'
import './minicarrousel.css'
function MiniCarrousel() {
  return (
    <div className='carrouselhome'>
    <Carousel fade className='miniCarrouseltotal'>
      <Carousel.Item>
        <img
          className="minicarrousel"
          src={MiniHome1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="minicarrousel"
          src={MiniHome2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MiniCarrousel;