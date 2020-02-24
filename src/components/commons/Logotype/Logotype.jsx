import React from 'react';

const Logotype = props => {
  return (
    <div className="bg-white flex items-center justify-center h-16 w-32 rounded inline-flex m-2 px-2">
      <img src={props.img} alt="Logo" />
    </div>
  );
};

export default Logotype;
