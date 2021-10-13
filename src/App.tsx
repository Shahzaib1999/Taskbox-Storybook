import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Table from "./Components/Table/Table";

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <div className="body-wrapper">
        <Table />
      </div>
    </div>
  );
}

export default App;
