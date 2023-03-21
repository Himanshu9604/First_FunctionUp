import React from 'react';
import styles from './Main.module.css';
import image from './Developer.jpg';
import playButton from './playBtn.jpg';
function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <p className={styles.subtitle}>Totally Busy</p>
        <h1 className={styles.title}>Let's Bring  Your team together Onclick</h1>
        <p className={styles.subtitleOne}>We help you to manage all your work and daily task in a office</p>
        <p className={styles.getStarted}>Get Started</p>
        <img className={styles.playButton} src={playButton} alt='Play button' />
      </div>
      <div className={styles.image}>
        <img src={image} alt='Bridge' />
      </div>
    </div>
  )
}

export default Main;
