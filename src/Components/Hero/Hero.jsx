import React from "react";
import ana from "../../images/img-hero-removebg-preview.png"

export default function Hero() {
    return (
      <section id="inicio" className="hero">
        <div className="hero__content">
        <h1 className="hero__name">Ana Mejía</h1>
        <h2 className="hero__paragraph">Desarrolladora Web & UI | Creo páginas modernas para negocios</h2>
        <button className="hero__link">Trabajemos juntos</button>
        </div>
        <img className="hero__photo" src={ana} alt="Foto Ana Mejia" />
      </section>
    );
  }