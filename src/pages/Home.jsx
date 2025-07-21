import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <h1>Bienvenido a la Plataforma de Rafael</h1>
      <p>Aprende a programar desde cero, con material claro, gratuito y directo.</p>
      <ul>
        <li>✅ Cursos gratuitos</li>
        <li>✅ Explicaciones paso a paso</li>
        <li>✅ Material descargable</li>
        <li>✅ Acceso desde cualquier dispositivo</li>
      </ul>
    </div>
  )
}

export default Home
