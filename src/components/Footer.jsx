import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} ClubPR - Hecho por el profe Rafael</p>
    </footer>
  );
}

export default Footer;
