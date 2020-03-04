import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = props => {
  const { children, cardBg } = props;

  return (
    <article
      className="card relative flex flex-col justify-end items-baseline m-4 p-4 md:p-12 rounded-lg text-white bg-cover"
      style={{ backgroundImage: `url(${cardBg})` }}
    >
      {children}
    </article>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  cardBg: PropTypes.string
};

export default Card;
