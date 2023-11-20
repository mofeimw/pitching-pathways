import SocialFooter from "@/app/socialfooter";
import Nav from "@/app/nav";
import Image from "next/image";
import styles from "@/app/nav.module.css"

export default function Team() {
    return (
      <>
      <Nav/>

      <div>
        <h1>Hello World</h1>
      </div>
      <Image
        src="/bg.jpg"
        className={styles.navLogo}
        width={320}
        height={220}
      />

      <SocialFooter/>
      </>
    );
  }
  