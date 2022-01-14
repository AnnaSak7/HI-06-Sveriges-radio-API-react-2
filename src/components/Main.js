import React, { useState, createContext } from 'react';

import Banner from '../components/Banner/Banner';
import MainContent from '../components/Main/MainContent';

export const ClickedProgramIdContext = createContext();

function Main(props) {
  //to pass program id to Banner
  const [ProgramId, setProgramId] = useState(null);
  //to pass programs data to Banner
  const [receivedProgramData, setReceivedProgramData] = useState([]);

  const onProgramClickedHandler = (id, data) => {
    //setIsHomeClicked(false);
    setProgramId(() => id);
    setReceivedProgramData(() => data);
    console.log('programdata is ', props.programData);
  };
  return (
    <>
      <ClickedProgramIdContext.Provider value={ProgramId}>
        <Banner
          //clickedProgramId={clickedProgramId}
          programData={receivedProgramData}
          homeClicked={props.HomeClicked}
          listenNowClicked={props.listenNowClicked}
        />
        <MainContent
          homeClicked={props.homeClicked}
          listenNowClicked={props.listenNowClicked}
          onProgramClicked={onProgramClickedHandler}
        />
      </ClickedProgramIdContext.Provider>
    </>
  );
}

export default Main;
