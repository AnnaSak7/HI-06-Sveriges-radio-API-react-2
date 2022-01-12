import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';

function App() {
  const [isHomeClicked, setIsHomeClicked] = useState(false);

  //to pass program id to Banner
  const [clickedProgramId, setClickedProgramId] = useState(null);
  //to pass programs data to Banner
  const [receivedProgramData, setReceivedProgramData] = useState([]);

  const onClickHomeHandler = useCallback(() => {
    setIsHomeClicked(true);
  }, []);

  const onProgramClickedHandler = (id, data) => {
    setIsHomeClicked(false);
    setClickedProgramId(() => id);
    setReceivedProgramData(() => data);
  };

  //changing the state of isHomeClicked using useEffect depending on the state change with onClickHomeHandler
  useEffect(() => {
    setIsHomeClicked(false);
  }, [onClickHomeHandler]);

  return (
    <>
      <Navbar onClickHome={onClickHomeHandler} />
      <Banner
        clickedProgramId={clickedProgramId}
        programData={receivedProgramData}
        homeClicked={isHomeClicked}
      />
      <Main
        homeClicked={isHomeClicked}
        onProgramClicked={onProgramClickedHandler}
      />
    </>
  );
}

export default App;
