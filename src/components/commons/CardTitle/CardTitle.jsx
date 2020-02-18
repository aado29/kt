import React from 'react';
import './CardTitle.scss';

const CardTitle = props => {
  return <h2 className="card__title text-3xl mb-8">{props.children}</h2>;
};

export default CardTitle;
