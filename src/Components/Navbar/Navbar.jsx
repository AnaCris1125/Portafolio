import React, { useState, useEffect } from "react";
import logo from "../../images/logo-ana.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="nav">
        
        {/* Logo / Nombre */}
        <img className="navbar__logo" src={logo} alt="Logo Ana Mejia" />

        {/* Links */}
        <div className="navbar__links">
          <a href="#inicio" className="navbar__link">
            Inicio
          </a>
          <a href="#proyectos" className="navbar__link">
            Proyectos
          </a>
          <a href="#servicios" className="navbar__link">
            Servicios
          </a>
          <a href="#about" className="navbar__link">
            Sobre mí
          </a>
        </div>
      </nav>
    </header>
  );
}