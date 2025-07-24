import React from 'react';
import styles from './Home.module.css';
import heroImg from '../assets/hero.jpg';

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <img src={heroImg} alt="Hero" className={styles.heroImage} />
        <div className={styles.heroText}>
          <h1>Bienvenido al Club de Programación UT Cancún</h1>
          <p>
            Aprende programación desde cero, domina herramientas reales y prepárate para el mundo profesional.
          </p>
        </div>
      </section>

      <section className={styles.destacado}>
        <h2>¿Qué puedes aprender aquí?</h2>
        <div className={styles.temas}>
          <div>
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React.</p>
          </div>
          <div>
            <h3>Backend</h3>
            <p>Node.js, Bases de Datos, APIs REST.</p>
          </div>
          <div>
            <h3>Herramientas</h3>
            <p>Git, Figma, Visual Studio Code, Vercel.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
