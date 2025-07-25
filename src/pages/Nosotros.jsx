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
        <strong>Esta plataforma de programación</strong> nace como una iniciativa para impulsar a los estudiantes en el mundo del desarrollo de software.
        Ubicado dentro de la Universidad, nuestro objetivo es formar programadores desde sus bases.
      </p>
      <p>
        Está liderado por el <strong>Profe Rafael</strong>, maestro con más de 20 años en la educación tecnológica. 
        Su compromiso con la enseñanza y pasión por el código han inspirado a generaciones de alumnos, 
        quienes encuentran aquí no solo recursos, sino también una guía cercana y actualizada para desarrollarse profesionalmente.
      </p>
    </div>
  );
}

export default Nosotros;