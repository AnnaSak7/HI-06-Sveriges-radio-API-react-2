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
            <li id="home" onClick={props.onClickHome}>
              <NavLink to="/home">HOME</NavLink>
            </li>
            <li id="programs">
              {' '}
              <NavLink to="/programs">PROGRAMS</NavLink>
            </li>
            <li id="listenNow" onClick={props.onClickListenNow}>
              <NavLink to="/listennow">LISTEN NOW</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
