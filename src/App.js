import React, { useState, useEffect, useCallback, useReducer } from 'react';
import './App.css';
//import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Main from './components/Main';

const reducer = (state, action) => {
  switch (action.type) {
    case 'HOME':
      return { isHomeClicked: true, isListenNowClicked: false };
    case 'LISTENNOW':
      return { isListenNowClicked: true, isHomeClicked: false };
    case 'RESET':
      return { isHomeClicked: false, isListenNowClicked: false };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    isHomeClicked: false,
    isListenNowClicked: false,
  });
  // const [isHomeClicked, setIsHomeClicked] = useState(false);
  // const [isListenNowClicked, setIsListenNowClicked] = useState(false);

  //to pass program id to Banner
  const [ProgramId, setProgramId] = useState(null);
  //to pass programs data to Banner
  const [receivedProgramData, setReceivedProgramData] = useState([]);

  const onClickHomeHandler = useCallback(() => {
    //setIsHomeClicked(true);
    dispatch({ type: 'HOME' });
    //setIsListenNowClicked(false);
  }, []);

  const onClickListenNowHandler = useCallback(() => {
    //setIsListenNowClicked(true);
    dispatch({ type: 'LISTENNOW' });
    //setIsHomeClicked(false);
    console.log('litennow is clicked');
  }, []);

  // const onProgramClickedHandler = (id, data) => {
  //   //setIsHomeClicked(false);
  //   setProgramId(() => id);
  //   setReceivedProgramData(() => data);
  // };

  //changing the state of isHomeClicked using useEffect depending on the state change with onClickHomeHandler
  useEffect(() => {
    // setIsHomeClicked(false);
    // setIsListenNowClicked(false);
    dispatch({ type: 'RESET' });
  }, [onClickHomeHandler, onClickListenNowHandler]);

  return (
    <>
      <Navbar
        onClickHome={onClickHomeHandler}
        onClickListenNow={onClickListenNowHandler}
      />

      {/* <Route
            path="/home"
            element={
              <Banner
                //clickedProgramId={clickedProgramId}
                programData={receivedProgramData}
                homeClicked={isHomeClicked}
                listenNowClicked={isListenNowClicked}
              />
            }
          /> */}

      <Main
        homeClicked={state.isHomeClicked}
        listenNowClicked={state.isListenNowClicked}
        //onProgramClicked={onProgramClickedHandler}
        programData={receivedProgramData}
      />
    </>
  );
}

export default App;
