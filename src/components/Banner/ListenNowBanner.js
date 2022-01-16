import React from 'react';

import classes from '../styles/MainBanner.module.css';

const ListenNowBanner = () => {
  return (
    <>
      <div className={classes.banner}>
        <div className={classes.title}>
          <h1 className={classes.bannerH1}>
            Latest Nightmare You Wish For ...
          </h1>
        </div>
      </div>
    </>
  );
};

export default ListenNowBanner;
