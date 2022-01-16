import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles/Navbar.module.css';

export default function Navbar(props) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>BS</h1>
        <nav>
          <ul>
            <li id="home">
              <NavLink
                to="/"
                className={styles.link}
                style={{ textDecoration: 'none' }}
              >
                HOME
              </NavLink>
            </li>
            <li id="programs">
              <NavLink
                to="/programs"
                className={styles.link}
                style={{ textDecoration: 'none' }}
              >
                PROGRAMS
              </NavLink>
            </li>
            <li id="listenNow">
              <NavLink
                to="/listennow"
                className={styles.link}
                style={{ textDecoration: 'none' }}
              >
                LISTEN NOW
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
