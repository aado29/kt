import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = props => {
  const { children, url } = props;
  return (
    <NavLink
      to={`/${url}`}
      className="transition duration-300 ease-in-out bg-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white py-3 px-6 rounded mx-2 leading-6"
      activeClassName="bg-blue-500 text-white"
    >
      {children}
    </NavLink>
  );
};

export default Button;
