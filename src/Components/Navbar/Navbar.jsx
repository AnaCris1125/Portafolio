import React, { useState, useEffect } from "react";
import logo from "../../images/logo-ana.png";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="nav">

        {/* Logo */}
        <a href="#inicio">
          <img
            className="navbar__logo"
            src={logo}
            alt="Ana Mejia Logo"
          />
        </a>

        {/* Desktop Navigation */}
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

          <a href="#contacto" className="navbar__cta">
            Hablemos
          </a>
        </div>

        {/* Burger mobile */}
        <button
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#inicio" onClick={closeMenu}>
          Inicio
        </a>

        <a href="#proyectos" onClick={closeMenu}>
          Proyectos
        </a>

        <a href="#servicios" onClick={closeMenu}>
          Servicios
        </a>

        <a href="#about" onClick={closeMenu}>
          Sobre mí
        </a>

        <a
          href="#contacto"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Hablemos
        </a>
      </div>

    </header>
  );
}





// import React, { useState, useEffect } from "react";
// import logo from "../../images/logo-ana.png"

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`navbar ${
//         scrolled ? "bg-white shadow-md" : "bg-transparent"
//       }`}
//     >
//       <nav className="nav">
        
//         {/* Logo / Nombre */}
//         <img className="navbar__logo" src={logo} alt="Logo Ana Mejia" />

//         {/* Links */}
//         <div className="navbar__links">
//           <a href="#inicio" className="navbar__link">
//             Inicio
//           </a>
//           <a href="#proyectos" className="navbar__link">
//             Proyectos
//           </a>
//           <a href="#servicios" className="navbar__link">
//             Servicios
//           </a>
//           <a href="#about" className="navbar__link">
//             Sobre mí
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// }