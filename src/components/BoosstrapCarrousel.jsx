import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import HOME1 from '../assets/imags/home/home1.jpg'
import HOME2 from '../assets/imags/home/home2.jpg'
import HOME3 from '../assets/imags/home/home3.jpg'
import HOME4 from '../assets/imags/home/home4.jpg'
import HOME5 from '../assets/imags/home/home5.jpg'
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
        <h1 className='carrouselcaption animate__animated  animate__slideInLeft'>El Yacht,Nordelta</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrousel"
          src={HOME2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1 className='carrouselcaption animate__animated  animate__slideInLeft'>Tipas,Nordelta</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="carrousel"
          src={HOME3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className='carrouselcaption animate__animated  animate__slideInLeft'>Riberas,Puertos</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrousel"
          src={HOME4}
          alt="Forth slide"
        />
        <Carousel.Caption>
        <h1 className='carrouselcaption animate__animated  animate__slideInLeft'>Araucarias,Puertos</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrousel"
          src={HOME5}
          alt="Fifth  slide"
        />
        <Carousel.Caption>
        <h1 className='carrouselcaption animate__animated  animate__slideInLeft'>Sauces,Nordelta</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default BoosstrapCarrousel;