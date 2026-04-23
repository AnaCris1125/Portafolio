import React from "react";
import news from "../../images/news.JPEG"
import around from "../../images/around.jpeg"
import mcml from "../../images/mcml.JPEG"

import { useState } from "react";
import { Card, CardModal } from "../Card/Card";


const proyectos = [
  {
    img: news, title: "News Explorer (Full Stack)",
    shortDesc: "Aplicación fullstack para buscar, guardar y gestionar artículos de noticias con autenticación.",
    longDesc: "Detalles del Proyecto 1...",
    demo: "",
    code: "https://github.com/AnaCris1125/news-explorer-frontend"
  },


  {
    img: around, title: "Around the U.S. (React)",
    shortDesc: "Aplicación interactiva para compartir imágenes utilizando React y consumo de APIs.",
    longDesc: "Detalles del Proyecto 2...",
    demo: "",
    code: "https://github.com/AnaCris1125/web_project_api_full"
  },
  {
    img: mcml, title: "MCML – Sitio Web Corporativo",
    shortDesc: "Sitio web corporativo diseñado y desarrollado para una empresa del sector construcción.",
    longDesc: "Detalles del Proyecto 3...",
    demo: "",
    code: "https://github.com/AnaCris1125/MCML"
  },
];

export default function Proyectos() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="section__card-projects">
      <h1 className="projects__title">Proyectos destacados</h1>
      <h2 className="projects__subtitle">Algunos de mis trabajos recientes</h2>
      <div className="project__card-list">
        {proyectos.map((p, i) => (
          <Card
            key={i}
            img={p.img}
            title={p.title}
            shortDesc={p.shortDesc}
            longDesc={p.longDesc}
            demo={p.demo}
            code={p.code}
            onClick={() => setActiveProject(p)}
          />
        ))}
      </div>

      {activeProject && (
        <CardModal
          img={activeProject.img}
          title={activeProject.title}
          longDesc={activeProject.longDesc}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}


// export default function Projects() {
//       return (
//         <section className='section__card-projects'>
//           <h1 className="projects__title">Proyectos destacados</h1>
//           <h2 className="projects__subtitle">Algunos de mis trabajos recientes</h2>
//           <div className='project__card-list'>
//             <div className='project__card'> 
//               <img className='project__card_img' src={news} alt="imagen pagina news" />
//               <div className="card__overlay"></div> 
//               <div className="project__card_content">
//               <h3 className='project__card_title'>News Explorer (Full Stack)</h3>
//               <p className='project__card_paragraph1'>
//                 Aplicación fullstack para buscar, guardar y gestionar artículos
//                 de noticias con autenticación.
//               </p>
//               <p className='project__card_paragraph2'>React · Node · Express · MongoDB · JWT</p>
//               <button className="project__button">Ver proyecto</button>
//               <button className="project__button">Ver código</button>
//               </div>    
//               </div>
//             <div className='project__card'>
//             <img className='project__card_img' src={around} alt="Imagen around" />
//             <div className="card__overlay"></div> 
//             <div className="project__card_content">
//             <h3 className='project__card_title'>Around the U.S. (React)</h3>
//               <p className='project__card_paragraph1'>
//                 Aplicación interactiva para compartir imágenes utilizando React
//                 y consumo de APIs.
//               </p>
//               <p className='project__card_paragraph2'>React · JavaScript · CSS</p>
//               <button className="project__button">Ver proyecto</button>
//               <button className="project__button">Ver código</button>
//             </div>    
//             </div>
//             <div className='project__card'>
//               <img className='project__card_img' src={mcml} alt="imagen pagina mcml" />
//               <div className="card__overlay"></div> 
//               <div className="project__card_content">
//               <h3 className='project__card_title'>MCML – Sitio Web Corporativo</h3>
//               <p className='project__card_paragraph1'>
//                 Sitio web corporativo diseñado y desarrollado para una empresa
//                 del sector construcción.
//               </p>
//               <p className='project__card_paragraph2'>HTML · CSS · JavaScript</p>
//               <button className="project__button">Ver proyecto</button>
//               <button className="project__button">Ver código</button>
//               </div>
//             </div>
//           </div>
//         </section>
//       )
//     }