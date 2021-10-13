import React from "react";
import { IoMdAdd } from "react-icons/io";

import { HeaderProps } from "../../Types/types";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./style.css";

const Header: React.FC<HeaderProps> = ({ setTitle, value, addTask }) => {
  return (
    <div className="header-wrapper">
      <h2>Taskbox</h2>
      <div className="d-flex">
        <Input change={setTitle} value={value} />
        <Button
          title="Add Task"
          icon={<IoMdAdd color="#FFF" size={20} />}
          onClick={addTask}
          classes="ml-5"
        />
      </div>
    </div>
  );
};

export default Header;
