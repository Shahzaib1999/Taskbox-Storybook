import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiDeleteBin7Fill } from "react-icons/ri";

import { TaskProps, TaskStateProps } from "../../Types/types";
import "./Table.css";

const Table: React.FC<TaskProps> = ({ tasks, deleteTask, completeTask }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.length
        ? tasks.map((task: TaskStateProps, ind: number) => (
            <tr key={ind}>
              <td>
                {task.completed && <div className="abs"></div>}
                {task.title}
              </td>
              <td>
                <BsCheckCircleFill
                  color="#61d345"
                  size={22}
                  className="cursor"
                  onClick={() => (!task.completed ? completeTask(ind) : {})}
                />
                <RiDeleteBin7Fill
                  color="#ff4b4b"
                  size={24}
                  className="cursor ml-30"
                  onClick={() => (!task.completed ? deleteTask(ind) : {})}
                />
              </td>
            </tr>
          ))
        : null}
    </tbody>
  </table>
);

export default Table;
