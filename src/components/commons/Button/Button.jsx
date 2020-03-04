import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Button = ({ children, url }) => {
  return (
    <NavLink
      to={`/${url}`}
      className="navlink transition duration-300 ease-in-out bg-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white py-3 px-6 md:rounded md:mx-2 leading-6 w-1/2 md:w-auto text-center"
      activeClassName="bg-blue-500 text-white active"
    >
      {children}
    </NavLink>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  url: PropTypes.string.isRequired
};

export default Button;
