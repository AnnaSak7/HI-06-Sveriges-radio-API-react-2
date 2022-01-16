import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import classes from '../styles/Main.module.css';

const MainContent = (props) => {
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
    <div className={classes.homeMain}>
      <h2 className={classes.homeMainH2}>CHOOSE YOUR NIGHTMARE</h2>
      <Outlet onProgramClicked={onProgramClickedHandler} />
    </div>
  );
};

export default MainContent;
