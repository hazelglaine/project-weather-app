import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.forecastData.temp.max);
    return `${maxTemp}º`;
  }
  function minTemperature() {
    let minTemp = Math.round(props.forecastData.temp.min);
    return `${minTemp}º`;
  }

  function forecastDay() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{forecastDay()}</div>
      <WeatherIcon code="01d" size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
        <span className="WeatherForecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
