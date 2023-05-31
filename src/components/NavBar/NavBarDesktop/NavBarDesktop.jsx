import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./navbarDesktop.module.css"

const NavBarDesktop = ({routes}) => {
  console.log(routes);
  return (
    <div>
         <nav className={styles.navbarD}> 
{routes.map((objectroute,index)=>{
  return <div key={index} className={styles.navroutes}><NavLink to={objectroute.route}>{objectroute.name}</NavLink></div>
})}
        </nav>
    </div>
  )
}

export default NavBarDesktop