import styles from '../styles/Navbar.module.css';
import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import logo from "../assets/Logo_White.png"


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const scrollToFooter = (event) => {
        event.preventDefault(); // Prevent the default behavior of the link
        const footerElement = document.getElementById('footer'); // Replace 'footer' with the actual id of your footer element
        if (footerElement) {
          footerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.navbar}>
          <div className={styles.logo}><img src={logo} alt="logo"/></div>
          <ul className={`${styles.navlinks} ${isMenuOpen ? styles.active : ''}`}>
            <li className={styles.links}>
                <Link to="/" className={styles.a}>Home</Link>
            </li>
            <li className={styles.links}>
                <Link to="/product" className={styles.a}>Product</Link>
            </li>
            <li className={styles.links}>
                <Link to="/contact" className={styles.a} onClick={scrollToFooter}>Contact</Link>
            </li>
          </ul>
          <div className={styles.burger} onClick={toggleMenu}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
          </div>
          <Outlet />
        </nav>
    );
  }
  
  export default Navbar;