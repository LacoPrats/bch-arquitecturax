import React from 'react'
import Footer from "../components/Footer/Footer";
import Navbartry from "../components/NavBar/Navbartry";


const MainLayout = ({children}) => {
    return (
        <>
            <Navbartry />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout