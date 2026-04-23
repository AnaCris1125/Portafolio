import React from "react";
import about from "../../images/img-about-removebg-preview.png"
import github from "../../images/github.svg"
import linkedin from "../../images/linkedin.svg"
import email from "../../images/mail.svg"

export default function About() {
  return (
    <section id="about" className='section__about'>
      <h2 className='about__title'>Sobre mi</h2>
      <div className='about__content'>
        <img className='about__img' src={about} alt="Foto autor" />
        <div className="about__content-paragraph">
          <p className='about__paragraph'>
            Soy Frontend Web Developer con enfoque en la creación de interfaces modernas, accesibles y responsivas.
            Me apasiona transformar ideas en experiencias digitales funcionales, cuidando tanto el diseño como la lógica detrás del código.
            Tengo experiencia trabajando con JavaScript, React, HTML, CSS y consumo de APIs, y disfruto enfrentar nuevos desafíos que me permitan seguir creciendo profesionalmente. Actualmente me encuentro en Australia, trabajando de forma remota y abierta a oportunidades internacionales.
          </p>
          <h2 className='about__title'>Habilidades técnicas</h2>
          <p className='about__paragraph'>Frontend: HTML, CSS, JavaScript, React, Vite
            Backend: Node.js, Express.js, MongoDB
            Otras: Git & GitHub, REST API, Figma, Testing (Jest), Desarrollo Software</p>
        </div>
        <div className="about__content-contacto">
          <h2 className="contacto__title">Contáctame</h2>
          <form className="contacto__form">
            <input type="text" placeholder="Nombre" className="input__contacto" />
            <input type="email" placeholder="Email" className="input__contacto" />
            <textarea placeholder="Mensaje" className="contacto__mensaje"></textarea>
            <button type="submit" className="button__enviar">Enviar mensaje</button>
          </form>
          <div className="footer__container">
            <div className="footer__container-list">
              <div className="footer__icono-circle">
                <img className="icono__img" src={github} alt="Icono gitHub" />
              </div>
              <a className="footer__description" href="https://github.com/AnaCris1125" target="_blank"
                rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="footer__container-list">
              <div className="footer__icono-circle">
                <img className="icono__img" src={linkedin} alt="Icono linkedin" />
              </div>
              <a className="footer__description" href="https://www.linkedin.com/in/ana-cristina-mejia-lalinde-developer" target="_blank"
                rel="noopener noreferrer">Linkdin</a>
            </div>
            <div className="footer__container-list">
              <div className="footer__icono-circle">
                <img className="icono__img" src={email} alt="Icono email" />
              </div>
              <a className="footer__description" href="mailto:amejialalinde@hotmail.com" target="_blank"
                rel="noopener noreferrer">Email</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}