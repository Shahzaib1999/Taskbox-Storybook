import React from "react";

import { ButtonProps } from "../../Types/types";
import "./Button.css";

const Button: React.FC<ButtonProps> = ({ title, icon, onClick, classes }) => {
  return (
    <button className={`btn ${classes}`} onClick={onClick}>
      {title} {icon}
    </button>
  );
};

export default Button;
