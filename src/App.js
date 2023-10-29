import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Manila" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://gleaming-vacherin-8e48c6.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="BioLink"
          >
            Hazel.
          </a>{" "}
          It is{" "}
          <a
            href="https://github.com/hazelglaine/project-weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="ProjectLink"
          >
            open-sourced
          </a>{" "}
          in Github and hosted in{" "}
          <a
            href="https://fabulous-froyo-0dcd2d.netlify.app/"
            className="HostLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
