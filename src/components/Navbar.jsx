import React  from 'react'
import LOGO from '../assets/imags/logoblanco.png'
import { Link } from 'react-router-dom'
import{IoMdReorder} from 'react-icons/io'
import './navbar.css'
import { useState } from 'react'


  

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const[activeNav, setActiveNav]= useState('#')

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <Link to='/'>  <img src={LOGO} /></Link>
        <div className="hiddenLinks">
          <Link to="/"className='iconopen'> Home </Link>
          <Link to="/estudio"className='iconopen'> Estudio </Link>
          <Link to="/proyectos"className='iconopen'> Proyectos </Link>
          <Link to="/contact" className='iconopen'> Contacto </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/" id='icon'onClick={()=>setActiveNav('#')} className={activeNav == '#' ? 'active' :''}>Home </Link>
        <Link to="/estudio"id='icon'onClick={()=>setActiveNav('#')} className={activeNav == '#' ? 'active' :''}> Estudio </Link>
        <Link to="/proyectos"id='icon'onClick={()=>setActiveNav('#')} className={activeNav == '#' ? 'active' :''}> Proyectos </Link>
        <Link to="/Contact"id='icon'onClick={()=>setActiveNav('#')} className={activeNav == '#' ? 'active' :''}> Contacto </Link>
        <button onClick={toggleNavbar}>
          <IoMdReorder />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
