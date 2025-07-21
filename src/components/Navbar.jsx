import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/cursos">Cursos</Link></li>
        <li><Link to="/recursos">Recursos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
