import React from "react";
import github from "../../images/github.svg"
import linkedin from "../../images/linkedin.svg"
import email from "../../images/mail.svg"

export default function Footer() {
    return (
        <section className="footer">
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
                <a className="footer__description" href="https://www.linkedin.com/in/ana-cristina-mejia-lalinde-developer" target="_blank"
                    rel="noopener noreferrer">Email</a>
            </div>
                </div>
        </section>
    );
}