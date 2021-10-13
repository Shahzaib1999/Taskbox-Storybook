import React from "react";

import { InputProps } from "../../Types/types";
import "./Input.css";

const Input: React.FC<InputProps> = ({ value, change }) => (
  <input
    className="input-wrapper"
    value={value}
    onChange={(e) => change(e.target.value)}
  />
);

export default Input;
