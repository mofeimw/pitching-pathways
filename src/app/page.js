import Nav from './nav'
import SocialFooter from './socialfooter'
import Link from 'next/link';

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <Nav/>
      <main className={styles.hero}>
        <h1 className={styles.heroTitle}>Coming Soon!.</h1>
        {/* <h1 className={styles.heroTitle}>
          <Link href="/team">Meet the Team!</Link>
        </h1> */}
        

        <Image
          src="/logo.png"
          className={styles.heroLogo}
          width={420}
          height={280}
        />
        <p className={styles.heroPara}>Leap to the Forefront of A.I. Investment.</p>
        <div className={styles.heroForm}>
          <input className={styles.heroEmail} type="email" placeholder="your@email.com"/>
          <button className={styles.heroSubmit}>Notify Me!</button>
        </div>
      </main>
      <SocialFooter/>
    </div>
  )
}
