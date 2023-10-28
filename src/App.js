import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Manila" />
        <footer>
          This project was coded by Hazel and is{" "}
          <a
            href="https://github.com/hazelglaine/project-weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="ProjectLink"
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
