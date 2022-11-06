import React from "react";
import "./customBtn.scss";
const CustomBtn = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomBtn;
