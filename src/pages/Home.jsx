import React from 'react'
import { Link } from 'react-router-dom'
import IMAG from '../../src/assets/imags/home/flashes.png'
import HERO from '../assets/imags/1.jpg'
import './home.css'
import BoosstrapCarrousel from '../components/BoosstrapCarrousel'
import{BsFillCheckCircleFill}from 'react-icons/bs'
import{BsFillHouseDoorFill}from 'react-icons/bs'
import{IoIosConstruct}from 'react-icons/io'
import{FaBrain}from 'react-icons/fa'
import 'animate.css'

const Home = () => {
  return (
    <>
    <div>
    <BoosstrapCarrousel/>
    </div>
    <div className='homeim'>
  <img src={IMAG} alt="" className='imaghome'/>
  </div>
    <div className='Zone'>
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
      <h1 className='title' id='Text'>Obra nueva</h1>
      </div>
      <h3 className='subtitle'id='Text'>realizamos construcciones desde cero</h3>
    </div>
    <div  className='gogo4'>
      <div className='text'>
    <BsFillCheckCircleFill className='tic'/>
      <h1 className='title' id='Text'>Remodelaciones y aplicaciones </h1>
      </div>
      <h3 className='subtitle' id='Text'>renovamos tus espacios</h3>
    </div>
    </div>
</>
  )
}

export default Home