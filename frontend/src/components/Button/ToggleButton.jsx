import React, { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = ({ label, helperText }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const buttonStyle = {
    '--bg-btn': isChecked ? '#fed7d7' : '#C6F6D5',
    '--btn-color': isChecked ? '#e53e3e' : '#38A169',
  };

  return (
    <div className="btn-status flex items-center">
      <div className="ml-2 text-sm mr-10">
        <label htmlFor="checkbox" className="font-medium text-gray-900">
          {label}
        </label>
        <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500">
          {helperText}
        </p>
      </div>

      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor="checkbox"
        className="btn-change flex items-center ml-2 p-1 rounded-lg w-12 h-6 cursor-pointer"
        style={buttonStyle}
      ></label>
    </div>
  );
};

export default ToggleButton;
