import React, { useState, useEffect } from 'react';
import ListenNowSingleCard from './ListenNowSingleCard';
import { fourPrograms } from './FourCards';

import classes from '../styles/ListenNowCards.module.css';

var programEpisodeData = [];

const ListenNowCards = () => {
  const [episodesListenNow, setEpisodesListenNow] = useState([]);
  //const [programQuantity, setProgramQuantity] = useState(0);
  const [isAllProgramsFetched, setIsAllProgramsFetched] = useState(false);

  const fetchProgramDataForListenNow = async (program) => {
    try {
      let URL = `https://api.sr.se/api/v2/episodes/index?pagination=false&format=json&programid=${program}`;
      let response = await fetch(URL);
      let data = await response.json();

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
      if (programEpisodeData.length === fourPrograms.length) {
        setIsAllProgramsFetched(true);
      }
      //setProgramQuantity(programEpisodeData.length);
      console.log('all fetched in function : ', isAllProgramsFetched);
      return programEpisodeData;
    } catch (error) {
      console.log('error : ', error);
    }
  };

  useEffect(() => {
    fourPrograms.map((program) => fetchProgramDataForListenNow(program));
    setEpisodesListenNow(programEpisodeData);
    return () => {
      programEpisodeData = [];
      setIsAllProgramsFetched(false);
    };
  }, []);

  console.log('all fetched  : ', isAllProgramsFetched);
  return (
    <>
      <div className={classes.container}>
        {isAllProgramsFetched ? (
          episodesListenNow.map((e) => {
            return <ListenNowSingleCard info={e} key={e.id} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default ListenNowCards;
