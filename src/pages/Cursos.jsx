// 📁 src/pages/Cursos.jsx

import React from 'react';
import CursoCard from '../components/CursoCard';
import styles from './Cursos.module.css';

// Importa las imágenes desde la carpeta assets
import curso1Img from '../assets/curso1.jpg';
import htmlCssImg from '../assets/html_css.jpg';
import javascriptImg from '../assets/javascript.png';
import gitGitHubImg from '../assets/git_github.jpg';

function Cursos() {
  return (
    <div className={styles.container}>
      <h1>Cursos Introductorios</h1>
      <p>Aprendé con contenido gratuito y bien estructurado, ideal para principiantes.</p>

      {/* Contenedor de los cursos */}
      <div className={styles.grid}>
        <CursoCard
          titulo="Introducción a la Programación"
          descripcion="Aprende qué es programar, lógica básica, algoritmos y cómo comenzar."
          imagen={curso1Img}  // Usamos la imagen importada
        />
        <CursoCard
          titulo="HTML, CSS y Responsive Design"
          descripcion="Construye sitios web modernos desde cero."
          imagen={htmlCssImg}  // Usamos la imagen importada
        />
        <CursoCard
          titulo="JavaScript para Principiantes"
          descripcion="Domina lo esencial para dar vida a tus páginas web."
          imagen={javascriptImg}  // Usamos la imagen importada
        />
        <CursoCard
          titulo="Introducción a Git y GitHub"
          descripcion="Aprende a trabajar con control de versiones y proyectos colaborativos."
          imagen={gitGitHubImg}  // Usamos la imagen importada
        />
      </div>
    </div>
  );
}

export default Cursos;
