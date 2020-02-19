import React from 'react';
import './CardTitle.scss';

const CardTitle = props => {
  return (
    <h2 className="card__title relative text-2xl md:text-3xl leading-tight mb-8 pb-8">
      {props.children}
    </h2>
  );
};

export default CardTitle;
