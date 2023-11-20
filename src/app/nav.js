import Image from 'next/image'
import styles from './nav.module.css'
import Link from 'next/link';


export default function Nav() {
  return (
    <header className={styles.nav}>
      <a href="/"><Image
        src="/logo.png"
        className={styles.navLogo}
        width={320}
        height={220}
      />
      </a>
      <ul className={styles.navList}>
        <li className={styles.navListEl}><a href="/">Home</a></li>
        <li className={styles.navListEl}><a href="/about">About</a></li>
        <li className={styles.navListEl}>
          <Link href="/team">Meet the Team!</Link>
        </li>
        <li className={styles.navListEl}><a href="/join">Join</a></li>
      </ul>
    </header>
  )
}