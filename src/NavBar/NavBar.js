import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <div>
        <h1 className={styles.emoji}>😎</h1>
      </div>
      <div className={styles.Nav}>
        <ul>
          <li>
            <NavLink className={styles.Home} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={styles.Contact} to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
