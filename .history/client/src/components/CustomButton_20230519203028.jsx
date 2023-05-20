/* eslint-disable react/prop-types */
import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === 'filled') {
      return {
        background: snap.color,
        color: '#fff',
        // Add any additional Tailwind CSS classes for filled button style
        // For example: 'rounded-md', 'px-4', 'py-2', etc.
      };
    }

    // Add any additional button styles for other types (if needed)

    return {}; // Default empty style
  };

  const buttonStyle = {
    ...generateStyle(type),
    // Add any additional styles or override existing styles
    // For example: 'font-bold', 'text-sm', etc.
  };

  return (
    <button
      className={`px-2 py-1.2 flex-1 rounded-md ${customStyles}`}
      style={buttonStyle}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
