import React from "react";
import Navbar from "./components/Navbar";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import Estudio from "./pages/Estudio";
import Contact from "./pages/Contact";
import Itemdetail from "./components/Itemdetail";
import Navbartry from "./components/Navbartry";

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/estudio' exact element={<Estudio />} />
          <Route path='/proyectos' exact element={<Project />} />
          <Route path='/Contact' exact element={<Contact />} />
          <Route path='/detail/:id' exact element={<Itemdetail />} />
        </Routes>
          <Footer/>
        </BrowserRouter>
        
    </>
  );
}

export default App;