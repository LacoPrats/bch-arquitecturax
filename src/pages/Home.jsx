import React from 'react'
import { Link } from 'react-router-dom'
import IMAG from '../assets/imags/Sauces.jpeg'
import HERO from '../assets/imags/1.jpg'
import './home.css'
import BoosstrapCarrousel from '../components/BoosstrapCarrousel'
import{BsFillCheckCircleFill}from 'react-icons/bs'
import 'animate.css'

const Home = () => {
  return (
    <>
    <div>
    <BoosstrapCarrousel/>
    </div>
    <div className='gogo2'>
      <h1 className="title animate__animated animate__fadeInLeftBig " >Construimos tú sueño</h1>
      <h3  className="subtitle animate__animated animate__fadeInTopRight" >Que estas esperando?</h3>
    </div>
    <div className='Zone'>\
    <hr className='hrhome' />
    <div  className='gogo' >
      <div className='textsection'>
      <div className='text'>
    <BsFillCheckCircleFill className='tic'/>
      <h1 className='title' id='Text'>Proyectos</h1>
      </div>
      <h3 className='subtitle' id='Text'>diseñamos tus espacios a tu medida, de manera personalizada
</h3>
</div>
    </div>
    <div  className='gogo3'>
    <div className='text'>
    <BsFillCheckCircleFill className='tic'/>
      <h1 className='title' id='Text'>OBRA NUEVA</h1>
      </div>
      <h3 className='subtitle'id='Text'>realizamos construcciones desde cero</h3>
    </div>
    <div  className='gogo4'>
      <div className='text'>
    <BsFillCheckCircleFill className='tic'/>
      <h1 className='title' id='Text'>REMODELACIONES Y AMPLIACIONES </h1>
      </div>
      <h3 className='subtitle' id='Text'>renovamos tus espacios</h3>
    </div>
    </div>
</>
  )
}

export default Home