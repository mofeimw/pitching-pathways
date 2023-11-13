import Nav from '.././nav'
import Footer from '.././footer'

import Image from 'next/image'
import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <Nav/>
      <main>
        <h2>Pitching Pathways: The Future of AI Investing</h2>
        <section>
          <h3>Why should you use Pitching Pathways</h3>
          <p>Pitching Pathways provides a path to the future of AI investment. Using Pitching Pathways, you will have that one easy step to allow you to invest in the future of AI no matter the time or place. All it takes is one click, and you will be on your way to investing in the future.</p>
        </section>
        <section>
          <h3>Who made it</h3>
          <p>Pitching Pathways was made from the idea of our CEO Peyton Loeffelbein. He hated how he wasn't able to find the latest and trending AI that could help us in the future. So he came up with the idea of creating a place to do so, and this was how the idea of Pitching Pathways was formed.</p>
          <p>Propelling this idea into action, he reached out to the person we now know as the CFO Phuoc Hua to build the website and bring the idea to life. They came up with an idea to build a team to make this small bud of light that they call Pitching Pathways come to life.</p>
          <p>Placeholder</p>
        </section>
      </main>

      <Footer/>
    </div>
  )
}
