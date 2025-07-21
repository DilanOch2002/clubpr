import styles from './Contacto.module.css';

function Contacto() {
  return (
    <div className={styles.container}>
      <h2>Contacto</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Tu nombre" />
        <input type="email" placeholder="Tu correo" />
        <textarea placeholder="Escribí tu mensaje" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
