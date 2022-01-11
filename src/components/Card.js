import React from 'react';

const Card = (props) => {
  const onClickHandler = (e) => {
    props.onClickProgram(e.target.id);
  };

  return (
    <>
      {props.programs.map((p) => (
        <div key={p.id} id={p.id} onClick={onClickHandler}>
          <div>
            <img id={p.id} src={p.img} alt={p.title} />
          </div>
          <div>
            <p id={p.id}>{p.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
