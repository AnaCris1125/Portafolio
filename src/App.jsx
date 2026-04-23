import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
// import Contact from "./Components/Contact/Contact";
// import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <About />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;






// import mail from "./images/mail.svg"
// import linkedin from "./images/linkedin.svg"
// import github from "./images/github.svg"
// import news from "./images/news.JPEG"
// import around from "./images/around.jpeg"
// import mcml from "./images/mcml.JPEG"
// import about from "./images/icono.jpg"
// import home from "./images/fondo-home.png"
// import react from "./images/icono-react.png"
// import html from "./images/icono-html.png"
// import java from "./images/icono-java.png"



// function Home() {
//   return (
//     <section className="home">
//   <div className="home__content">
//     <div className="home__text">
//       <h1 className='home__title'>Hola, soy Ana Cristina</h1>
//       <h2 className='home__subtitle'>Frontend Web Developer</h2>
//       <p className='home__paragraph'>Transformo ideas en experiencias digitales modernas y funcionales.</p>   
//       <div className="home__tech">
//         <img src={react} alt="React" />
//         <img src={java} alt="JavaScript" />
//         <img src={html} alt="HTML" />
//       </div>
//       <div className="home__buttons">
//         <a href="/projects" className="btn">Ver proyectos</a>
//         <a href="/public/assets/Web Developer Jr. _ Ana Mejia--converted.html" className="btn" target="_blank">Ver CV</a>
//       </div>
//     </div>

//     <div className="home__image">
//       <img src={home} alt="Desarrollo web" />
//     </div>
//   </div>
// </section>
//   //   <section className='section__home'>
//   //     <h1 className='home__title'>Ana Cristina Mejía</h1>
//   //     <h2 className='home__subtitle'>Fullstack Developer | React · Node · MongoDB</h2>
//   //     <p className='home__paragraph'>
//   //       Desarrollo aplicaciones web modernas enfocadas en funcionalidad
//   //       y experiencia de usuario.
//   //     </p>
//   //   </section>
//   )
// }

// function CV() {
//   return (
//     <section className='section__cv' id="cv">
//       <iframe
//         src="/public/assets/Web Developer Jr. _ Ana Mejia--converted.html"
//         width="100%"
//         height="1000px"
//         style={{ border: "none" }}
//         title="Mi CV"
//       />
//     </section>
//   );
// };


// function Projects() {
//   return (
//     <section className='section__card-projects'>
//       <div className='project__card-list'>
//         <div className='project__card'> 
//           <img className='project__card_img' src={news} alt="imagen pagina news" />
//           <div className="card__overlay"></div> 
//           <div className="project__card_content">
//           <h3 className='project__card_title'>News Explorer (Full Stack)</h3>
//           <p className='project__card_paragraph1'>
//             Aplicación fullstack para buscar, guardar y gestionar artículos
//             de noticias con autenticación.
//           </p>
//           {/* <p className='project__card_paragraph2'>React · Node · Express · MongoDB · JWT</p> */}
//           </div>    
//           </div>
//         <div className='project__card'>
//         <img className='project__card_img' src={around} alt="Imagen around" />
//         <div className="card__overlay"></div> 
//         <div className="project__card_content">
//         <h3 className='project__card_title'>Around the U.S. (React)</h3>
//           <p className='project__card_paragraph1'>
//             Aplicación interactiva para compartir imágenes utilizando React
//             y consumo de APIs.
//           </p>
//           {/* <p className='project__card_paragraph2'>React · JavaScript · CSS</p> */}
//         </div>    
//         </div>
//         <div className='project__card'>
//           <img className='project__card_img' src={mcml} alt="imagen pagina mcml" />
//           <div className="card__overlay"></div> 
//           <div className="project__card_content">
//           <h3 className='project__card_title'>MCML – Sitio Web Corporativo</h3>
//           <p className='project__card_paragraph1'>
//             Sitio web corporativo diseñado y desarrollado para una empresa
//             del sector construcción.
//           </p>
//           {/* <p className='project__card_paragraph2'>HTML · CSS · JavaScript</p> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function About() {
//   return (
//     <section className='section__about'>
//       <img className='about__img' src={about} alt="Foto autor" />
//       <div className='about__content'>
//         <h2 className='about__title'>Sobre mi</h2>
//         <p className='about__paragraph'>
//           Soy Frontend Web Developer con enfoque en la creación de interfaces modernas, accesibles y responsivas.
//           Me apasiona transformar ideas en experiencias digitales funcionales, cuidando tanto el diseño como la lógica detrás del código.
//           Tengo experiencia trabajando con JavaScript, React, HTML, CSS y consumo de APIs, y disfruto enfrentar nuevos desafíos que me permitan seguir creciendo profesionalmente. Actualmente me encuentro en Australia, trabajando de forma remota y abierta a oportunidades internacionales.
//         </p>
//         <h2 className='about__title'>Habilidades técnicas</h2>
//         <p className='about__paragraph'>Frontend: HTML, CSS, JavaScript, React, Vite
//           Backend: Node.js, Express.js, MongoDB
//           Otras: Git & GitHub, REST API, Figma, Testing (Jest), Desarrollo Software</p>
//       </div>
//     </section>
//   )
// }

// function Contact() {
//   return (
//     <section className='section__contactos'>
//       <h2 className='contacto__title'>Contacto</h2>
//       <div className='contacto__content'>
//         <img className='contacto__icon' src={mail} alt="icono mail" />
//         <p>amejialalinde@hotmail.com</p>
//       </div>
//       <div className='contacto__content'>
//         <img className='contacto__icon' src={linkedin} alt="icono linkedin" />
//         <a className='contacto__link'
//           href="https://www.linkedin.com/in/ana-cristina-mejia-lalinde-developer/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >Linkedin</a>
//       </div>
//       <div className='contacto__content'>
//         <img className='contacto__icon' src={github} alt="icono github" />
//         <a className='contacto__link' 
//           href="https://github.com/AnaCris1125"
//           target="_blank"
//           rel="noopener noreferrer"
//         >GitHub</a>
//       </div>
//     </section>
//   )
// }

// export default function App() {
//   return (
//     <>
//       <nav style={{ marginBottom: '20px' }}>
//         <Link to="/">Home</Link> |{' '}
//         <Link to="/CV">CV</Link> |{' '}
//         <Link to="/projects">Proyectos</Link> |{' '}
//         <Link to="/about">Sobre mí</Link> |{' '}
//         <Link to="/contact">Contacto</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/CV" element={<CV />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   )
// }
