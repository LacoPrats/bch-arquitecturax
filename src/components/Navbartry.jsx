import React  from 'react'
import LOGO from '../assets/imags/logoblanco.png'
import { Link } from 'react-router-dom'
import{IoMdReorder} from 'react-icons/io'
import './navbartry.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import{ImCross}from 'react-icons/im'
  

function Navbartry() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <Link to='/'><img src={LOGO} alt='logo' /></Link>
        <nav className="hiddenLinks">
          <NavLink to="/"className='iconopen'> Home </NavLink>
          <NavLink to="/estudio"className='iconopen'> Estudio </NavLink>
          <NavLink to="/proyectos"className='iconopen'> Proyectos </NavLink>
          <NavLink to="/contact" className='iconopen'> Contacto </NavLink>
          <button  onClick={toggleNavbar}><ImCross/></button>
        </nav>
      </div>
      <nav className="rightSide">
        <NavLink to="/" id='icon'>Home </NavLink>
        <NavLink to="/estudio"id='icon'> Estudio </NavLink>
        <NavLink to="/proyectos"id='icon'> Proyectos </NavLink>
        <NavLink to="/Contact"id='icon'> Contacto </NavLink>
        <button className='btn' onClick={toggleNavbar}>
          <IoMdReorder />
        </button>
      </nav>
    </div>
  );
}

export default Navbartry;
