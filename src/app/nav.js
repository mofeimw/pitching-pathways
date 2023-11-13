import Image from 'next/image'
import styles from './nav.module.css'

export default function Nav() {
  return (
    <header className={styles.nav}>
      <a href="#"><Image
        src="/logo.png"
        className={styles.navLogo}
        width={320}
        height={220}
      /></a>
      <ul className={styles.navList}>
        <li className={styles.navListEl}><a href="page.js">Home</a></li>
        <li className={styles.navListEl}><a href="about.html">About</a></li>
        <li className={styles.navListEl}><a href="#">Team</a></li>
        <li className={styles.navListEl}><a href="#">Join</a></li>
      </ul>
    </header>
  )
}
