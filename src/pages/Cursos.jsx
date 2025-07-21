import styles from './Cursos.module.css'

function Cursos() {
  return (
    <div className={styles.container}>
      <h1>Cursos disponibles</h1>
      <div className={styles.cursosGrid}>
        <div className={styles.card}>
          <h2>Programación Básica</h2>
          <p>Variables, condicionales, ciclos y lógica general.</p>
        </div>
        <div className={styles.card}>
          <h2>Base de Datos</h2>
          <p>SQL, estructuras, relaciones y consultas.</p>
        </div>
        <div className={styles.card}>
          <h2>Desarrollo Web</h2>
          <p>HTML, CSS y JavaScript desde cero.</p>
        </div>
      </div>
    </div>
  )
}

export default Cursos
