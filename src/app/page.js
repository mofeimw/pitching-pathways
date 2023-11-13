"use client";

import Nav from './nav'
import Socials from './socials'
import Footer from './footer'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  function emailSubmit(e) {
    let email = event.target.email.value
    e.preventDefault()

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

        <form action="/emailSubmit" method="post" onSubmit={emailSubmit} className={styles.heroForm}>
          <input  name="email" className={styles.heroEmail} type="email" placeholder="your@email.com"/>
          <button type="submit" className={styles.heroSubmit}>Notify Me!</button>
        </form>
      </main>
      <Socials/>
      <Footer/>
    </div>
  )
}
