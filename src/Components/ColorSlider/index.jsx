import React, { useState } from "react";
import "./style.css";

export const ColorSlider = ({ baseColor, colorName, onValueChange }) => {
  
  const [changedValue, setChangedValue] = useState(0);

  const handleChange = (e) => {
    setChangedValue(e.target.value);
    onValueChange(changedValue);
  };

  return (
    <>
      <label htmlFor={baseColor}>{colorName}</label>
      <input
        type="range"
        className={`slider slider--${baseColor}`}
        id={`${baseColor}Slider`}
        min="0"
        max="255"
        value={changedValue}
        onChange={handleChange}
      />
    </>
  );
};
