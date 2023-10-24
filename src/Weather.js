import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather container">
      <form className="SearchInput mt-2">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn w-100" />
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul className="DateDescription">
        <li>Wednesday 12:05 PM</li>
        <li>Partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather icon"
            className="float-left"
          />

          <span className="temperature">6</span>
          <span className="unit">℃</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 75%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
