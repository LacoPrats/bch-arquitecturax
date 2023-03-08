import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import HOME1 from '../assets/imags/home/Home1.jpg'
import HOME2 from '../assets/imags/home/Home2.jpg'
import HOME3 from '../assets/imags/home/Home3.jpg'
import HOME4 from '../assets/imags/home/Home4.jpg'
import HOME5 from '../assets/imags/home/Home5.jpg'
import './carrousel.css'
function BoosstrapCarrousel() {
  return (
    <div className='carr'>
    <Carousel fade className='Carrouseltotal'>
      <Carousel.Item>
        <img
          className="carrousel"
          src={HOME1}
          alt="First slide"
        />
        <Carousel.Caption className='caption'>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrousel"
          src={HOME2}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="carrousel"
          src={HOME3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrousel"
          src={HOME4}
          alt="Forth slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrousel"
          src={HOME5}
          alt="Fifth  slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default BoosstrapCarrousel;