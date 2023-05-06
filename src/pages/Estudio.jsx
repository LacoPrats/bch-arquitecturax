import React from 'react'
import './estudio.css'
import IMAGs from '../../src/assets/imags/estudioimg.jpg'
import IMAGs1 from '../../src/assets/imags/estudio2.jpg'
import IMAGs2 from '../../src/assets/imags/estudio3.jpg'
import IMAGs3 from '../../src/assets/imags/estudio4.jpg'
import LOGO from '../../src/assets/imags/logonegro.png'
import{BsFillCheckCircleFill}from 'react-icons/bs'
import{AiOutlineTeam}from 'react-icons/ai'
import{GrAssistListening}from 'react-icons/gr'
import{AiOutlineFundProjectionScreen}from 'react-icons/ai'
import{AiOutlineFire}from 'react-icons/ai'
import{GiStairsGoal}from 'react-icons/gi'

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
            <div className="data__container animate__animated  animate__slideInLeft">
                <div className='infocontainer'>
            <AiOutlineTeam className='ticestudio'/>
                <h2 className='estudioinfo'>SOMOS UN EQUIPO DE PROFESIONALES DEDICADOS AL DISEÑO DE PROYECTOS, DIRECCION Y CONSTRUCCION</h2>
                </div>
                <div className='infocontainer'>
                <GrAssistListening className='ticestudio'/>
                <h2 className='estudioinfo'>NUESTRO TRABAJO SE CENTRA EN ESCUCHAR E INTERPRETAR LOS DESEOS DEL CLIENTE PARA PODER DARLES UNA FORMA CONCRETA Y EJECUTARLOS, CONVIRTIENDO LAS IDEAS EN REALIDAD.</h2>
                </div>
                <div className='infocontainer'>
                <AiOutlineFundProjectionScreen className='ticestudio'/>
                <h2 className='estudioinfo'>CADA PROYECTO PARA NOSOTROS ES ÚNICO E IRREPETIBLE, DANDO FORMA A ESPACIOS A MEDIDA SEGÚN LAS NECESIDADES DE CADA CLIENTE.</h2>
                </div>
                <div className='infocontainer'>
                <AiOutlineFire className='ticestudio'/>
                <h2 className='estudioinfo'>NUESTRA PASIÓN POR ESTE TRABAJO SE BASA EN QUE CREEMOS QUE A TRAVÉS DEL DISEÑO SE PUEDE LOGRAR UN MAYOR BIENESTAR DENTRO DE LOS ESPACIOS QUE HABITAMOS.</h2>
                </div>
                <div className='infocontainer'>
                <GiStairsGoal className='ticestudio'/>
                <h2 className='estudioinfo'>NUESTRO OBJETIVO PRINCIPAL ES LOGRAR UNA ARQUITECTURA QUE SE ADAPTE A CADA INDIVIDUO,  ACOMPAÑANDO Y GUIANDO A NUESTROS CLIENTES EN EL PROCESO.</h2>
            </div>
            </div>
            <div className='estudio_image__container'> 
            <img className='estudioimag' src={IMAGs} alt="" />
            <img className='estudioimag' src={IMAGs1} alt="" />
            <img className='estudioimag' src={IMAGs2} alt="" />
            <img className='estudioimag' src={IMAGs3} alt="" />
            </div>
        </div>
    
    )
}

export default Estudio;