import React from 'react';

import classes from '../styles/ListenNowSingleCard.module.css';

function ListenNowSingleCard({ info }) {
  return (
    // <div className={classes.listenNowContainer}>
    <div className={classes.listenNowInfoBox}>
      <div className={classes.imgInListenNow}>
        <img src={info.image} alt={info.name} />
      </div>
      <div className={classes.episodeInfoBox}>
        <h1>{info.name}</h1>
        <h2>{info.title}</h2>
        <p>{info.description}</p>

        <div className={classes.btnAudioContainer}>
          <audio controls>
            <source src={info.src} type="audio/mp3" />
          </audio>
          <button>
            <a href={info.url}>Episode Page</a>
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ListenNowSingleCard;
