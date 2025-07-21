// src/pages/Contacto.jsx
import React from 'react';
import styles from './Contacto.module.css';

function Contacto() {
  return (
    <div className={styles.contacto}>
      <h1>Contáctanos</h1>
      <div className={styles.grid}>
        <form className={styles.formulario}>
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" />

          <label>Correo</label>
          <input type="email" placeholder="Tu correo" />

          <label>Mensaje</label>
          <textarea placeholder="Escribe tu mensaje"></textarea>

          <button type="submit">Enviar</button>
        </form>

        <div className={styles.info}>
          <h3>Información de contacto</h3>
          <p><strong>Edificio:</strong> H</p>
          <p><strong>Correo:</strong> rvillegas@utcancun.edu.mx</p>
          <p><strong>Dirección:</strong> División de Ingeniería - UT Cancún</p>
          <p><strong>Facebook:</strong> <a href="https://www.facebook.com/utcancun">UT Cancún</a></p>
          <p><strong>Instagram:</strong> <a href="https://www.instagram.com/ut_cancun">@ut_cancun</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
