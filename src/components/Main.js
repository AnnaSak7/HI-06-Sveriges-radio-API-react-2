import React, { useState, useEffect } from 'react';
import FourCards from './FourCards';
import Playlist from './Playlist';

const Main = (props) => {
  const [clickedProgramId, setClickedProgramId] = useState(null);
  const [isProgramClicked, setIsProgramClicked] = useState(false);

  const onClickProgramHandler = (id) => {
    setClickedProgramId(() => id);
    setIsProgramClicked(true);
  };
  useEffect(() => {
    setIsProgramClicked(false);
  }, [props.homeClicked]);
  console.log('MAIN clickedProgramId is ', clickedProgramId);

  return (
    <>
      <h2>CHOOSE YOUR NIGHTMARE</h2>
      {(!isProgramClicked || props.homeClicked) && (
        <FourCards onClickProgram={onClickProgramHandler} />
      )}
      {isProgramClicked && <Playlist programId={clickedProgramId} />}
    </>
  );
};

export default Main;
