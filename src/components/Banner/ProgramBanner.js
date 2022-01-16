import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from '../styles/ProgramBanner.module.css';

const ProgramBanner = (props) => {
  const [programData, setProgramData] = useState({});
  const id = useParams();
  const Id = id.ProgramId;

  useEffect(() => {
    const URL = `https://api.sr.se/api/v2/programs/${Id}?format=json`;
    fetch(URL)
      .then((res) => res.json())
      .then((programData) => {
        const pd = programData.program;
        setProgramData(pd);
      });
    return () => {
      setProgramData({});
    };
  }, [Id]);

  return (
    <>
      <div className={classes.banner}>
        <div className={classes.infoBox}>
          <div className={classes.programInfoBox}>
            <h1>{programData.name}</h1>
            <p>{programData.description}</p>
            <div className={classes.btnContainer}>
              <a href="https://sverigesradio.se/">
                <img src="../assets/sr01.png" alt="sveriges radio" />
              </a>
              <button>
                <a href={programData.programurl}>Program Page</a>
              </button>
            </div>
          </div>
          <div>
            <img
              className={classes.imgInBanner}
              src={programData.socialimage}
              alt={programData.name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramBanner;
