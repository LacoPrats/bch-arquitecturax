import React from "react";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import Estudio from "./pages/Estudio";
import Contact from "./pages/Contact";
import Itemdetail from "./components/Itemdetail";
import Navbartry from "./components/NavBar/Navbartry";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<MainLayout><Home /></MainLayout> } />
          <Route path='/estudio' exact element={<MainLayout><Estudio /></MainLayout>} />
          <Route path='/proyectos' exact element={<MainLayout><Project /></MainLayout>} />
          <Route path='/Contact' exact element={<MainLayout><Contact /></MainLayout>} />
          <Route path='/detail/:id' exact element={<MainLayout><Itemdetail /></MainLayout>} />
          <Route path='/prueba' exact element={<Navbartry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;