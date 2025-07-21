import styles from './Contacto.module.css'

function Contacto() {
  return (
    <div className={styles.container}>
      <h1>Contacto</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <textarea placeholder="Escribe tu mensaje aquí..." required />
        <button type="submit">Enviar</button>
      </form>
      <p>También puedes escribir a: <a href="mailto:rafaelprofesor@correo.com">rafaelprofesor@correo.com</a></p>
    </div>
  )
}

export default Contacto
