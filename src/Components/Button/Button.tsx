import React from "react";

import { buttonProp } from "../../Types/types";
import "./Button.css";

const Button: React.FC<buttonProp> = ({ title, icon, onClick, classes }) => {
  return (
    <button className={`btn ${classes}`} onClick={onClick}>
      {title} {icon}
    </button>
  );
};

export default Button;
