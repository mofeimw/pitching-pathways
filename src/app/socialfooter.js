import Image from 'next/image'
import styles from './socialfooter.module.css'

export default function SocialFooter() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <li><a href="https://www.instagram.com/pitchingpathways/"><Image
          src="/instagram.svg"
          width={40}
          height={40}
        /></a></li>
        <li><a href="https://twitter.com/PitchingPathway"><Image
          src="/x.svg"
          width={40}
          height={40}
        /></a></li>
        <li><a href=""><Image
          src="/facebook.svg"
          width={40}
          height={40}
        /></a></li>
      </ul>
    </footer>
  )
}
