// src/pages/Nosotros.jsx
import React from 'react';
import styles from './Nosotros.module.css';
import plantelImg from '../assets/plantel.png';

function Nosotros() {
  return (
    <div className={styles.nosotros}>
      <h1>Sobre Nosotros</h1>
      <img src={plantelImg} alt="Plantel UT Cancún" className={styles.imagen} />
      <p>
        El <strong>Club de Programación UT Cancún</strong> nace como una iniciativa para impulsar a los estudiantes en el mundo del desarrollo de software.
        Ubicado en Cancún, Quintana Roo, dentro de la Universidad Tecnológica de Cancún, nuestro objetivo es formar programadores desde sus bases.
      </p>
      <p>
        Está liderado por el <strong>Ing. Rafael Villegas</strong>, maestro de tiempo completo con más de 10 años en la educación tecnológica. Tutor en programación, ha preparado
        equipos de estudiantes que han destacado en concursos de desarrollo y hackathons a nivel nacional.
      </p>
    </div>
  );
}

export default Nosotros;