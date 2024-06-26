"use client";

import { useState } from 'react';

import Image from 'next/image';

import Rodal from 'rodal';
import './rodal.css';

import Nav from './nav';
import Socials from './socials';
import Footer from './footer';

import styles from './page.module.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    fetch("/api/email", {
      method: "POST",
      body: new URLSearchParams(new FormData(e.target))
    })
      .then(() => {
        setEmail(email);
        showModal();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Nav />
      <main className={styles.hero}>
        <h1 className={styles.heroTitle}>Coming Soon.</h1>

        <h1 className={styles.heroH1}>Pitching Pathways</h1>

        <p className={styles.heroPara}>Leap to the Forefront of A.I. Investment.</p>

        <form action="/api/email" method="post" onSubmit={handleEmailSubmit} className={styles.heroForm}>
          <input name="email" className={styles.heroEmail} type="email" placeholder="your@email.com" required/>
          <button type="submit" className={styles.heroSubmit}>Notify Me</button>
        </form>
      </main>

      <Rodal visible={modalVisible} onClose={closeModal}>
        <div>
          <p className={styles.modalP}>Added {email} to the mailing list!</p>
          <Image
            src="/logo.png"
            className={styles.modalPic}
            width={320}
            height={200}
          />
        </div>
      </Rodal>

      <Socials />
      <Footer />
    </div>
  );
}
