import React, { useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logo1} src='https://img.icons8.com/color/512/time-management-skills.png' alt='Logo' />
        <span className={styles.onclick}>Onclick</span>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Sign In</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default Header;
