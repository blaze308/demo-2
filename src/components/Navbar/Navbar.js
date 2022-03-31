import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav>
        <h3 className={styles.logo}>React Components</h3>

      <ul className={styles.nav__links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="service">Service</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
