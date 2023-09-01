
import React,{useState} from 'react'
import styles from "./navbarMobile.module.css"
import { NavLink } from 'react-router-dom'
import{ImCross}from 'react-icons/im'
import{IoMdReorder} from 'react-icons/io'
const NavBarMobile = ({routes}) => {
  const [NavbarButton,SetNavbarBotton]=useState(null)
  return (
    <div>
      {NavbarButton==true?(
    <nav className={styles.navbarM}> 
    {routes.map((objectroute,index)=>{
    return <div key={index} className={styles.navroutesM}><NavLink to={objectroute.route}>{objectroute.name}</NavLink></div>
    })}
       </nav>
      ):null}
{NavbarButton==true?(<button className={styles.navBtn} onClick={()=>SetNavbarBotton(false)}><ImCross/></button>):<button className={styles.navBtn} onClick={()=>SetNavbarBotton(true)}><IoMdReorder/></button>}
</div>
  )
}

export default NavBarMobile 