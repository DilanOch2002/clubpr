import styles from './Recursos.module.css'

function Recursos() {
  return (
    <div className={styles.container}>
      <h1>Recursos gratuitos</h1>
      <ul>
        <li><a href="#">📄 Guía de programación PDF</a></li>
        <li><a href="#">📘 Ejercicios prácticos</a></li>
        <li><a href="#">💾 Archivos de ejemplo</a></li>
      </ul>
    </div>
  )
}

export default Recursos
