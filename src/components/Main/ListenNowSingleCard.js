import React from 'react';

import classes from '../styles/ListenNowSingleCard.module.css';

function ListenNowSingleCard(props) {
  return (
    <div className={classes.listenNowInfoBox}>
      <img
        className={classes.imgInListenNow}
        src={props.episodeData.image}
        alt={props.episodeData.program.name}
      />

      <div className={classes.episodeInfoBox}>
        <h1>{props.episodeData.name}</h1>
        <h2>{props.episodeData.title}</h2>
        <p>{props.episodeData.description}</p>

        <div className={classes.btnAudioContainer}>
          <audio controls>
            <source src={props.episodeData.src} type="audio/mp3" />
          </audio>
          <button>
            <a href={props.episodeData.url}>Episode Page</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListenNowSingleCard;
