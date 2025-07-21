import styles from './CursoCard.module.css';

function CursoCard({ titulo, descripcion, imagen }) {
  return (
    <div className={styles.card}>
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <a href="#">Ver más</a>
    </div>
  );
}

export default CursoCard;
