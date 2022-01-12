import React from 'react';

import styles from '../styles/Navbar.module.css';

export default function Navbar(props) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>BS</h1>
        <nav>
          <ul>
            <li id="home" onClick={props.onClickHome}>
              HOME
            </li>
            <li id="programs">PROGRAMS</li>
            <li id="listenNow">LISTEN NOW</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
