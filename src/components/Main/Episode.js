import React from 'react';

import classes from '../styles/Playlist.module.css';
const Episode = (props) => {
  //Change the display of time from seconds
  function secondsToHms(seconds) {
    const time = {
      hours: String(Math.floor(Number(seconds) / 3600)),
      minutes: String(Math.floor((Number(seconds) % 3600) / 60)),
      seconds: String(Math.floor((Number(seconds) % 3600) % 60)),
    };

    if (time.hours && time.hours < 10) {
      time.hours = `0${time.hours}`;
    }
    if (time.minutes && time.minutes < 10) {
      time.minutes = `0${time.minutes}`;
    }
    if (time.seconds && time.seconds < 10) {
      time.seconds = `0${time.seconds}`;
    }

    if (time.hours !== '00') {
      return `${time.hours}:${time.minutes}:${time.seconds}`;
    } else {
      return `${time.minutes}:${time.seconds}`;
    }
  }

  return (
    <tr data-index={props.index}>
      <td>
        <img
          className={classes.episodeImage}
          src={props.image}
          alt={props.title}
        />
      </td>

      <td className={classes.episodeTitle}>{props.title}</td>
      <td>{secondsToHms(props.duration)}</td>
      <td>{props.description}</td>

      <td>
        <audio className={classes.audio} controls>
          <source src={props.src} type="audio/mp3" />
        </audio>
      </td>
    </tr>
  );
};

export default Episode;
