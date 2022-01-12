import React from 'react';

import classes from '../styles/MainBanner.module.css';
const MainBanner = (props) => {
  return (
    <>
      <div className={classes.title}>
        <h1 className={classes.bannerH1}>BED TIME STORIES</h1>
        <p className={classes.terror}>
          for those who find relaxation in terror
        </p>
        <p className={classes.swedish}>...and who understand Swedish</p>
      </div>
    </>
  );
};

export default MainBanner;
