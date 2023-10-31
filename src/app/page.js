import Nav from './nav'
import SocialFooter from './socialfooter'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <Nav/>
      <main className={styles.hero}>
        <h1 className={styles.heroTitle}>Coming Soon.</h1>
        <Image
          src="/logo.png"
          className={styles.heroLogo}
          width={320}
          height={220}
        />
        <p className={styles.heroPara}>Leap to the forefront of A.I. investment.</p>
        <div className={styles.heroForm}>
          <input className={styles.heroEmail} type="email" placeholder="your@email.com"/>
          <button className={styles.heroSubmit}>Notify Me!</button>
        </div>
      </main>
      <SocialFooter/>
    </div>
  )
}
