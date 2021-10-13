import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiDeleteBin7Fill } from "react-icons/ri";

import "./Table.css";

const Table: React.FC<any> = () => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th></th>
        <th>Actions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {/* <div className="abs"></div> */}
          Task1
        </td>
        <td colSpan={3}>
          <BsCheckCircleFill color="green" size={22} className="cursor" />
          <RiDeleteBin7Fill
            color="#f52135"
            size={24}
            className="cursor ml-30"
          />
        </td>
      </tr>
    </tbody>
  </table>
);

export default Table;
