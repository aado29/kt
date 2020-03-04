import React from 'react';

const Logotype = props => {
  return (
    <div className="md:flex items-center justify-center inline-block md:inline-flex m-2 text-center">
      <img src={props.img} alt="Logo" className="mx-auto rounded" />
    </div>
  );
};

export default Logotype;
