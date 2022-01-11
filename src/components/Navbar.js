import React from 'react';

export default function Navbar(props) {
  return (
    <>
      <header id="header">
        <h1>BS</h1>
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
