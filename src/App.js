import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Hazel and is{" "}
          <a
            href="https://github.com/hazelglaine/project-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>{" "}
          in Github.
        </footer>
      </div>
    </div>
  );
}

export default App;
