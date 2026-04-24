import React from "react";

export default function Services() {
    return (
      <section id="servicios" className="servicios">
        <h2 className="servicios__title">Servicios</h2>
        <div className="servicios__card-list">
          <div className="servicios__card">
            <h3 className="servicios__card-title">Desarrollo Web</h3>
            <p className="servicios__card-description">Landing pages, webs para negocios, rediseños completos.</p>
          </div>
          <div className="servicios__card">
            <h3 className="servicios__card-title">Optimización UX</h3>
            <p className="servicios__card-description">Mejor experiencia de usuario y responsive en móviles.</p>
          </div>
          <div className="servicios__card">
            <h3 className="servicios__card-title">SEO & Velocidad</h3>
            <p className="servicios__card-description">Webs rápidas, SEO básico y rendimiento óptimo.</p>
          </div>
        </div>
      </section>
    );
  }