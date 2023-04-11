import React from 'react'
import './estudio.css'
import IMAGs from '../../src/assets/imags/estudioimg.jpg'
import LOGO from '../../src/assets/imags/logonegro.png'

const Estudio = () => {
    return (
        <div>
        <div className='home2'>
            <div className="headerContainer">
                <div className='logoestudio'>
                    <h1 className='proyecthero animate__animated animate__zoomIn'>ESTUDIO</h1>
                </div>
            </div>
            </div>
            <div className='container__logo'>
           <img className='loggo' src={LOGO} alt="" />
            </div>
            <div className="data__container">
                <h2 className='estudioinfo'>SOMOS UN EQUIPO DE PROFESIONALES DEDICADOS AL DISEÑO DE PROYECTOS, DIRECCION Y CONSTRUCCION</h2>
                <h2 className='estudioinfo'>NUESTRO TRABAJO SE CENTRA EN ESCUCHAR E INTERPRETAR LOS DESEOS DEL CLIENTE PARA PODER DARLES UNA FORMA CONCRETA Y EJECUTARLOS, CONVIRTIENDO LAS IDEAS EN REALIDAD.</h2>
                <h2 className='estudioinfo'>CADA PROYECTO PARA NOSOTROS ES ÚNICO E IRREPETIBLE, DANDO FORMA A ESPACIOS A MEDIDA SEGÚN LAS NECESIDADES DE CADA CLIENTE.</h2>
                <h2 className='estudioinfo'>NUESTRA PASIÓN POR ESTE TRABAJO SE BASA EN QUE CREEMOS QUE A TRAVÉS DEL DISEÑO SE PUEDE LOGRAR UN MAYOR BIENESTAR DENTRO DE LOS ESPACIOS QUE HABITAMOS.</h2>
                <h2 className='estudioinfo'>NUESTRO OBJETIVO PRINCIPAL ES LOGRAR UNA ARQUITECTURA QUE SE ADAPTE A CADA INDIVIDUO,  ACOMPAÑANDO Y GUIANDO A NUESTROS CLIENTES EN EL PROCESO.</h2>
            </div>
            <div className='estudio_image__container'> 
            <img className='estudioimag' src={IMAGs} alt="" />
            </div>
        </div>
    
    )
}

export default Estudio;