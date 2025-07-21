import styles from './Cursos.module.css';

function Cursos() {
  return (
    <div className={styles.container}>
      <h2>Categorías de Cursos</h2>
      <ul>
        <li>💻 Programación Básica</li>
        <li>🛢️ Bases de Datos</li>
        <li>🌐 Desarrollo Web</li>
      </ul>
    </div>
  );
}

export default Cursos;
