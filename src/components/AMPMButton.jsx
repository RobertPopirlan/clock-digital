import React from 'react';

const AMPMButton = ({ onClick }) => {
  return (
    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"' onClick={onClick}>
      Toggle AM/PM
    </button>

  );
};

export default AMPMButton;
