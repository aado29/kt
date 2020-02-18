import React from 'react';

const Button = props => {
  return (
    <button className="bg-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white py-3 px-6 rounded mx-2 leading-6">
      {props.children}
    </button>
  );
};

export default Button;
