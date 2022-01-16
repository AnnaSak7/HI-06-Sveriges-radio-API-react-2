import React, { useState } from 'react';

import MainContent from '../components/Main/MainContent';

function Main(props) {
  //to pass program id to Banner
  const [ProgramId, setProgramId] = useState(null);
  //to pass programs data to Banner
  const [receivedProgramData, setReceivedProgramData] = useState([]);

  const onProgramClickedHandler = (id, data) => {
    //setIsHomeClicked(false);
    setProgramId(id);
    setReceivedProgramData(() => data);
    console.log('programdata is ', props.programData);
  };
  return (
    <>
      <MainContent
        homeClicked={props.homeClicked}
        listenNowClicked={props.listenNowClicked}
        onProgramClicked={onProgramClickedHandler}
      />
    </>
  );
}

export default Main;
