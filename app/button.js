import React from "react";

const Button = ({ name, handleClick, className }) => {
  return (
    <button className={className} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
