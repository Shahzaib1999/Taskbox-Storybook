import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Header from "./Components/Header";
import Table from "./Components/Table/Table";
import { TaskStateProps } from "./Types/types";
import "./App.css";

function App() {
  const [title, setTitle] = useState<string>("");
  const [tasks, setTasks] = useState<TaskStateProps[]>([
    { title: "abc", completed: false },
  ]);

  const addTask = () => {
    if (!title.length) return toast.error("Enter Title");
    let dup = [...tasks];
    dup.push({ title, completed: false });
    setTasks(dup);
    setTitle("");
    toast.success("Added");
  };

  const deleteTask = (ind: number) => {
    let dup = [...tasks];
    dup.splice(ind, 1);
    setTasks(dup);
  };

  const completeTask = (ind: number) => {
    let dup = [...tasks];
    dup[ind].completed = true;
    setTasks(dup);
  };

  return (
    <div className="main-wrapper">
      <Toaster position="bottom-center" />
      <Header setTitle={setTitle} value={title} addTask={addTask} />
      <div className="body-wrapper">
        <Table
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      </div>
    </div>
  );
}

export default App;
