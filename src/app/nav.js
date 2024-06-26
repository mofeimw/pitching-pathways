import Image from 'next/image'
import styles from './nav.module.css'

export default function Nav() {
  return (
    <header className={styles.nav}>
      <a href="/">
        <Image
          src="/logo-circle.png"
          className={styles.navLogo}
          width={320}
          height={320}
        />
        {/* <h1>Pitching Pathways</h1> */}
      </a>
      <ul className={styles.navList}>
        <li className={styles.navListEl}><a href="/">Home</a></li>
        <li className={styles.navListEl}><a href="/about">About</a></li>
        <li className={styles.navListEl}><a href="/team">Team</a></li>
        <li className={styles.navListEl}><a href="/join">Join</a></li>
      </ul>
    </header>
  )
}
