import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small>Copyright © 2023 Pitching Pathways LLC</small>
      <br/>
      <small><a href="mailto:pitchingpathways@gmail.com">pitchingpathways@gmail.com</a></small>
    </footer>
  )
}
