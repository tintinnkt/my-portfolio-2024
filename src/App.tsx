import React from "react";
import "./App.css";
import ProjectCard from "./component/ProjectCard";

function App() {

  return (
    <React.Fragment>
    <nav ></nav>
    <main>
      <h1>Hello Jarrrr</h1>
      <ul>
        <li><ProjectCard></ProjectCard></li>
      </ul>
    </main>
    </React.Fragment>
  );
}

export default App;
