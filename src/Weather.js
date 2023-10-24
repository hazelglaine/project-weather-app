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
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary ps-4 pe-4"
            />
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Wednesday 12:05 PM</li>
        <li>Partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather icon"
          />
          6℃
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
