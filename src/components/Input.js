import React from "react";

const Input = ({ type, className, placeholder, min, max }) => {
  return (
    <div>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
      ></input>
    </div>
  );
};

export default Input;
