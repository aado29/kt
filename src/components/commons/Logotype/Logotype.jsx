import React from 'react';

const Logotype = props => {
  return (
    <div className="bg-white md:flex items-center justify-center h-16 w-32 rounded inline-block md:inline-flex m-2 px-2 text-center">
      <img src={props.img} alt="Logo" className="mx-auto" />
    </div>
  );
};

export default Logotype;
