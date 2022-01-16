import React, { useState, useCallback, useReducer, createContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Main from './components/Main';
import FourCards from './components/Main/FourCards';
import Playlist from './components/Main/Playlist';
import ListenNowCards from './components/Main/ListenNowCards';
import ProgramBanner from './components/Banner/ProgramBanner';
import MainBanner from './components/Banner/MainBanner';
import ListenNowBanner from './components/Banner/ListenNowBanner';

// export const ClickedProgramIdContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'HOME':
//       return { isHomeClicked: true, isListenNowClicked: false };
//     case 'LISTENNOW':
//       return { isListenNowClicked: true, isHomeClicked: false };
//     case 'RESET':
//       return { isHomeClicked: false, isListenNowClicked: false };
//     default:
//       return state;
//   }
// };

function App() {
  // const [state, dispatch] = useReducer(reducer, {
  //   isHomeClicked: false,
  //   isListenNowClicked: false,
  // });

  // //to pass program id to Banner
  // const [ProgramId, setProgramId] = useState(null);
  // //to pass programs data to Banner
  // const [receivedProgramData, setReceivedProgramData] = useState([]);

  // const [clickedProgramId, setClickedProgramId] = useState(null);
  // const [isProgramClicked, setIsProgramClicked] = useState(false);

  // const onClickProgramHandler = (id, data) => {
  //   setClickedProgramId(() => id);
  //   setReceivedProgramData(data);
  //   setIsProgramClicked(true);
  //   console.log('Main: clicked');
  // };

  // const onClickHomeHandler = useCallback(() => {
  //   //setIsHomeClicked(true);
  //   dispatch({ type: 'HOME' });
  //   //setIsListenNowClicked(false);
  // }, []);

  // const onClickListenNowHandler = useCallback(() => {
  //   //setIsListenNowClicked(true);
  //   dispatch({ type: 'LISTENNOW' });
  //   //setIsHomeClicked(false);
  //   console.log('litennow is clicked');
  // }, []);

  // const onProgramClickedHandler = (id, data) => {
  //   //setIsHomeClicked(false);
  //   setProgramId(() => id);
  //   setReceivedProgramData(() => data);
  // };

  return (
    <>
      <Navbar
      // onClickHome={onClickHomeHandler}
      // onClickListenNow={onClickListenNowHandler}
      />
      {/* <ClickedProgramIdContext.Provider value={ProgramId}> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBanner />
              <Main
              // homeClicked={state.isHomeClicked}
              // listenNowClicked={state.isListenNowClicked}
              // onProgramClicked={onProgramClickedHandler}
              // programData={receivedProgramData}
              />
            </>
          }
        >
          <Route
            path="/"
            element={
              <FourCards
              // onClickProgram={onClickProgramHandler}
              />
            }
          />
        </Route>
        <Route
          path="program/:ProgramId"
          element={
            <>
              <ProgramBanner /> <Playlist />
            </>
          }
        />
        <Route
          path="listnnow"
          element={
            <>
              <ListenNowBanner />
              <Main />
            </>
          }
        >
          <Route path="/listnnow" element={<ListenNowCards />} />
        </Route>
      </Routes>
      {/* </ClickedProgramIdContext.Provider> */}
    </>
  );
}

export default App;
