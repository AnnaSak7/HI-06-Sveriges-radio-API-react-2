import React, { useState, useEffect } from 'react';
import ListenNowSingleCard from './ListenNowSingleCard';
import { fourPrograms } from './FourCards';

var programEpisodeData = [];

const ListenNowCards = () => {
  const [episodesListenNow, setEpisodesListenNow] = useState([]);

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

      console.log('episode.id is ', episode.id);
      programEpisodeData.push(loadedEpisode);
      console.log('programEpisodeData is  ', programEpisodeData);
      return programEpisodeData;
    } catch (error) {
      console.log('error : ', error);
    }
  };

  useEffect(() => {
    fourPrograms.map((program) => fetchProgramDataForListenNow(program));
    setEpisodesListenNow(programEpisodeData);

    console.log('episodesListenNow in effect is ', episodesListenNow);
    return () => {
      programEpisodeData = [];
    };
  }, []);

  console.log('episodesListenNow is ', episodesListenNow);
  return (
    <>
      {episodesListenNow.map((e) => {
        return <ListenNowSingleCard info={e} />;
      })}
    </>
  );
};

export default ListenNowCards;
