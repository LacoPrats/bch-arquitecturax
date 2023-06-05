import React, {useEffect, useState}  from 'react'
import LOGO from '../../assets/imags/logoblanco.png'
import './navbartry.css'
import { NavLink } from 'react-router-dom'
import routes from "./routes"
import NavBarDesktop from "./NavBarDesktop/NavBarDesktop"
import NavBarMobile from "./NavBarMobile/NavBarMobile"

function Navbartry() {

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const idEvent = window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    })
    return () => window.removeEventListener("resize", idEvent)
  }, [screenSize])

  return (
    <header>
      <div className='navbardesk'>
        <img src={LOGO} className='imagenav' />
        {
          screenSize > 1200 
          ? <NavBarDesktop routes={routes} />
          : <NavBarMobile routes={routes} />
        }
      </div>
    </header>
  );
}

export default Navbartry;
