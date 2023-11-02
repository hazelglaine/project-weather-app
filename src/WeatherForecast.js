import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="WeatherForecast-day">Thu</div>
      <WeatherIcon code="01d" size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temp-max">32º</span>
        <span className="WeatherForecast-temp-min">21º</span>
      </div>
    </div>
  );
}
