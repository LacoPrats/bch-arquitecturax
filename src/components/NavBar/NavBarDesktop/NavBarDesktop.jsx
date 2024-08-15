import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./navbarDesktop.module.css";

const NavBarDesktop = ({ routes }) => {
  return (
    <nav className={styles.navbarD}>
      {routes.map((objectroute, index) => (
        <div key={index} className={styles.navroutes}>
          <NavLink 
            to={objectroute.route} 
            className={({ isActive }) => 
              isActive ? `${styles.navroutes} ${styles.active}` : styles.navroutes
            }
          >
            {objectroute.name}
          </NavLink>
        </div>
      ))}
    </nav>
  );
}

export default NavBarDesktop;
