import React from 'react'
import IMAGs from '../../src/assets/imags/estudio/estudio-A-.jpg'
import IMAGs1 from '../../src/assets/imags/estudio/estudio-B-.jpg'
import IMAGs2 from '../../src/assets/imags/estudio/estudio-C-.jpg'
import IMAGs3 from '../../src/assets/imags/estudio/estudio-D-.jpg'
import IMAGs4 from '../../src/assets/imags/estudio/estudio-E-.jpg'
import IMAGs5 from '../../src/assets/imags/estudio/estudio-F-.jpg'
import { FaAssistiveListeningSystems} from 'react-icons/fa'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { AiOutlineFire } from 'react-icons/ai'
import { GiStairsGoal } from 'react-icons/gi'
import "./estudio.css";

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
            <div className='introtext__container'>
                <div className='introtext__wrapper'>
                    <h3 className='introtext'>Somos un equipo de profesionales dedicados al diseno de proyectos, direccion y construccion de obra</h3>
                </div>
                <div className="rectestudio"></div>
            </div>
            <div className="data__container animate__animated  animate__slideInLeft">
                <div className='infocontainer'>
                    <FaAssistiveListeningSystems className='ticestudio' />
                    <h2 className='estudioinfo'>NUESTRO TRABAJO SE CENTRA EN ESCUCHAR E INTERPRETAR LOS DESEOS DEL CLIENTE PARA PODER DARLES UNA FORMA CONCRETA Y EJECUTARLOS, CONVIRTIENDO LAS IDEAS EN REALIDAD.</h2>
                </div>
                <div className='infocontainer'>
                    <AiOutlineFundProjectionScreen className='ticestudio' />
                    <h2 className='estudioinfo'>CADA PROYECTO PARA NOSOTROS ES ÚNICO E IRREPETIBLE, DANDO FORMA A ESPACIOS A MEDIDA SEGÚN LAS NECESIDADES DE CADA CLIENTE.</h2>
                </div>
                <div className='infocontainer'>
                    <AiOutlineFire className='ticestudio' />
                    <h2 className='estudioinfo'>NUESTRA PASIÓN POR ESTE TRABAJO SE BASA EN QUE CREEMOS QUE A TRAVÉS DEL DISEÑO SE PUEDE LOGRAR UN MAYOR BIENESTAR DENTRO DE LOS ESPACIOS QUE HABITAMOS.</h2>
                </div>
                <div className='infocontainer'>
                    <GiStairsGoal className='ticestudio' />
                    <h2 className='estudioinfo'>NUESTRO OBJETIVO PRINCIPAL ES LOGRAR UNA ARQUITECTURA QUE SE ADAPTE A CADA INDIVIDUO,  ACOMPAÑANDO Y GUIANDO A NUESTROS CLIENTES EN EL PROCESO.</h2>
                </div>
            </div>
            <div className='dedicamosContaner'>
                <h2>En BCH Arquitectura nos dedicamos al diseño y ejecución de proyectos de Arquitecttura, desde reformas y ampliaciones a construcciones desde cero. Cada proyecto es resuelto por un equipo de profesionales que trabajan con pasión y dedicación para interpretar los deseos de los comitentes y transformarlos en espacios habitables, a medida.</h2>
                <div className='valoresContainer'>
                <div className='valores__child'> 
                    <ul>
                        <h4>NUESTROS VALORES</h4>
                        <li className='valoresinfo'>COMPROMISO</li>
                        <li className='valoresinfo'>CONFIANZA</li>
                        <li className='valoresinfo'>FLEXIBILIDAD</li>
                        <li className='valoresinfo'>DEDICACION</li>
                        <li className='valoresinfo'>TRABAJO EN EQUIPO</li>
                    </ul>
                </div>
                <div className='valores__child'>
                    <ul>
                        <h4>NUESTRA PROPUESTA DE ARQUITECTURA</h4>
                        <li className='valoresinfo'>ESPACIOS FLEXIBLES Y ADAPTABLES </li>
                        <li className='valoresinfo'>AMPLITUD E INTEGRACION</li>
                        <li className='valoresinfo'>CALIDEZ ESPACIAL</li>
                        <li className='valoresinfo'>ATENCION AL DETALLE</li>
                        <li className='valoresinfo'>FCONEXIÓN CON LA NATURALEZA</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className='estudio_image__container'>
                <img className='estudioimag' src={IMAGs} alt="" />
                <img className='estudioimag' src={IMAGs1} alt="" />
                <img className='estudioimag' src={IMAGs2} alt="" />
                <img className='estudioimag' src={IMAGs3} alt="" />
                <img className='estudioimag' src={IMAGs4} alt="" />
                <img className='estudioimag' src={IMAGs5} alt="" />
            </div>
        </div>

    )
}

export default Estudio;