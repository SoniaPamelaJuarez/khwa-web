import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/header/navbar';
import Hola from './components/main/main';
import HolaMob from './components/main/mainMob';
import Servicios from './components/servicios/servicios';
import Identidad from './components/identidad/identidad';
import ContactUs from './components/contacto/contacto';
import Footer from './components/footer/footer';
import Wsp from './components/whatsapp/wsp';
import NavbarMobile from './components/header/navbarMobile';
import { useState, useEffect } from 'react';


function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 800px)").matches);
    };

    // Ejecutar handleResize al inicio para establecer el estado inicial
    handleResize();

    // Agregar el event listener para el cambio de tamaño de la pantalla
    window.addEventListener('resize', handleResize);

    // Limpieza del event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      {isMobile ? <NavbarMobile /> : <Navbar />}
      {isMobile ? <HolaMob /> : <Hola />}
      <Servicios />
      <Identidad />
      <ContactUs />
      <Footer />
      <Wsp />
    </div>
  );
}

export default App;
