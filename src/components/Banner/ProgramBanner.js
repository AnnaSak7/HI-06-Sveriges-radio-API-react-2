import React from 'react';
import classes from '../styles/ProgramBanner.module.css';

const ProgramBanner = (props) => {
  return (
    <>
      <div className={classes.infoBox}>
        <div className={classes.programInfoBox}>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <div className={classes.btnContainer}>
            <a href="https://sverigesradio.se/">
              <img src="./assets/sr01.png" alt="sveriges radio" />
            </a>
            <button>
              <a href={props.programurl}>Program Page</a>
            </button>
          </div>
        </div>
        <div>
          <img
            className={classes.imgInBanner}
            src={props.image}
            alt={props.name}
          />
        </div>
      </div>
    </>
  );
};

export default ProgramBanner;
