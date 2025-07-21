// ✅ src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>ClubPR</div>
      <nav className={styles.links}>
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/cursos">Cursos</Link>
        <Link to="/recursos">Recursos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default Navbar;