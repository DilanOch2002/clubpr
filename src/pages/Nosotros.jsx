// src/pages/Nosotros.jsx
import React from 'react';
import styles from './Nosotros.module.css';
import plantelImg from '../assets/curso2.jpg';

function Nosotros() {
  return (
    <div className={styles.nosotros}>
  <h1>Sobre Nosotros</h1>
  <img src={plantelImg} alt="Plantel UT Cancún" className={styles.imagen} />
  <p>
    <strong>Esta plataforma de programación</strong> surge con el propósito de apoyar a los estudiantes en sus primeros pasos dentro del desarrollo de software.
    Buscamos brindar bases sólidas que impulsen su crecimiento como futuros programadores.
  </p>
  <p>
    El proyecto está guiado por el <strong>Profe Rafael</strong>, docente con más de dos décadas en la enseñanza tecnológica. 
    Su experiencia y vocación han motivado a muchos jóvenes a formarse con herramientas actualizadas y un enfoque práctico.
  </p>
</div>
  );
}

export default Nosotros;