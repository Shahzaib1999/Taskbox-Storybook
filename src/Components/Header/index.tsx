import React from "react";
import { GrAdd } from "react-icons/gr";

import Button from "../Button/Button";
import Input from "../Input/Input";
import "./style.css";

const Header: React.FC<any> = () => {
  return (
    <div className="header-wrapper">
      <h2>Taskbox</h2>
      <div className="d-flex">
        <Input />
        <Button
          title="Add Task"
          icon={<GrAdd />}
          onClick={() => console.log("ss")}
          classes="ml-5"
        />
      </div>
    </div>
  );
};

export default Header;
