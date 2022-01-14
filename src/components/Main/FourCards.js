import React, { useState, useEffect } from 'react';
import Card from './Card';

import classes from '../styles/FourCards.module.css';

export const fourPrograms = ['4947', '4845', '5413', '5188'];

const FourCards = (props) => {
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProgramHandler = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.sr.se/api/v2/programs/${id}?format=json`
      );
      if (!response.ok) {
        throw new Error('Something went wrong here!');
      }

      const data = await response.json();

      const loadedProgram = {
        id: data.program.id,
        title: data.program.name,
        img: data.program.socialimage,
        url: data.program.programurl,
        description: data.program.description,
      };

      return loadedProgram;
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const fetchFourProgramsHandler = async () => {
    //declare programsinarray here otherwise when state changes the same array will be stored and be piled up
    var programsInArray = [];
    const Serie = await fetchProgramHandler(fourPrograms[0]);
    programsInArray.push(Serie);
    const Creepy = await fetchProgramHandler(fourPrograms[1]);
    programsInArray.push(Creepy);
    const Krim = await fetchProgramHandler(fourPrograms[2]);
    programsInArray.push(Krim);
    const Dystopia = await fetchProgramHandler(fourPrograms[3]);
    programsInArray.push(Dystopia);

    setPrograms(programsInArray);
    console.log(programsInArray);
  };

  console.log('programs is', programs);

  useEffect(() => {
    fetchFourProgramsHandler();
    console.log('programs in effect is ', programs);
  }, []);

  const onClickProgramHandler = (id) => {
    props.onClickProgram(id, programs);
    console.log('FourCars: clicked');
  };

  return (
    <div className={classes.container}>
      {programs &&
        programs.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            img={p.img}
            title={p.title}
            description={p.description}
            onClickProgram={onClickProgramHandler}
          />
        ))}
    </div>
  );
};

export default FourCards;
