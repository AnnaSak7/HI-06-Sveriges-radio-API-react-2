import React, { useState, useEffect, useCallback } from 'react';

import Episode from './Episode';

const Playlist = (props) => {
  const [clickedProgramId, setClickedProgramId] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    setClickedProgramId(props.programId);
  }, [props.programId]);

  const fetchEpisodesData = async (program) => {
    try {
      let URL = `https://api.sr.se/api/v2/episodes/index?pagination=false&format=json&programid=${program}`;
      let response = await fetch(URL);
      let data = await response.json();
      console.log('fetching... ', data);

      const episode = data.episodes;
      const loadedEpisodes = episode.map((episodeData) => {
        return {
          id: episodeData.id,
          title: episodeData.title,
          image: episodeData.imageurl,
          duration: episodeData.listenpodfile.duration,
          description: episodeData.description,
          src: episodeData.listenpodfile.url,
        };
      });
      console.log('loadedEpisodes are ', loadedEpisodes);
      let tenEpisodes = [];
      for (let i = 0; i < 10; i++) {
        tenEpisodes.push(loadedEpisodes[i]);
      }
      setEpisodes(tenEpisodes);
      console.log('ten episodes are ', tenEpisodes);
    } catch (error) {
      console.log(error, 'There has been an error');
    }
  };

  useEffect(() => {
    fetchEpisodesData(clickedProgramId);
  }, [clickedProgramId]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>
              <span className="fa fa-clock-o"></span>
            </th>
            <th>Description</th>
            <th>
              <i className="far fa-play-circle"></i>
            </th>
          </tr>
        </thead>
        <tbody id="playlistBody">
          {episodes.map((episode) => (
            <Episode
              key={episode.id}
              title={episode.title}
              image={episode.image}
              duration={episode.duration}
              description={episode.description}
              src={episode.src}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Playlist;
