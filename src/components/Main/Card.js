import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Card.module.css';

const Card = (props) => {
  const onClickHandler = (e) => {
    props.onClickProgram(e.target.id);
    console.log('Card: clicked');
  };

  return (
    <>
      <Link to={`program/${props.id}`}>
        <div
          className={classes.card}
          key={props.id}
          id={props.id}
          onClick={onClickHandler}
        >
          <div className={classes.cardImg}>
            <img id={props.id} src={props.img} alt={props.title} />
          </div>
          <div className={classes['card-description']}>
            <p id={props.id}>{props.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
