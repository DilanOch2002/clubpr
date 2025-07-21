// src/pages/Recursos.jsx
import React from 'react';
import styles from './Recursos.module.css';
import gitImg from '../assets/git.jpg';
import figmaImg from '../assets/figma.jpg';
import vscImg from '../assets/vsc.png';
import canvaImg from '../assets/canva.png';
import vercelImg from '../assets/vercel.png';
import unsplashImg from '../assets/unsplash.png';

const recursos = [
  {
    nombre: 'GitHub',
    descripcion: 'Plataforma de control de versiones y colaboración basada en Git.',
    link: 'https://github.com',
    imagen: gitImg,
  },
  {
    nombre: 'Figma',
    descripcion: 'Herramienta de diseño de interfaces colaborativa en la nube.',
    link: 'https://www.figma.com',
    imagen: figmaImg,
  },
  {
    nombre: 'Visual Studio Code',
    descripcion: 'Editor de código fuente popular y altamente extensible.',
    link: 'https://code.visualstudio.com/',
    imagen: vscImg,
  },
  {
    nombre: 'Vercel',
    descripcion: 'Plataforma para despliegue rápido y sencillo de aplicaciones web.',
    link: 'https://vercel.com',
    imagen: vercelImg,
  },
  {
    nombre: 'Canva',
    descripcion: 'Herramienta de diseño gráfico simple y accesible para todos.',
    link: 'https://www.canva.com',
    imagen: canvaImg,
  },
  {
    nombre: 'Unsplash',
    descripcion: 'Banco de imágenes gratuitas de alta calidad.',
    link: 'https://unsplash.com',
    imagen: unsplashImg,
  },
];

function Recursos() {
  return (
    <div className={styles.recursos}>
      <h1>Recursos Gratuitos</h1>
      <div className={styles.grid}>
        {recursos.map((recurso, idx) => (
          <div key={idx} className={styles.card}>
            <img src={recurso.imagen} alt={recurso.nombre} />
            <h3>{recurso.nombre}</h3>
            <p>{recurso.descripcion}</p>
            <a href={recurso.link} target="_blank" rel="noreferrer">Visitar sitio</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recursos;