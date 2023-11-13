import Nav from '.././nav'
import Footer from '.././footer'

import Image from 'next/image'
import styles from './page.module.css'

export default function Join() {
  return (
    <div className={styles.join}>
      <Nav/>
      {/* this uses the same navigation component defined in the parent folder to reduce coding and add reusability */}
      <main>
        <h2>Pitching Pathways: Join</h2>
        <section>
          <h3>Join Placeholder</h3>
          <p>stuff goes here.</p>
        </section>
      </main>

      <Footer/>
    </div>
  )
}
