import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ListenNowSingleCard from './ListenNowSingleCard';
import { fourPrograms } from './FourCards';

import classes from '../styles/ListenNowCards.module.css';

var programEpisodeData = [];

const ListenNowCards = () => {
  const [episodesListenNow, setEpisodesListenNow] = useState([]);
  const location = useLocation();
  console.log('location : ', location.pathname);
  const fetchProgramDataForListenNow = async (program) => {
    try {
      let URL = `https://api.sr.se/api/v2/episodes/index?pagination=false&format=json&programid=${program}`;
      let response = await fetch(URL);
      let data = await response.json();
      console.log('fetching...', data);
      const episode = data.episodes[0];
      const loadedEpisode = {
        id: episode.id,
        name: episode.program.name,
        title: episode.title,
        image: episode.imageurl,
        description: episode.description,
        src: episode.listenpodfile.url,
        url: episode.url,
      };

      programEpisodeData.push(loadedEpisode);
      return programEpisodeData;
    } catch (error) {
      console.log('error : ', error);
    }
  };

  useEffect(() => {
    fourPrograms.map((program) => fetchProgramDataForListenNow(program));
    setEpisodesListenNow(programEpisodeData);
    console.log('programEpisodeData is ', programEpisodeData);
    return () => {
      programEpisodeData = [];
      console.log('programEpisodeData in clean up is ', programEpisodeData);
    };
  }, []);

  return (
    <>
      <div className={classes.container}>
        {episodesListenNow.map((e) => {
          return <ListenNowSingleCard info={e} />;
        })}
      </div>
    </>
  );
};

export default ListenNowCards;
