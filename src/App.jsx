import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <h1>Ana Mejía</h1>
      <h2>Fullstack Developer | React · Node · MongoDB</h2>
      <p>
        Desarrollo aplicaciones web modernas enfocadas en funcionalidad
        y experiencia de usuario.
      </p>
      <Link to="/projects">Ver proyectos</Link>
    </section>
  )
}

function Projects() {
  return (
    <section>
      <h2>Proyectos</h2>

      <h3>News Explorer (Full Stack)</h3>
      <p>
        Aplicación fullstack para buscar, guardar y gestionar artículos
        de noticias con autenticación.
      </p>
      <p>React · Node · Express · MongoDB · JWT</p>

      <h3>Around the U.S. (React)</h3>
      <p>
        Aplicación interactiva para compartir imágenes utilizando React
        y consumo de APIs.
      </p>
      <p>React · JavaScript · CSS</p>

      <h3>MCML – Sitio Web Corporativo</h3>
      <p>
        Sitio web corporativo diseñado y desarrollado para una empresa
        del sector construcción.
      </p>
      <p>HTML · CSS · JavaScript</p>
    </section>
  )
}

function About() {
  return (
    <section>
      <h2>Sobre mí</h2>
      <p>
        Soy Fullstack Developer con experiencia en React, Node.js,
        Express y MongoDB. Tengo más de 13 años de experiencia en el
        sector financiero, lo que me permite aportar pensamiento
        analítico, enfoque en el cliente y resolución de problemas al
        desarrollo de software.
      </p>
    </section>
  )
}

function Contact() {
  return (
    <section>
      <h2>Contacto</h2>
      <p>Email: tuemail@email.com</p>
      <p>LinkedIn: linkedin.com/in/tuperfil</p>
      <p>GitHub: github.com/tuperfil</p>
    </section>
  )
}

export default function App() {
  return (
    <>
      <nav>
        <a href="/">Home</a> | <a href="/projects">Proyectos</a> |{' '}
        <a href="/about">Sobre mí</a> | <a href="/contact">Contacto</a>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

