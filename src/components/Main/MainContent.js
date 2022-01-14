import React, { useState, useEffect } from 'react';
import FourCards from './FourCards';
import Playlist from './Playlist';

import classes from '../styles/Main.module.css';
import ListenNowSingleCard from './ListenNowSingleCard';
import ListenNowCards from './ListenNowCards';

const MainContent = (props) => {
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
    // <div className={classes.homeMain}>
    //   <h2 className={classes.homeMainH2}>CHOOSE YOUR NIGHTMARE</h2>
    //   {(!isProgramClicked || props.homeClicked) && (
    //     <FourCards onClickProgram={onClickProgramHandler} />
    //   )}
    // </div>

    // <FourCards onClickProgramHandler={onClickProgramHandler} />

    <div className={classes.homeMain}>
      <h2 className={classes.homeMainH2}>CHOOSE YOUR NIGHTMARE</h2>
      {(!isProgramClicked || props.homeClicked) && (
        <FourCards onClickProgram={onClickProgramHandler} />
      )}
      {isProgramClicked && !props.homeClicked && !props.listenNowClicked && (
        <Playlist programId={clickedProgramId} />
      )}
      {props.listenNowClicked && !props.homeClicked && !isProgramClicked && (
        <ListenNowCards />
      )}
    </div>
  );
};

export default MainContent;
