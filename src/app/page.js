"use client";

import Nav from './nav'
import Socials from './socials'
import Footer from './footer'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  let email = ""

  function emailChange(e) {
    email = e.target.value
  }

  function emailSubmit(e) {
    alert("adding " + email + " to mailing list")
  }

  return (
    <div>
      <Nav/>
      <main className={styles.hero}>
        <h1 className={styles.heroTitle}>Coming Soon.</h1>
        <Image
          src="/logo.png"
          className={styles.heroLogo}
          width={420}
          height={280}
        />
        <p className={styles.heroPara}>Leap to the Forefront of A.I. Investment.</p>
        <div className={styles.heroForm}>
          <input onChange={emailChange} className={styles.heroEmail} type="email" placeholder="your@email.com"/>
          <button onClick={emailSubmit} className={styles.heroSubmit}>Notify Me!</button>
        </div>
      </main>
      <Socials/>
      <Footer/>
    </div>
  )
}
