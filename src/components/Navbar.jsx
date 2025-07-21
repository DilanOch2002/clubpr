import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>ClubPR</h1>
      <ul className={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/cursos">Cursos</Link></li>
        <li><Link to="/recursos">Recursos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
