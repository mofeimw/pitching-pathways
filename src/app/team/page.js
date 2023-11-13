import Nav from '.././nav'
import Footer from '.././footer'

import Image from 'next/image'
import styles from './page.module.css'

export default function Team() {
  return (
    <div>
      {/* <Nav/> */}
      {/* this uses the same navigation component defined in the parent folder to reduce coding and add reusability */}
      <main>
        <h2>Pitching Pathways: Team Members</h2>
        <section>
          <h3>Team Placeholder</h3>
          <p>stuff goes here.</p>
        </section>
      </main>

      <Footer/>
    </div>
  )
}
