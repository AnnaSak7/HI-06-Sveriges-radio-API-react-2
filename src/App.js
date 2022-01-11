import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Main from './components/Main';

function App() {
  const [isHomeClicked, setIsHomeClicked] = useState(false);

  const onClickHomeHandler = useCallback(() => {
    setIsHomeClicked(true);
  });

  useEffect(() => {
    setIsHomeClicked(false);
  }, [onClickHomeHandler]);
  return (
    <>
      <Navbar onClickHome={onClickHomeHandler} />
      <Banner />
      <Main homeClicked={isHomeClicked} />
    </>
  );
}

export default App;
