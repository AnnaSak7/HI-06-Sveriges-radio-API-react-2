import React, { useState, useEffect } from 'react';
import FourCards from './FourCards';
import Playlist from './Playlist';

import classes from '../styles/Main.module.css';

const Main = (props) => {
  const [clickedProgramId, setClickedProgramId] = useState(null);
  const [isProgramClicked, setIsProgramClicked] = useState(false);

  const onClickProgramHandler = (id, data) => {
    setClickedProgramId(() => id);
    props.onProgramClicked(id, data);
    setIsProgramClicked(true);
    console.log('Main: clicked');
  };
  useEffect(() => {
    setIsProgramClicked(false);
    console.log('is home clicked in Main ', props.homeClicked);
  }, [props.homeClicked]);
  console.log('MAIN clickedProgramId is ', clickedProgramId);

  return (
    <div className={classes.homeMain}>
      <h2 className={classes.homeMainH2}>CHOOSE YOUR NIGHTMARE</h2>
      {(!isProgramClicked || props.homeClicked) && (
        <FourCards onClickProgram={onClickProgramHandler} />
      )}
      {isProgramClicked && <Playlist programId={clickedProgramId} />}
    </div>
  );
};

export default Main;
