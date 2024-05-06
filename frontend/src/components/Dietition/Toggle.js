import React, { useState } from 'react';

const Toggle = (props) => {
    const status = props.status
    const setPending = props.setPending
    const setSolved = props.setSolved
    

 
  return (
    <div className="flex items-center space-x-4">
    <button
      className={`px-4 py-2 rounded-lg ${status === 'Pending' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
      onClick={setPending}
    >
      Pending
    </button>
    <button
      className={`px-4 py-2 rounded-lg ${status === 'Solved' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
      onClick={setSolved}
    >
      Solved
    </button>
  </div>
  );
};

export default Toggle;
