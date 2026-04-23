import React, { useState } from "react";
// import cocina from "../../images/remodelacion1-cocina.jpg";

function Card({ img, title, shortDesc, longDesc, demo, code, onClick }) {
  return (
    <div className="project__card" onClick={onClick}>
      <img src={img} alt={title} className="project__card_img" />
      <div className="project__card_content">
        <h3 className="project__card_title">{title}</h3>
        <p className="project__card_paragraph1">{shortDesc}</p>
      </div>
       {/* BOTONES */}
       <div className="project__buttons">
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="project__button"
          >
            Ver proyecto
          </a>

          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="project__button"
          >
            Ver código
          </a>
       </div>   
    </div>
  );
}

function CardModal({ img, title, longDesc, onClose }) {
  const [flip, setFlip] = useState(false);

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__card" onClick={(e) => e.stopPropagation()}>
        <div
          className={`card__inner ${flip ? "flip" : ""}`}
          onClick={() => setFlip(!flip)}
        >
          {/* FRONT */}
          <div className="card__front">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>Click para ver más</p>
          </div>

          {/* BACK */}
          <div className="card__back">
            <h2>{title}</h2>
            <p>{longDesc}</p>
            {/* <img className="card__back-img" src={cocina} alt="cocina" /> */}
            <button onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card, CardModal };