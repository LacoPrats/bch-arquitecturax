import React from 'react'
import Acacias2 from '../assets/imags/proyects/acacias/Acacia2.jpg'
import Acacias3 from '../assets/imags/proyects/acacias/Acacia3.jpg'
import Acacias4 from '../assets/imags/proyects/acacias/Acacia4.jpg'
import Acacias1 from '../assets/imags/Acacia.jpg'
import './acacias.css'
const Acacias = () => {
  return (
    <div className='proyectoacacia'>
        <h1 className='proyectitle'>Acacias</h1>
        <img src={Acacias1} className='acaciaimage' alt="" />
        <img src={Acacias2} className='acaciaimage'  alt="" />
        <img src={Acacias3} className='acaciaimage' alt="" />
    </div>
  )
}

export default Acacias